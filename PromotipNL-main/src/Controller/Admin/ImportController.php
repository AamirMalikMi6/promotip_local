<?php

namespace App\Controller\Admin;

use Symfony\Component\Finder\Finder;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\GeoPlaces;

class ImportController extends AbstractController
{
    private $csvParsingOptions = array(
        'finder_name' => 'geo2final.csv'
    );

    /**
     * @Route("/admin/import/csv", name="admin_import_csv")
     */
    public function importCSV()
    {
        $csv = $this->parseCSV();

        $em = $this->getDoctrine()->getManager();
        $em->getConnection()->getConfiguration()->setSQLLogger(null);
        
        $batchSize = 20;
        $i = 1;
               
        foreach($csv as $row) {

            $geoPlace = $em->getRepository(GeoPlaces::class)->findOneBy(['id' => (int) $row[3]]);

            if ($geoPlace == false) {
                $geoPlace = new GeoPlaces();
            }             
            
            $geoPlace->setIso($row[0]);
            $geoPlace->setCountry($row[1]);
            $geoPlace->setLanguage($row[2]);
            $geoPlace->setId((int) $row[3]);
            $geoPlace->setOldId((int) $row[4]);
            $geoPlace->setRegion1($row[5]);
            $geoPlace->setRegion2($row[6]);
            $geoPlace->setRegion3($row[7]);
            $geoPlace->setRegion4($row[8]);
            $geoPlace->setLocality($row[9]);
            $geoPlace->setLocalityDirify($row[10]);
            $geoPlace->setPostcode($row[11]);
            $geoPlace->setSuburb($row[12]);
            $geoPlace->setLatitude((float) $row[13]);
            $geoPlace->setLongitude((float) $row[14]);
            $geoPlace->setIso2($row[15]);
      
            $em->persist($geoPlace);
            if (($i % $batchSize) === 0) {
                $em->flush();
                $em->clear();
            }

            $i++;

        }
    
        $em->flush();
        $em->clear();

        return new JsonResponse(['Status' => 'Import OK']);
    
    }

    private function parseCSV()
    {
        $finder = new Finder();
        $finder->files()
            ->in(__DIR__)
            ->name($this->csvParsingOptions['finder_name'])
        ;

        foreach ($finder as $file)
        {
            $rows = array();
            if (($handle = fopen($file->getRealPath(), "r")) !== FALSE) {
                $i = 0;
                while (($data = fgetcsv($handle, null, ";")) !== FALSE) {
                    $i++;
                    $rows[] = $data;
                }
                fclose($handle);
            }
        }
        return $rows;
    }
}