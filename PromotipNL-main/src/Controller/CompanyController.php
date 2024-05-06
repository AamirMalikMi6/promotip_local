<?php

namespace App\Controller;

use App\Entity\Company;
use App\Entity\CompanyTag;
use App\Entity\GeoRegions;
use App\Entity\GeoPlaces;

use App\Entity\Message;
use App\Entity\OpeningHour;
use App\Entity\CompanyPhoto;

use App\Form\CompanyFormType;
use App\Form\MessageFormType;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

use App\Repository\EventadvertRepository;
use App\Repository\GeoPlacesRepository;
use App\Repository\ChannelRepository;
use App\Repository\CategoryRepository;
use App\Repository\CompanyRepository;
use App\Repository\ReviewRepository;

class CompanyController extends AbstractController
{
    /**
     * @Route({
     *     "en": "/companies/",
     *     "nl": "/bedrijven/",
     *     "fr": "/societes/"
     * }, name="company_index")
     */
    public function index(Request $request, CompanyRepository $companyRepository)
    {

        $newCompanies = $companyRepository->getLastRegisteredCompanies();
        return $this->render('company/index.html.twig', [
            'newCompanies' => $newCompanies,
            'request' => $request,
            'country'  => strtoupper($this->getParameter('country')),
            'router' => $this->get('router')
        ]);
    }

    /**
     * @Route({
     *     "en": "/companies/{province}/",
     *     "nl": "/bedrijven/{province}/",
     *     "fr": "/societes/{province}/"
     * }, name="company_province")
     */
    public function province(Request $request, string $province)
    {
        $locale = $request->getLocale();
        if ($locale == 'en') {
            $locale = 'nl';
        }

        $entityManager = $this->getDoctrine()->getManager();
        $country = strtoupper($this->getParameter('country'));

        $geoProvince = $entityManager->getRepository(GeoRegions::class)->findOneBy([
            'iso' => $country,
            'level' => 2,
            'language' => $locale,
            'nameDirify' => $province
        ], ['name' => 'ASC']);

        $cities = $entityManager->getRepository(GeoPlaces::class)->findActiveCities($locale, $country, $geoProvince->getIso2());


        return $this->render('company/province.html.twig', [
            'province' => $geoProvince,
            'cities' => $cities,
        ]);
    }

    /**
     * @Route({
     *     "en": "/companies/{province}/{city}/",
     *     "nl": "/bedrijven/{province}/{city}/",
     *     "fr": "/societes/{province}/{city}/"
     * }, name="company_city")
     */
    public function city(Request $request, string $province, string $city)
    {
        $locale = $request->getLocale();
        if ($locale == 'en') {
            $locale = 'nl';
        }

        $entityManager = $this->getDoctrine()->getManager();

        $country = strtoupper($this->getParameter('country'));

        $geoCity = $entityManager->getRepository(GeoPlaces::class)->findOneBy([
            'iso' => $country,
            'language' => $locale,
            'localityDirify' => $city
        ]);

        $refPostcodeCity = substr($geoCity->getPostcode(), 0, -3);

        $geoProvince = $entityManager->getRepository(GeoRegions::class)->findOneBy([
            'iso' => $country,
            'language' => $locale,
            'iso2' => $geoCity->getIso2()
        ]);


        // $companies = $entityManager->getRepository(Company::class)->findBy([
        //     'geoPlacesId' => $geoCity->getId(),
        // ]);

        // $companies = $entityManager->getRepository(Company::class)->findByRefPostCode($refPostcodeCity);
        $companies = $entityManager->getRepository(Company::class)->findByLocalityDirify($geoCity->getLocalityDirify());


        return $this->render('company/city.html.twig', [
            'city' => $geoCity,
            'province' => $geoProvince,
            'companies' => $companies
        ]);
    }

