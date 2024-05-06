<?php

namespace App\Controller\Dashboard;

use App\Entity\Referral;
use App\Entity\User;
use App\Repository\ReferralRepository;
use App\Repository\ReferredRepository;
use App\Repository\RewardRepository;
use Doctrine\ORM\EntityManagerInterface;
//use Random\RandomException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;

class ReferralController extends AbstractController
{

    /**
     * @Route({
     *      "en": "/dashboard/referral/",
     *      "nl": "/dashboard/referral/",
     *      "fr": "/dashboard/referral/"
     * }, name="dashboard_referral")
     *
     * @param $user User
     */
    public function index(
        UserInterface $user, ReferralRepository $referralRepository, RewardRepository $rewardRepository,
        ReferredRepository $referredRepository
    ): Response {
        $balance = $user->getCredits();

        $link = $referralRepository->findOneBy([
            'user' => $user
        ]);

        $referred = $referredRepository->findBy([
            'parentUser' => $user
        ]);


        $rewards = $rewardRepository->findBy([
            'referred' => $referred
        ], ['id' => 'DESC']);

        return $this->render('dashboard/referral/index.html.twig', [
            'balance' => $balance,
            'link' => $link,
            'referred' => $referred,
            'rewards' => $rewards
        ]);
    }

    /**
     * @Route("/dashboard/regenerate-link", name="dashboard_referral_regeneratelink")
     * @param $user User
     */
    public function regenerateLink(
        Request $request, ReferralRepository $referralRepository, UserInterface $user
    ): Response {
        $token = $request->request->get('csrf_token');
        if(!$this->isCsrfTokenValid('regenerate_token', $token)){
            throw new BadRequestHttpException('Invalid csrf token');
        }

        $rawToken = base64_encode(random_bytes(32).$user->getId());

        $refToken = str_replace(['/','+','-','=', '$'], '', $rawToken);

        $refToken = substr($refToken, 5, 8);

        $oldToken = $referralRepository->findOneBy([
            'user' => $user
        ]);
        if($oldToken === null){
            $oldToken = new Referral();
            $oldToken->setUser($user);
        }

        $oldToken->setLink($refToken);
        $oldToken->setCreatedAt(new \DateTime());

        $referralRepository->add($oldToken, true);

        return $this->redirectToRoute('dashboard_referral');
    }
}