<?php

namespace App\Controller\Dashboard;

use App\Entity\Eventadvert;
use App\Entity\EventadvertPremium;
use App\Entity\Transaction;
use App\Entity\GeoPlaces;
use App\Entity\UserCredit;
use App\Entity\CreditPayment;
use App\Entity\Invoice;
use App\Entity\InvoiceDetail;
use App\Service\InvoiceService;
use App\Service\RewardService;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Dompdf\Dompdf;
use Dompdf\Options;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use App\Twig\PromotipTwigExtension;

class PaymentController extends AbstractController
{

    private $invoiceService;

    public function __construct(InvoiceService $invoiceService )
    {
        $this->invoiceService = $invoiceService;
    }
    /**
     * @Route("/dashboard/event/{id}/pay", name="dashboard_eventadvert_pay", requirements={"id"="\d+"})
     */
    public function getAdvertPaymentPage(
        Request       $request,
        UserInterface $user,
        int           $id
    )
    {
        $entityManager = $this->getDoctrine()->getManager();
        $eventAdvert = $entityManager->getRepository(Eventadvert::class)->findOneBy([
            'id' => $id
        ]);

        $userCredit = $user->getCredits();

        return $this->render('dashboard/payment/pay.html.twig', [
            'eventAdvert' => $eventAdvert,
            'plans' => $this->getParameter('plans'),
            'userCredit' => $userCredit,
            'minimumBalance' => 1,
            'balance' => $user->getCredits()
        ]);
    }

    /**
     * @Route("/payment/generate", name="generate_payment", methods={"POST"})
     */
    public function generatePayment(
        Request         $request,
        UserInterface   $user,
        MailerInterface $mailer
    )
    {
        $isBigPremium = false;
        $bigPremiumOptions = ['ONE_WEEK', 'TWO_WEEKS', 'ONE_MONTH'];
        if ( in_array( $request->request->get('payment_plan'), $bigPremiumOptions ))  $isBigPremium = true;
        $plans = $this->getParameter('plans');
        if ($request->isXMLHttpRequest()) {
            try {

                $gateway = $this->initMolliePayment();
                $mollie = $gateway['mollie_client'];
                $entityManager = $this->getDoctrine()->getManager();
                $amount = $plans[$request->request->get('payment_plan')]['fee'];

                if ( !str_contains($request->request->get('payment_plan'), 'CREDIT') )
                {
                    $description = 'Betaling voor "' . $request->request->get('advert_name') . '"';
                    $redirectUrl = "{$gateway['protocol']}://{$gateway['hostname']}/payment/redirect";

                    $payload = [
                        "amount" => [
                            "currency" => "EUR",
                            "value" => $amount
                        ],
                        "description" => $description,
                        "redirectUrl" => $redirectUrl,
                        "metadata" => [
                            "advert" => $request->request->get('advert'),
                            "plan" => $request->request->get('payment_plan'),
                            "advert_type" => ( $isBigPremium ? 'big_premium' : 'sample' )
                        ],
                    ];

                    $payment = $mollie->payments->create($payload);
                    return $this->json(['uri' => $payment->getCheckoutUrl()]);
                } else {

                    // $userCredit = $entityManager->getRepository(UserCredit::class)->findOneBy(['userId' => $user->getId()]);
                    $totalCredit = $user->getCredits() - $amount;
                    $user->setCredits($totalCredit);
                    $entityManager->flush();

                    $advertID = (int) $request->request->get('advert');

                    $redirectUrl = "{$gateway['protocol']}://{$gateway['hostname']}/payment/credit/{$advertID}/{$request->request->get('payment_plan')}";
                    return $this->json(['uri' => $redirectUrl]);
                }

            } catch (\Mollie\Api\Exceptions\ApiException $e) {
                return $this->json(['error' => "Fout in Mollie betaling"]);
            }
        }
    }

    public function initMolliePayment()
    {
        $mollie = new \Mollie\Api\MollieApiClient();
        $mollie->setApiKey($this->getParameter('mollie_key'));

        $protocol = isset($_SERVER['HTTPS']) && strcasecmp('off', $_SERVER['HTTPS']) !== 0 ? "https" : "http";
        $hostname = $_SERVER['HTTP_HOST'];

        return ['mollie_client' => $mollie, 'protocol' => $protocol, 'hostname' => $hostname];
    }

