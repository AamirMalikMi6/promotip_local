<?php

namespace App\Controller;

use App\Entity\Referral;
use App\Entity\Referred;
use App\Entity\Reward;
use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Repository\UserRepository;
use App\Security\LoginAuthenticator;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use App\Service\RewardService;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;

class RegistrationController extends AbstractController
{
    private $entityManager;

    private $logger;

    public function __construct(
        EntityManagerInterface $entityManager, LoggerInterface $logger
    )
    {
        $this->entityManager = $entityManager;
        $this->logger = $logger;
    }

    /**
     * @Route({
     *     "en": "/aregister/",
     *     "nl": "/aregister/",
     *     "fr": "/aregister/"
     * }, name="ajax_register")
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder, GuardAuthenticatorHandler $guardHandler, LoginAuthenticator $authenticator, MailerInterface $mailer): Response
    {

        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $hash = $this->generateHash(68);

            // $user->setEnabled(true);
            $user->setEnabled(0);
            $user->setDeleted(0);
            $user->setValidationHash($hash);
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            // check for referral link
            if($request->getSession()->has('referral_token')){
                // add in database and give reward later
                $this->processReferral($request->getSession()->get('referral_token'), $user, $request);
            }

            // do anything else you need here, like send an email

            $email = (new TemplatedEmail())
                ->from(new Address($this->getParameter('mail.info.email'), $this->getParameter('mail.info.name')))
                ->to($user->getEmail())
                ->subject('Welkom bij Promotip!')
                ->htmlTemplate('emails/html/register.html.twig')

                // pass variables (name => value) to the template
                ->context([
                    'firstname' => $user->getFirstname(),
                    'hash' => $hash
                ]);

            $sentEmail = $mailer->send($email);

            /*
            return $guardHandler->authenticateUserAndHandleSuccess(
                $user,
                $request,
                $authenticator,
                'main' // firewall name in security.yaml
            );
            */
            return $this->redirectToRoute('register_done');


        } else if ($form->isSubmitted()) {
            $errors = $this->getErrorMessages($form);
            return $this->json(['errors' => $errors]);
        }

        return $this->render('registration/register.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    private function getErrorMessages(\Symfony\Component\Form\Form $form)
    {
        $errors = array();

        foreach ($form->getErrors() as $key => $error) {
            if ($form->isRoot()) {
                $errors['#'][] = $error->getMessage();
            } else {
                $errors[] = $error->getMessage();
            }
        }

        foreach ($form->all() as $child) {
            if (!$child->isValid()) {
                $errors[$child->getName()] = $this->getErrorMessages($child);
            }
        }

        return $errors;
    }

    /**
     * @Route({
     *     "en": "/register/done",
     *     "nl": "/registreren/klaar",
     *     "fr": "/inscription/fini"
     * }, name="register_done")
     */
    public function registerDone(Request $request, GuardAuthenticatorHandler $guardHandler, LoginAuthenticator $authenticator): Response
    {
        return $this->render('registration/done.html.twig', [
        ]);
    }

    /**
     * @Route({
     *     "en": "/register/activate",
     *     "nl": "/registreren/activeren",
     *     "fr": "/inscription/activation"
     * }, name="register_activate")
     */
    public function registerActivate(
        Request $request, UserRepository $userRepository, GuardAuthenticatorHandler $guardHandler,
        LoginAuthenticator $authenticator, RewardService $rewardService
    ): Response
    {
        if ($user = $userRepository->findOneBy(['validationHash' => $request->query->get('h')])) {
            $user->setEnabled(true);
            $user->setValidationHash('');
            $this->getDoctrine()->getManager()->flush();

            $guardHandler->authenticateUserAndHandleSuccess(
                $user,
                $request,
                $authenticator,
                'main' // firewall name in security.yaml
            );

            // validate and reward with referral program
            $referred = $this->entityManager->getRepository(Referred::class)->findOneBy([
                'childUser' => $user
            ]);
            if($referred !== null){
                $rewardService->checkSignup($referred);
            }

            return $this->redirectToRoute('dashboard_company', ['action' => 'register']);

        } else {
        }


        return $this->render('registration/activate.html.twig', [
        ]);
    }


    private function generateHash(int $length = 72)
    {
        $length = ($length < 4) ? 4 : $length;
        return bin2hex(random_bytes(($length - ($length % 2)) / 2));
    }

    private function processReferral(string $token, User $user, Request $request): void {
        $link = $this->entityManager->getRepository(Referral::class)->findOneBy([
            'link' => $token
        ]);

        if($link === null){
            $this->logger->notice(sprintf('Invalid link found %s', $token));
            return;
        }

        $referred = new Referred();
        $referred->setParentUser($link->getUser());
        $referred->setChildUser($user);
        $referred->setCreatedAt(new \DateTime());
        $referred->setHttpReferrer($request->server->get('HTTP_REFERER'));
        $referred->setIpAddress($request->getClientIp());
        $referred->setIsProcessed(false);

        $this->entityManager->persist($referred);
        $this->entityManager->flush();
    }
}
