<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PagesController extends AbstractController
{
    /**
     * @Route("/cookies/", name="cookies")
     */
    public function cookies()
    {
        return $this->render('pages/cookies.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    /**
     * @Route({
     *     "en": "/terms-and-conditions/",
     *     "nl": "/algemene-voorwaarden/",
     *     "fr": "/termes-et-conditions/"
     * }, name="terms")
     */
    public function terms()
    {
        return $this->render('pages/terms.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    /**
     * @Route({
     *     "en": "/privacy/",
     *     "nl": "/privacybeleid/",
     *     "fr": "/vie-privée/"
     * }, name="privacy")
     */
    public function aboutUs()
    {
        return $this->render('pages/privacy.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    /**
     * @Route({
     *     "en": "/what-about/",
     *     "nl": "/wat-is-promotip/",
     *     "fr": "/que-est-ce-qu-est-promotip/"
     * }, name="what_about")
     */
    public function whatAbout()
    {
        return $this->render('pages/what_about.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    /**
     * @Route({
     *     "en": "/faq/",
     *     "nl": "/faq/",
     *     "fr": "/faq/"
     * }, name="faq")
     */
    public function faq()
    {
        return $this->render('pages/faq.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    /**
     * @Route({
     *     "en": "/advertise/",
     *     "nl": "/adverteren/",
     *     "fr": "/advertise/"
     * }, name="advertise")
     */
    public function advertise()
    {
        return $this->render('pages/advertise.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    /**
     * @Route({
     *     "en": "/participant/",
     *     "nl": "/deelnemer/",
     *     "fr": "/participant/"
     * }, name="deelnemer")
     */
    public function deelnemer()
    {
        return $this->render('pages/entrepreneur.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }
}