    /**
     * @Route({
     *     "en": "/companies/{province}/{city}/{company}.html",
     *     "nl": "/bedrijven/{province}/{city}/{company}.html",
     *     "fr": "/societes/{province}/{city}/{company}.html"
     * }, name="company_company")
     */
    public function company(Request $request, string $province, string $city, string $company, EventadvertRepository $eventadvertRepository, GeoPlacesRepository $geoPlacesRepository, ChannelRepository $channelRepository, CategoryRepository $categoryRepository, ReviewRepository $reviewRepository, SessionInterface $session)
    {
        $locale = $request->getLocale();
        if ($locale == 'en') {
            $locale = 'nl';
        }

        $entityManager = $this->getDoctrine()->getManager();

        $country = strtoupper($this->getParameter('country'));

        $geoCity = $entityManager->getRepository(GeoPlaces::class)->findOneBy([
            'iso' => $country,
            'language' => $locale,
            'localityDirify' => $city
        ]);

        $geoProvince = $entityManager->getRepository(GeoRegions::class)->findOneBy([
            'iso' => $country,
            'language' => $locale,
            'iso2' => $geoCity->getIso2()
        ]);

        $companyData = $entityManager->getRepository(Company::class)->findOneBy([
            'companynameSlug' => $company,
            'localityDirify' => $city,
            // 'geoPlacesId' => $geoCity->getId(),
        ]);

        $company_photos = $entityManager->getRepository(CompanyPhoto::class)->findBy(['company' => $companyData], ['priority' => 'ASC']);
        $opening_hours = $entityManager->getRepository(OpeningHour::class)->findBy(['company' => $companyData]);
        $tags = $entityManager->getRepository(CompanyTag::class)->findBy(['company' => $companyData]);
        $activeAdverts = $eventadvertRepository->getCompanyAllActiveAdverts($companyData);
        $geoPlaces = $geoPlacesRepository->getByEvents($activeAdverts, $request->getLocale());
        $channels = $channelRepository->findAll();
        $categories = $categoryRepository->findAll();
        $reviews = $reviewRepository->findApproved($companyData->getId());

        $totalStars = 0;
        $starsCount = [
            5 => 0,
            4 => 0,
            3 => 0,
            2 => 0,
            1 => 0
        ];
        foreach($reviews as $review){
            $totalStars += $review->getStars();

            $starsCount[$review->getStars()] += 1;
        }

        return $this->render('company/company.html.twig', [
            'city' => $geoCity,
            'province' => $geoProvince,
            'company' => $companyData,
            'openingHours' => $opening_hours,
            'companyPhotos' => $company_photos,
            'tags' => $tags,
            'adverts' => $activeAdverts,
            'geoPlaces' => $geoPlaces,
            'channels' => $channels,
            'categories' => $categories,
            'reviews' => $reviews,
            'rating' => count($reviews) === 0 ? 0 : $totalStars/count($reviews),
            'totalStars' => $totalStars,
            'starsCount' => $starsCount
        ]);
    }

    /**
     * @Route({
     *     "en": "/companies/contact/{province}/{city}/{company}.html",
     *     "nl": "/bedrijven/contact/{province}/{city}/{company}.html",
     *     "fr": "/societes/contact/{province}/{city}/{company}.html"
     * }, name="contact_company")
     */
    public function contact(Request $request, string $province, string $city, string $company)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $locale = $request->getLocale();
        if ($locale == 'en') {
            $locale = 'nl';
        }

        $country = strtoupper($this->getParameter('country'));

        $geoCity = $entityManager->getRepository(GeoPlaces::class)->findOneBy([
            'iso' => $country,
            'language' => $locale,
            'id' => $city
        ]);

        $geoProvince = $entityManager->getRepository(GeoRegions::class)->findOneBy([
            'iso' => $country,
            'language' => $locale,
            'iso2' => $geoCity->getIso2()
        ]);

        $companyData = $entityManager->getRepository(Company::class)->findOneBy([
            'companynameSlug' => $company,
            'geoPlacesId' => $geoCity->getId(),
        ]);

        $company_photos = $entityManager->getRepository(CompanyPhoto::class)->findBy(['company' => $companyData], ['priority' => 'ASC']);
        $opening_hours = $entityManager->getRepository(OpeningHour::class)->findBy(['company' => $companyData]);
        $tags = $entityManager->getRepository(CompanyTag::class)->findBy(['company' => $companyData]);

        $message = new Message();

        $form = $this->createForm(MessageFormType::class, $message);
        $form->handleRequest($request);


        if ($form->isSubmitted() && $form->isValid()) {
            /** @var Message $message */
            $message = $form->getData();

            $received = (new \DateTimeImmutable())->format('Y-m-d H:i:s');

            $message->setReceived($received);
            $message->setIsRead(0);
            $message->setCompanyId($companyData->getId());

            $entityManager->persist($message);
            $entityManager->flush();

            //dd($message);

            $this->addFlash('form-send', 'message_send');
        }

        return $this->render('company/contact.html.twig', [
            'form' => $form->createView(),
            'city' => $geoCity,
            'province' => $geoProvince,
            'company' => $companyData,
            'openingHours' => $opening_hours,
            'companyPhotos' => $company_photos,
            'tags' => $tags
        ]);
    }

    /**
     * @Route({
     *     "en": "/getCompanyUrlByGeoPlacesID",
     *     "nl": "/getCompanyUrlByGeoPlacesID",
     *     "fr": "/getCompanyUrlByGeoPlacesID"
     * }, name="getCompanyUrlByGeoPlacesID")
     */
    public function getCompanyUrlByGeoPlacesID(Request $request, $geoID, $company)
    {
        $locale = $request->getLocale();
        if ($locale == 'en') {
            $locale = 'nl';
        }

        $country = strtoupper($this->getParameter('country'));

        $entityManager = $this->getDoctrine()->getManager();

        $geoCity = $entityManager->getRepository(GeoPlaces::class)->findOneBy([
            'id' => $geoID
        ]);

        $geoProvince = $entityManager->getRepository(GeoRegions::class)->findOneBy([
            'iso' => $country,
            'language' => $locale,
            'iso2' => $geoCity->getIso2()
        ]);

        $companyData = $entityManager->getRepository(Company::class)->findOneBy([
            'companynameSlug' => $company
        ]);


        return $this->render('/company_url.html.twig', [
            'city' => $geoCity,
            'province' => $geoProvince,
            'company' => $companyData
        ]);
    }
}