    /**
     * @Route("/payment/redirect", name="payment_redirect")
     */
    public function getPaymentDetailPage(
        Request $request, MailerInterface $mailer, UserInterface $user, PromotipTwigExtension $promotipTwigExtension,
        RewardService $rewardService
    )
    {
        $gateway = $this->initMolliePayment();
        $mollie = $gateway['mollie_client'];

        $payments = $mollie->payments->page();
        $lastPayment = $payments[0];

        $entityManager = $this->getDoctrine()->getManager();

        if ( $lastPayment->metadata->advert_type == 'big_premium' )
        {
            $eventAdvert = $entityManager->getRepository(EventadvertPremium::class)->find($lastPayment->metadata->advert);
        } else {
            $eventAdvert = $entityManager->getRepository(Eventadvert::class)->find($lastPayment->metadata->advert);
        }

        $plans = $this->getParameter('plans');
        $userPlan = $plans[$lastPayment->metadata->plan];
        $subject = 'Betaald "' . $eventAdvert->getTitle() . '"';

        if ($lastPayment->isPaid() && !$lastPayment->hasRefunds() && !$lastPayment->hasChargebacks()) {

            $this->transactionStore($eventAdvert, $lastPayment, $user, $lastPayment->metadata->advert_type);
//            $this->sendEmailPaidAdvert($subject, $mailer, $user, $eventAdvert, $userPlan);

            $subjectWebhook = '"' . $eventAdvert->getTitle() . '" betaalstatus';
            // $this->sendEmailWebhookStatus($subjectWebhook, $mailer, $user, $lastPayment);

            if ( $lastPayment->metadata->advert_type == 'big_premium' ) {
                $eventAdvert->setPaid(1);
                $eventAdvert->setPlan($lastPayment->metadata->plan);

                $normalAdvert = $entityManager->getRepository(Eventadvert::class)->find((int) $eventAdvert->getRedirectionLink());
                if ( $normalAdvert )
                {
                    if($normalAdvert->getPaidDate() === null){
                        $normalAdvert->setPaidDate((new \DateTime())->modify($promotipTwigExtension->planDays[$lastPayment->metadata->plan]));
                    }else{
                        $prevPaidDate = clone $normalAdvert->getPaidDate();
                        $normalAdvert->setPaidDate($prevPaidDate->modify($promotipTwigExtension->planDays[$lastPayment->metadata->plan]));
                    }
                    $normalAdvert->setPaymentStatus('paid');
                    $normalAdvert->setCreationDate(new \DateTime());
//                    $normalAdvert->setPaidDate($normalAdvert->getPaidDate()->modify($promotipTwigExtension->planDays[$lastPayment->metadata->plan]));
                    $normalAdvert->setPlan($lastPayment->metadata->plan);


                    // $entityManager->flush();
                    $entityManager->persist($normalAdvert);

                }
                $rewardService->checkBigPremiumAdvert($eventAdvert);
            } else {
                $eventAdvert->setPaymentStatus('paid');
                $eventAdvert->setCreationDate(new \DateTime());

                if($eventAdvert->getPaidDate() !== null){
                    $prevPaidDate = clone $eventAdvert->getPaidDate();
                    $eventAdvert->setPaidDate($prevPaidDate->modify($promotipTwigExtension->planDays[$lastPayment->metadata->plan]));
                }else{
                    $eventAdvert->setPaidDate((new \DateTime())->modify($promotipTwigExtension->planDays[$lastPayment->metadata->plan]));
                }

                $eventAdvert->setPlan($lastPayment->metadata->plan);

                $rewardService->checkPremiumAdvert($eventAdvert);
            }
           
            $entityManager->persist($eventAdvert);
            $entityManager->flush();

            $lastInvoice = $entityManager->getRepository(Invoice::class)->findOneBy([], ['id' => 'DESC']);
            if ( $lastInvoice )
            {
                $nextInvoiceNumber = $lastInvoice->getNumber() + 1;
            } else {
                $nextInvoiceNumber = 520;
            }

            $invoice = new Invoice();
            $invoice->setNumber($nextInvoiceNumber);
            $invoice->setInvoiceDate(new \DateTime());
            $invoice->setUserId($user->getId());

            $vatPercent = $this->getParameter('vat_percent');
            $vatAmount = 0;
            $subTotal = $lastPayment->amount->value;
            if ( $vatPercent > 0 ) {
                $subTotal = $lastPayment->amount->value /(($vatPercent+100)/100);
                $vatAmount = $lastPayment->amount->value - $subTotal;
//                $vatAmount = ($lastPayment->amount->value * $vatPercent) / 100;
            }

            $vatAmount = round($vatAmount, 2);
            $totalHT = $subTotal;
            $invoice->setTotalHt($totalHT);
            $invoice->setTotalTax($vatAmount);
            $invoice->setTotalTTC($lastPayment->amount->value);

            $entityManager->persist($invoice);
            $entityManager->flush();


            $invoiceDetail = new InvoiceDetail();
            $invoiceDetail->setInvoice($invoice);
            $invoiceDetail->setEventadvertTitle($eventAdvert->getTitle());
            $invoiceDetail->setTransactionId($lastPayment->id);
            $invoiceDetail->setQuantity(1);
            $invoiceDetail->setEventadvertFeeAmount($vatAmount);
            $invoiceDetail->setPublicationDate(new \DateTime());
            $invoiceDetail->setTotalAmount($lastPayment->amount->value);

            $entityManager->persist($invoiceDetail);
            $entityManager->flush();

            $this->sendEmailPaidAdvert($subject, $mailer, $user, $eventAdvert, $userPlan, $invoice);

            return $this->render('dashboard/payment/success.html.twig', [
                'eventAdvert' => $eventAdvert,
                'plan' => $userPlan,
                'balance' => $user->getCredits()
            ]);

        } elseif ($lastPayment->isPending()) {

            return $this->render('dashboard/payment/pending.html.twig', [
                'eventAdvert' => $eventAdvert,
                'plan' => $userPlan,
                'balance' => $user->getCredits()
            ]);
        } elseif ($lastPayment->isCanceled()) {
            return $this->redirectToRoute('dashboard_eventadvert_pay', ['id' => $eventAdvert->getId()]);
        }else{
            $this->addFlash('warning', 'Unknown error occurred');
            return $this->redirectToRoute('dashboard_eventadvert_pay', ['id' => $eventAdvert->getId()]);
        }

    }

