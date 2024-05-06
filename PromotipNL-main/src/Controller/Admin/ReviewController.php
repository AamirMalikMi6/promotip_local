<?php

namespace App\Controller\Admin;

use App\Entity\Review;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ReviewController extends AbstractController
{
    /**
     * @Route("/admin/panel/reviews", name="admin_panel_reviews")
     */
    public function reviews(Request $request, EntityManagerInterface $em)
    {
        $reviews = $em->getRepository(Review::class)->findAll();

        return $this->render('admin/panel/reviews.html.twig', ['reviews' => $reviews]);
    }

    /**
     * @Route("/admin/panel/reviews/{id}/approve", name="admin_panel_review_approve")
     */
    public function approve($id, EntityManagerInterface $em, Request $request)
    {
        $review = $em->getRepository(Review::class)->find($id);

        $review->setApproved(1);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($review);
        $entityManager->flush();

        $route = $request->headers->get('referer');

        return $this->redirect($route);
    }

}