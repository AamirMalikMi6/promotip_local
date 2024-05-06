<?php

namespace App\Service;

use Dompdf\Dompdf;
use Dompdf\Options;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;

final class EmailService
{

    private $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }
    public function emailInvoice($invoiceHtml, $subject, $user, $invoice, $invoiceDetails)
    {
        try {

            $options = new Options();
            $options->set('defaultFont', 'Arial');
            $options->set('isRemoteEnabled', true);

            $pdf = new Dompdf($options);

            $pdf->loadHtml($invoiceHtml);
            $pdf->setPaper('A4', 'portrait');
            $pdf->render();

            $pdfInvoice = $pdf->output();

            $email = (new TemplatedEmail())
                ->to($user->getEmail())
                ->subject($subject)
                ->htmlTemplate('dashboard/emails/invoice.html.twig')
                ->attach($pdfInvoice, $invoice->getInvoiceDate()->format('Y').'-'.str_pad($invoice->getNumber(), 4, "0", STR_PAD_LEFT) . ".pdf",
                    'application/pdf');

            $this->mailer->send($email);
        } catch (\Exception $e) {
            // some error prevented the email sending; display an
            // error message or try to resend the message
        }
    }
}