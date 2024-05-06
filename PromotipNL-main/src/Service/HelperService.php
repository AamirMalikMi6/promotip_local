<?php

namespace App\Service;

use App\Entity\Company;
use App\Entity\CompanyPhoto;
use App\Entity\Eventadvert;
use App\Entity\GeoRegions;
use App\Entity\GeoPlaces;
use App\Entity\Notification;
use App\Entity\User;
use App\Repository\CompanyRepository;
use App\Repository\EventadvertRepository;
use App\Repository\MessagesRepository;
use App\Repository\NotificationRepository;
use App\Repository\UserRepository;
use App\Repository\CategoryRepository;
use App\Repository\KeywordsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Symfony\Component\Asset\Packages;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use GeoIp2\WebService\Client;

class HelperService
{
    private $requestStack;
    private $em;
    private $user;
    private $companyRepository;
    private $userRepository;
    private $categoryRepository;
    private $notificationRepository;
    private $messageRepository;
    private $security;
    private $assetManager;
    private $eventAdvertRepository;
    private $keywordsRepository;
    /** @var CacheManager */
    private $cacheManager;

    public function __construct(
        RequestStack $requestStack,
        EntityManagerInterface $em,
        CompanyRepository $companyRepository,
        NotificationRepository $notificationRepository,
        Security $security,
        MessagesRepository $messageRepository,
        UserRepository $userRepository,
        CategoryRepository $categoryRepository,
        Packages $assetManager,
        EventadvertRepository $eventadvertRepository,
        CacheManager           $cacheManager,
        KeywordsRepository     $keywordsRepository
    ) {
        $this->requestStack = $requestStack;
        $this->em = $em;
        $this->companyRepository = $companyRepository;
        $this->userRepository = $userRepository;
        $this->categoryRepository = $categoryRepository;
        $this->notificationRepository = $notificationRepository;
        $this->security = $security;
        $this->messageRepository = $messageRepository;
        $this->assetManager = $assetManager;
        $this->eventAdvertRepository = $eventadvertRepository;
        $this->cacheManager = $cacheManager;
        $this->keywordsRepository = $keywordsRepository;
    }

    public function getUnreadNotifications()
    {
        $user = $this->security->getUser();

        if ($user) {
            /** @var Company $company */
            $company = $this->companyRepository->findOneBy(["userId" => $user->getId()]);

            if ($company) {
                $noticationList = $this->notificationRepository->findBy(["companyId" => $company->getId(), "isRead" => 0, 'type' => Notification::EVENT]);
                return count($noticationList);
            }
        }

        return 0;
    }

    public function getUnreadMessages()
    {
        $user = $this->security->getUser();

        if ($user) {
            /** @var Company $company */
            $company = $this->companyRepository->findOneBy(["userId" => $user->getId()]);
            if ($company) {
                $messageList = $this->messageRepository->findBy(["companyId" => $company->getId(), "isRead" => 0]);
                return count($messageList);
            }
        }

        return 0;
    }

    public function getCurrentActiveAccount()
    {
        /** @var User $user */
        $user = $this->security->getUser();

        if ($user) {
            /** @var Company $company */
            $company = $this->companyRepository->findOneBy(["userId" => $user->getId()]);
        }

        return $company ? $company->getCompanyname() : ($user->getFirstname() . ' ' . $user->getSurname());
    }

    public function getFirstname()
    {
        /** @var User $user */
        $user = $this->security->getUser();

        if ($user) {
            /** @var Company $company */
            $company = $this->companyRepository->findOneBy(["userId" => $user->getId()]);
        }

        return $company ? $company->getCompanyname() : ($user->getFirstname());
    }

    public function getCompanyImage()
    {
        $mainPhoto = null;

        /** @var User $user */
        $user = $this->security->getUser();
        /** @var Company $company */
        $company = $this->companyRepository->findOneBy(["userId" => $user->getId()]);
        if ($company) {
            /** @var CompanyPhoto $company_photos */
            $company_photos = $this->em->getRepository(CompanyPhoto::class)->findBy(['company' => $company], ['priority' => 'ASC'], 1);

            $mainPhoto = $company_photos ? $company_photos[0]->getImageName() : null;
        }

        return $mainPhoto;
    }

