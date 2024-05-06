<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use FOS\ElasticaBundle\Manager\RepositoryManagerInterface;
use FOS\ElasticaBundle\Manager\Filter;
use Knp\Component\Pager\PaginatorInterface;

use App\Repository\CategoryRepository;
use App\Repository\ChannelRepository;
use App\Repository\GeoPlacesRepository;
use App\Repository\UserRepository;

use App\Entity\Keywords;
use App\Entity\Tag;
use App\Entity\Company;
use App\Entity\CompanyTag;
use App\Entity\Eventadvert;
use App\Entity\EventadvertTag;
use App\Service\HelperService;

class SearchController extends AbstractController
{
    /**
     * @Route("/zoeken", name="search")
     */
    public function index(RepositoryManagerInterface $finderRepository, HelperService $helper, Request $request, PaginatorInterface $paginator, ChannelRepository $channelRepository, CategoryRepository $categoryRepository, GeoPlacesRepository $geoPlacesRepository)
    {

        $q = strip_tags($request->query->get('q'));

        $entityManager = $this->getDoctrine()->getManager();

        $results = $finderRepository->getRepository('App:Eventadvert')->findActive($q);
        $results2 = $finderRepository->getRepository('App:Company')->find($q);

        if ($tag = $entityManager->getRepository(Tag::class)->findOneBy(['name' => $q])) {
            if ($companyTags = $entityManager->getRepository(CompanyTag::class)->findBy(['tag' => $tag])) {
                foreach ($companyTags as $ct) {
                    if ( $entityManager->getRepository(Company::class)->findBy( ['id' => $ct->getCompany()->getId()] ) != false ) array_push($results, $ct->getCompany());
                }
            }

            if ($advertTags = $entityManager->getRepository(EventadvertTag::class)->findBy(['tag' => $tag])) {
                foreach ($advertTags as $at) {
                    $add = 1;
                    foreach ($results as $r) {
                        if ($r->getId() == $at->getAdvert()->getId()) {
                            $add = 0;
                            break;
                        }
                    }

                    if ($add == 1) {
                        if ( $entityManager->getRepository(Eventadvert::class)->findBy( ['id' => $at->getAdvert()->getId()] ) != false ) array_push($results, $at->getAdvert());
                    }
                }
            }
        }

        $pagination = $paginator->paginate($results, $request->query->getInt('page', 1), 10);

        $geoPlaces = $geoPlacesRepository->getByEvents($results, $request->getLocale());
        $clientIP = $request->getClientIp();

        if (($entityManager->getRepository(Keywords::class)->findOneBy(['name' => $q, 'creationIpaddr' => $clientIP])) == false) $hasSearchQuery = true; {
        $keyword = new Keywords();
        $keyword->setName($q);
        $keyword->setCreationIpaddr($clientIP);
        $entityManager->persist($keyword);
        $hasSearchQuery = true;
        $entityManager->flush();
    }

        return $this->render('search/index.html.twig', [
            'results' => $pagination,
            'results2' => $results2,
            'channels' => $channelRepository->findAll(),
            'categories' => $categoryRepository->getFeatured($request->getLocale()),
            'geoPlaces' => $geoPlaces,
            'hasSearchQuery' => $hasSearchQuery,

        ]);
    }

    /**
     * @Route("/populaire-zoektermen", name="popular-search-terms")
     */
    public function popularSearchTerms(HelperService $helperService)
    {
        $keywords = $helperService->getMostUsedKeywords(100);
        return $this->render('search/popular_search_terms.html.twig', compact('keywords'));
    }

    /**
     * @Route("/zoeken-gebruiker", name="search-user")
     */
    public function searchUser(Request $request, UserRepository $userRepository)
    {
        $token = $request->request->get('token');

        $userID = null;
        if ($request->request->has('userID') && $request->request->get('userID') != '') {
            $userID = $request->request->get('userID');
        }

        $userMail = null;
        if ($request->request->has('mail') && $request->request->get('mail') != '') {
            $userMail = $request->request->get('mail');
        }

        $userPhone = null;
        if ($request->request->has('phone') && $request->request->get('phone') != '') {
            $userPhone = $request->request->get('phone');
        }

        $user = $userRepository->getUserByCriteria($userID, $userMail, $userPhone);
        if ($request->isXMLHttpRequest())
        {
            $return = '';
            if ( !$user || !$this->isCsrfTokenValid('search_user', $token) ) return new JsonResponse(['error' => 'User not found']);

            $return .= '<tr>';
            $return .= '<td>'. $user['firstname'] .' '. $user['surname'] .'</td>';
            $return .= '<td>'. $user['email'] .'</td>';
            $return .= '<td>';

            if ( $user['deleted'] )
            {
                $return .= '<a href="?u=restore&amp;id='. $user['id'] .'" class="btn btn-sm btn-info"><i class="fas fa-trash-restore"></i> Restore account</a>';
            } else {
                $return .= '<a href="/admin/panel/users/'. $user['id'] .'" class="btn btn-sm btn-primary"><i class="fa fa-pen"></i> Edit account informations</a>
                                <a href="?u=del&amp;id='. $user['id'] .'" class="btn btn-sm btn-danger" onclick="return confirm(\'Are you sure?\');"><i class="fa fa-trash"></i> Delete account</a>';
            }

            $return .= '</td>';
            $return .= '</tr>';

            return new JsonResponse($return);
        } elseif ( $_POST ) {
            if ($user) {
                return $this->redirectToRoute('admin_panel_users_edit',  ['id' => $user['id']]);
            } else {
                return $this->redirectToRoute('admin_panel_users_not_found');
            }
        } else {
            $route = $request->headers->get('referer');
            return $this->redirect($route);
        }
    }
}