    /**
     * @Route("/payment/credit/{advert}/{plan}", name="update_advert_credit_plan")
     */
    public function updateAdvertForCreditPayment(
        Request $request, UserInterface $user, int $advert, string $plan,
        PromotipTwigExtension $promotipTwigExtension
    )
    {
        $entityManager = $this->getDoctrine()->getManager();
        $eventAdvert = $entityManager->getRepository(Eventadvert::class)->find($advert);

        $this->storeCreditPaymentDetail($eventAdvert, $plan, $user);

        $eventAdvert->setPaymentStatus('paid');
        $eventAdvert->setCreationDate(new \DateTime());

        if($eventAdvert->getPaidDate() !== null){
            $prevPaidDate = clone $eventAdvert->getPaidDate();
        }else{
            $prevPaidDate = new \DateTime();
        }

        $eventAdvert->setPaidDate($prevPaidDate->modify($promotipTwigExtension->planDays[$plan]));
        $eventAdvert->setPlan($plan);
        $entityManager->flush();

        return $this->redirectToRoute('payment_redirect_credit_plan', ['id' => $eventAdvert->getId()]);     

    }

    /**
     * @Route("/payment/redirect/credit/{id}", name="payment_redirect_credit_plan")
     */
    public function getRedirectPageForCreditPayment(int $id, UserInterface $user)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $eventAdvert = $entityManager->getRepository(Eventadvert::class)->find($id);

        if ( !$eventAdvert || !$eventAdvert->getPlan() ) return $this->redirectToRoute('dashboard_index');

        $plans = $this->getParameter('plans');
        $userPlan = $plans[$eventAdvert->getPlan()];

