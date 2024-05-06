<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

use App\Entity\Eventadvert;
use App\Entity\EventadvertPremium;
use App\Entity\Company;
use App\Entity\GeoPlaces;
use App\Entity\GeoRegions;
use App\Repository\EventadvertRepository;
use App\Repository\CompanyRepository;
use App\Repository\GeoPlacesRepository;
use App\Repository\GeoRegionsRepository;
use App\Repository\ViewPremiumAdvertRepository;
use App\Repository\ViewBigPremiumAdvertRepository;
use Doctrine\ORM\EntityManager;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;

class PromotipTwigExtension extends AbstractExtension
{

    private $eventadvertRepository;
    private $companyRepository;
    private $geoPlacesRepository;
    private $geoRegionsRepository;
    private $viewPremiumAdvertRepository;
    private $container;
    private $viewBigPremiumAdvertRepository;

    public $planDays = [
        'ONE_DAY' => '+1 day',
        'FOUR_DAY' => '+4 day',
        'SEVEN_DAY' => '+7 day',
        'CREDIT_ONE_DAY' => '+1 day',
        'CREDIT_FOUR_DAY' => '+4 day',
        'CREDIT_SEVEN_DAY' => '+7 day',
        'ONE_WEEK' => '+1 week',
        'TWO_WEEKS' => '+2 week',
        'ONE_MONTH' => '+1 month'
    ];

    public function __construct(
        EventadvertRepository $eventadvertRepository,
        CompanyRepository $companyRepository,
        GeoPlacesRepository $geoPlacesRepository,
        GeoRegionsRepository $geoRegionsRepository,
        ViewPremiumAdvertRepository $viewPremiumAdvertRepository,
        ViewBigPremiumAdvertRepository $viewBigPremiumAdvertRepository,
        ContainerInterface $container
    )
    {
        $this->eventadvertRepository = $eventadvertRepository;
        $this->companyRepository = $companyRepository;
        $this->geoPlacesRepository = $geoPlacesRepository;
        $this->geoRegionsRepository = $geoRegionsRepository;
        $this->viewPremiumAdvertRepository = $viewPremiumAdvertRepository;
        $this->viewBigPremiumAdvertRepository = $viewBigPremiumAdvertRepository;
        $this->container = $container;
    }
    
    public function getFunctions()
    {
        return [
            new TwigFunction('expired_advert', [$this, 'isExpiredAdvert']),
            new TwigFunction('get_advert_by_id', [$this, 'getAdvertById']),
            new TwigFunction('link_absolute_path', [$this, 'getLinkAbsolutePath']),
            new TwigFunction('get_premium_ending_date', [$this, 'getPremiumEndingDate']),
            new TwigFunction('get_front_invoice_number', [$this, 'getFrontInvoiceNumber']),
            new TwigFunction('get_company_link_by_slug', [$this, 'getCompanyLinkBySlug']),
            new TwigFunction('get_view_in_bigpremium', [$this, 'getViewInBigpremium']),
            new TwigFunction('get_view_in_premium', [$this, 'getViewInPremium']),
        ];
    }

    public function isExpiredAdvert(Eventadvert $advert)
    {
        $expired = false;
        $now = new \DateTime('now');
        if ( $advert->getEventStartDate() < $now && $advert->getEventEndDate() < $now ) $expired = true;
        return $expired;
    }

    public function getAdvertById($id)
    {
        $eventAdvert = $this->eventadvertRepository->find($id);
        return $eventAdvert;
    }

    public function getLinkAbsolutePath($url)
    {
        $link_scheme = parse_url($url, PHP_URL_SCHEME);
        if ( empty($link_scheme) ) $url = 'http://' . ltrim($url, '/');

        return $url;
    }

    public function getPremiumEndingDate($advert)
    {
        if ( $advert->getPlan() && $advert->getPaidDate() )
        {
            return $advert->getPaidDate()->format("d/m/Y");
        }
        return;  
    }

    public function getFrontInvoiceNumber($invoice)
    {
        return ($this->container->getParameter('invoice_prefix') ?? ''.'-'). '-' . $invoice->getInvoiceDate()->format('Y').'-'.str_pad($invoice->getNumber(),4,"0",STR_PAD_LEFT);
    }

    public function getCompanyLinkBySlug($companySlug, $request, $country, $router)
    {
        $locale = $request->getLocale();
        if ($locale == 'en') {
            $locale = 'nl';
        }

        $companyData = $this->companyRepository->findOneBy([
            'companynameSlug' => $companySlug
        ]);

        $geoCity = $this->geoPlacesRepository->findOneBy([
            'iso' => $country,
            'language' => $locale,
            'id' => $companyData->getGeoPlacesId()
        ]);

        $geoProvince = $this->geoRegionsRepository->findOneBy([
            'iso' => $country,
            'language' => $locale,
            'iso2' => $geoCity->getIso2()
        ]);

        return $router->generate('company_company', [
            'province' => $geoProvince->getNameDirify(),
            'city' => $geoCity->getLocalityDirify(),
            'company' => $companySlug
        ]);
    }

    public function getViewInPremium($advertID)
    {
        $view = 0;
        $premiumViews = $this->viewPremiumAdvertRepository->findOneBy([
            'eventAdvertId' => $advertID
        ]);

        if ( $premiumViews ) $view = $premiumViews->getViews();
        return $view;  
    }

    public function getViewInBigpremium($advertID)
    {
        $view = 0;
        $bigPremiumViews = $this->viewBigPremiumAdvertRepository->findOneBy([
            'eventPremiumId' => $advertID
        ]);

        if ( $bigPremiumViews ) $view = $bigPremiumViews->getViews();
        return $view;  

        
    }
}