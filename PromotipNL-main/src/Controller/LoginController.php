<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class LoginController extends AbstractController
{
    /**
     * @Route({
     *     "en": "/alogin/",
     *     "nl": "/alogin/",
     *     "fr": "/alogin/"
     * }, name="login")
     */
    public function ajaxLogin(AuthenticationUtils $authenticationUtils, Request $request)
    {
        if (!$request->isXMLHttpRequest() && !$_POST) return $this->redirectToRoute('home');

        if ($this->getUser()) {
            return $this->redirectToRoute('dashboard_index');
        }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();

        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        $response = [];

        if ($error) {
            $response['security'] = $error->getMessageKey('$error');
        }

        $response['warning'] = $this->container->get('session')->getFlashBag()->get("warning");

        return $this->json($response);
        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route({
     *     "en": "/logout/",
     *     "nl": "/uitloggen/",
     *     "fr": "/deconnexion/"
     * }, name="logout")
     */
    public function logout()
    {
        // throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }
}
