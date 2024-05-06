<?php

namespace App\Service;

use App\Entity\GeoRegions;
use Doctrine\ORM\EntityManagerInterface;

class ProvinceService
{

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function get()
    {
        $provinces = $this->em->getRepository(GeoRegions::class)->findBy([
            'iso' => 'NL',
            'level' => 2,
            'language' => 'NL'
        ], [
            'regionLanguage' => 'DESC',
            'name' => 'ASC'
        ]);


        return $provinces;
    }
}