        return $this->render('dashboard/payment/success.html.twig', [
            'eventAdvert' => $eventAdvert,
            'plan' => $userPlan,
            'isCredit' => true,
            'balance' => $user->getCredits()
        ]);      

    }

    /**
     * @Route("/payment/webhook", name="payment_webhook")
     */
    public function getWebhookPage(UserInterface $user)
    {
        $gateway = $this->initMolliePayment();
        $mollie = $gateway['mollie_client'];

        $payments = $mollie->payments->page();

        return $this->render('dashboard/payment/webhook_page.html.twig', [
            'payments' => $payments,
            'balance' => $user->getCredits()
        ]);
    }

    public function transactionStore(
        $eventAdvert,
        $payment_intent,
        UserInterface $user,
        $advert_type
    )
    {

        $entityManager = $this->getDoctrine()->getManager();
        if (is_null($payment_intent->method)) $payment_intent->method = 'none';

        $transaction = new Transaction();
        $transaction->setUser($user);

        if ( $advert_type == 'big_premium' ) {
            $transaction->setPremiumEventAdvert($eventAdvert);
        } else {
            $transaction->setEventAdvert($eventAdvert);
        }

        $transaction->setPaymentMethod($payment_intent->method);
        $transaction->setServiceTransactionId($payment_intent->id);
        $transaction->setAmount($payment_intent->amount->value);
        $transaction->setDatePayment(new \DateTime($payment_intent->createdAt));

        $entityManager->persist($transaction);
        $entityManager->flush();
    }

    public function storeCreditPaymentDetail(
        $eventAdvert,
        $plan,
        UserInterface $user
    )
    {
        $entityManager = $this->getDoctrine()->getManager();
        $plans = $this->getParameter('plans');
        $creditDeducted = $plans[$plan]['fee'];

        $creditPayment = new CreditPayment();
        $creditPayment->setUser($user);
        $creditPayment->setEventAdvert($eventAdvert);
        $creditPayment->setCreditDeducted($creditDeducted);
        $creditPayment->setDatePayment(new \DateTime());

        $entityManager->persist($creditPayment);
        $entityManager->flush();
    }

    public function sendEmailPaidAdvert($subject, $mailer, $user, $eventAdvert, $plan, Invoice $invoice = null)
    {
        // create and save invoice
        $invoicePath = $this->invoiceService->createInvoice($invoice->getId(), $user);

        try {
            $email = (new TemplatedEmail())
                ->to($user->getEmail())
                ->subject($subject)
                ->htmlTemplate('dashboard/emails/advert_paid.html.twig')
                ->context([
                    'eventAdvert' => $eventAdvert,
                    'plan' => $plan
                ])->attachFromPath($invoicePath);

            $mailer->send($email);
        } catch (TransportExceptionInterface $e) {
            // some error prevented the email sending; display an
            // error message or try to resend the message
        }
    }

    public function sendEmailWebhookStatus($subject, $mailer, $user, $payment)
    {
        try {
            $email = (new TemplatedEmail())
                ->to($user->getEmail())
                ->subject($subject)
                ->htmlTemplate('dashboard/emails/webhook_status.html.twig')
                ->context([
                    'payment' => $payment
                ]);

            $mailer->send($email);
        } catch (TransportExceptionInterface $e) {
            // some error prevented the email sending; display an
            // error message or try to resend the message
        }
    }

    /**
     * @Route("/dashboard/premium_event/{id}/pay", name="dashboard_premium_eventadvert_pay", requirements={"id"="\d+"})
     */
    public function getPremiumAdvertPaymentPage(
        Request       $request,
        UserInterface $user,
        int           $id
    )
    {
        $entityManager = $this->getDoctrine()->getManager();
        $premiumEventAdvert = $entityManager->getRepository(EventadvertPremium::class)->findOneBy([
            'id' => $id
        ]);

        $userCredit = $user->getCredits();

        return $this->render('dashboard/payment/premium_pay.html.twig', [
            'premiumEventAdvert' => $premiumEventAdvert,
            'plans' => $this->getParameter('plans'),
            'userCredit' => $userCredit,
            'minimumBalance' => 1,
            'balance' => $user->getCredits()
        ]);
    }

}