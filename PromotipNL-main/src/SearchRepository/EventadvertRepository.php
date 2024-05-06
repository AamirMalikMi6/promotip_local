<?php

namespace App\SearchRepository;

use Elastica\Query\QueryString;
use Elastica\Query\BoolQuery;
use Elastica\Query\Range;
use FOS\ElasticaBundle\Repository;

class EventadvertRepository extends Repository
{
    public function findActive($searchText)
    {
        // Text search
        $queryString = new \Elastica\Query\QueryString();
        $queryString->setQuery($searchText);

        // Date query
        /*$dateStart = new \Elastica\Query\Range('eventStartDate', array(
            'lte' => date('Y-m-d')
        ));*/

        $dateEnd = new \Elastica\Query\Range('eventEndDate', array(
            'gte' => date('Y-m-d', strtotime("+1 day"))
        ));


        // Compose query
        $boolQuery = new \Elastica\Query\BoolQuery();
        $boolQuery->addMust($queryString);
        //$boolQuery->addMust($dateStart);
        //$boolQuery->addMust($dateEnd);

        return $this->find($boolQuery);
    }
}