    public function getRecentAdverts()
    {
        $mostRecentList = [];

        $user = $this->security->getUser();
        $eventAdvertList = $this->eventAdvertRepository->findBy(['userId' => $user->getId()], ['eventStartDate' => 'desc'], 3);

        /** @var Eventadvert $eventadvert */
        foreach ($eventAdvertList as $eventadvert) {
            $mostRecentList[] = [
                'title' => $eventadvert->getTitle(),
                'description' => $eventadvert->getDescription(),
                'startDate' => $eventadvert->getEventStartDate()->format('d/m/Y')
            ];
        }

        return $mostRecentList;
    }

    public function getMostViewedAdverts()
    {
        $mostViewedList = [];

        $user = $this->security->getUser();
        $eventAdvertList = $this->eventAdvertRepository->findBy(['userId' => $user->getId()], ['views' => 'desc'], 3);

        /** @var Eventadvert $eventadvert */
        foreach ($eventAdvertList as $eventadvert) {
            $mostViewedList[] = [
                'title' => $eventadvert->getTitle(),
                'views' => $eventadvert->getViews()
            ];
        }

        return $mostViewedList;
    }

    public function getMostActiveAdverts()
    {
        $mostActiveList = [];

        $user = $this->security->getUser();
        $eventAdvertList = $this->eventAdvertRepository->findBy([], ['views' => 'desc'], 3);

        /** @var Eventadvert $eventadvert */
        foreach ($eventAdvertList as $eventadvert) {
            $mostActiveList[] = [
                'title' => $eventadvert->getTitle(),
                'company' => $eventadvert->getCompany()->getCompanyname(),
                'views' => $eventadvert->getViews()
            ];
        }

        return $mostActiveList;
    }

    public function getMostViewedAdvertsFooter($deletedUsers)
    {
        $mostViewedList = [];
        // $eventAdvertList = $this->eventAdvertRepository->findBy([], ['views' => 'desc'], 5);
        $eventAdvertList = $this->eventAdvertRepository->getActiveUsersMostViewedAdverts($deletedUsers);
        /** @var Eventadvert $eventadvert */
        foreach ($eventAdvertList as $eventadvert) {
            $category = $this->categoryRepository->find($eventadvert->getCategory());
            $mostViewedList[] = [
                'title' => $eventadvert->getTitle(),
                'titleslug' => $eventadvert->getTitleSlug(),
                'categorytitleslug' => $category->getTitleSlug(),
                'views' => $eventadvert->getViews()];
        }
        return $mostViewedList;
    }

    public function getMyCompanyLocation()
    {
        $location = [];

        /** @var User $user */
        $user = $this->security->getUser();
        if ($user) {
            /** @var Company $company */
            $company = $this->companyRepository->findOneBy(["userId" => $user->getId()]);
            if ($company) {
                /** @var GeoPlaces $company_location */
                $company_location = $this->em->getRepository(GeoPlaces::class)->findOneBy(['id' => $company->getGeoPlacesId(), 'language' => $request = $this->requestStack->getCurrentRequest()->getLocale()]);
                if ($company_location) {
                    $location['latitude'] = $company_location->getLatitude();
                    $location['longitude'] = $company_location->getLongitude();
                }
            }
        }

        return $location;
    }

    public function getUserLocation($postcode)
    {
        $location = [];
        $limit = 1;
        $repo = $this->em->getRepository(GeoPlaces::class)->createQueryBuilder('g');
        $user_location = $repo->where('g.postcode LIKE :postcode')
            ->andWhere('g.language = :language')
            ->setParameter('postcode', '%'.$postcode.'%')
            ->setParameter('language', $request = $this->requestStack->getCurrentRequest()->getLocale())
            ->orderBy('g.id', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();

        if ( count($user_location) > 0 ) {
            $location['latitude'] = $user_location[0]->getLatitude();
            $location['longitude'] = $user_location[0]->getLongitude();
        }

        return $location;
    }

    /**
     * @return array
     */
    public function getMostUsedKeywordsFooter(): array
    {
        return $this->getMostUsedKeywords(10);
    }

    /**
     * @param integer $limit
     * @return array
     */
    public function getMostUsedKeywords(int $limit = 100): array
    {
        $mostUsedList = [];
        $keywordList = $this->keywordsRepository->findMostKeywordsUsed($limit);

        foreach ($keywordList as $keyword) {
            $mostUsedList[] = [
                'name' => $keyword['name']
            ];
        }
        return $mostUsedList;
    }


    public function getListDeletedUser()
    {
        $listDeletedUser = [];
        $deletedUsers = $this->userRepository->findBy(['apStatus' => 1]);
        foreach ( $deletedUsers as $deletedUser )
        {
            $listDeletedUser[] = $deletedUser->getId();
        }
        return $listDeletedUser;
    }
}