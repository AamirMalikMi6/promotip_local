<?php

namespace App\Repository;

use App\Entity\Eventadvert;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Eventadvert|null find($id, $lockMode = null, $lockVersion = null)
 * @method Eventadvert|null findOneBy(array $criteria, array $orderBy = null)
 * @method Eventadvert[]    findAll()
 * @method Eventadvert[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventadvertRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Eventadvert::class);
    }

    public function getFutureEvents($categories = null, $featured = 0)
    {
        $entityManager = $this->getEntityManager();

        $categories_q = '';
        if ($categories != null) {
            $categories_q = ' AND e.category IN (:categories) ';
        }

        $query = $entityManager->createQuery('SELECT e
            FROM App\Entity\Eventadvert e
            WHERE (e.eventStartDate >= CURRENT_DATE() OR e.eventEndDate >= CURRENT_DATE())' . $categories_q . 'ORDER BY e.eventStartDate ASC');

        if ($categories != null) {
            $query->setParameters(array('categories' => $categories));
        }

        return $query->getResult();
    }

    public function getLatestCreatedEvents($deletedUsers, $date_start_from = null, $date_start_to = null, $date_end_from = null, $date_end_to = null, $lat_long = null, $radius = null, $categories = null)
    {
        $query = $this->createQueryBuilder('e');
        $query->select('e as events');
        $query->where('e.eventStartDate >= CURRENT_DATE() OR e.eventEndDate >= CURRENT_DATE()');

        $query->andWhere('e.deleted IS NULL OR e.deleted = :false');
        $query->setParameter('false', false);
        if ( count($deletedUsers) > 0)
        {
            $query->andWhere('e.userId NOT IN (:deletedUsers)');
            $query->setParameter('deletedUsers', $deletedUsers);
        }

        if (    (  ($date_start_from != null && $date_start_to == null) || ($date_start_to != null && $date_start_from == null) ) ||
            (  ($date_end_from != null && $date_end_to == null) || ($date_end_to != null && $date_end_from == null) )
        ) {
            return [];
        }

        if (    ( $radius != null && $lat_long == null ) ||
            ( $lat_long != null && $radius == null )
        )
        {
            return [];
        }

        if (    ($date_start_from != null && $date_start_to != null) &&
            ($date_end_from == null && $date_end_to == null && $lat_long == null && $radius == null)
        ) {
            $query->andWhere( 'e.eventStartDate BETWEEN :from AND :to' );
            $query->setParameter('from', $date_start_from);
            $query->setParameter('to', $date_start_to);
        }

        if (    ($date_start_from != null && $date_start_to != null && $date_end_from != null && $date_end_to != null) &&
            ($lat_long == null && $radius == null)
        ) {
            $query->andWhere( 'e.eventStartDate BETWEEN :start_from AND :start_to' );
            $query->andWhere( 'e.eventEndDate BETWEEN :end_from AND :end_to' );

            $query->setParameter('start_from', $date_start_from);
            $query->setParameter('start_to', $date_start_to);
            $query->setParameter('end_from', $date_end_from);
            $query->setParameter('end_to', $date_end_to);
        }

        if (    ($date_start_from != null && $date_start_to != null && $lat_long != null && $radius != null) &&
            ($date_end_from == null && $date_end_to == null)
        ) {
            $query->andWhere( 'e.eventStartDate BETWEEN :start_from AND :start_to' );
            $distance_qry = "(((acos(sin((" . $lat_long['latitude'] . "*pi()/180)) * sin((g.latitude*pi()/180))+cos((" . $lat_long['latitude'] . "*pi()/180)) * cos((g.latitude*pi()/180)) * cos(((" . $lat_long['longitude'] . "-g.longitude)*pi()/180))))*180/pi())*60*1.1515*1.609344)";
            $query->addSelect($distance_qry . ' AS distance')
                ->join(
                    'App\Entity\Geoplaces',
                    'g',
                    \Doctrine\ORM\Query\Expr\Join::WITH,
                    'e.geoPlacesId = g.id'
                )
                ->having('distance <= '. $radius);

            $query->setParameter('start_from', $date_start_from);
            $query->setParameter('start_to', $date_start_to);
        }

        if (    ($date_end_from != null && $date_end_to != null) &&
            ($date_start_from == null && $date_start_to == null && $lat_long == null && $radius == null)
        ) {
            $query->andWhere( 'e.eventEndDate BETWEEN :end_from AND :end_to' );
            $query->setParameter('end_from', $date_end_from);
            $query->setParameter('end_to', $date_end_to);
        }

        if (    ($date_end_from != null && $date_end_to != null && $lat_long != null && $radius != null) &&
            ($date_start_from == null && $date_start_to == null)
        ) {
            $query->andWhere( 'e.eventEndDate BETWEEN :end_from AND :end_to' );
            $distance_qry = "(((acos(sin((" . $lat_long['latitude'] . "*pi()/180)) * sin((g.latitude*pi()/180))+cos((" . $lat_long['latitude'] . "*pi()/180)) * cos((g.latitude*pi()/180)) * cos(((" . $lat_long['longitude'] . "-g.longitude)*pi()/180))))*180/pi())*60*1.1515*1.609344)";
            $query->addSelect($distance_qry . ' AS distance')
                ->join(
                    'App\Entity\Geoplaces',
                    'g',
                    \Doctrine\ORM\Query\Expr\Join::WITH,
                    'e.geoPlacesId = g.id'
                )
                ->having('distance <= '. $radius);

            $query->setParameter('end_from', $date_end_from);
            $query->setParameter('end_to', $date_end_to);
        }

        if (  $date_start_from != null && $date_start_to != null && $date_end_from != null && $date_end_to != null && $lat_long != null && $radius != null )  {
            $query->andWhere( 'e.eventStartDate BETWEEN :start_from AND :start_to' );
            $query->andWhere( 'e.eventEndDate BETWEEN :end_from AND :end_to' );

            $distance_qry = "(((acos(sin((" . $lat_long['latitude'] . "*pi()/180)) * sin((g.latitude*pi()/180))+cos((" . $lat_long['latitude'] . "*pi()/180)) * cos((g.latitude*pi()/180)) * cos(((" . $lat_long['longitude'] . "-g.longitude)*pi()/180))))*180/pi())*60*1.1515*1.609344)";
            $query->addSelect($distance_qry . ' AS distance')
                ->join(
                    'App\Entity\Geoplaces',
                    'g',
                    \Doctrine\ORM\Query\Expr\Join::WITH,
                    'e.geoPlacesId = g.id'
                )
                ->having('distance <= '. $radius);

            $query->setParameter('start_from', $date_start_from);
            $query->setParameter('start_to', $date_start_to);
            $query->setParameter('end_from', $date_end_from);
            $query->setParameter('end_to', $date_end_to);
        }

        if ( $lat_long != null && $radius != null && ( $date_start_from == null && $date_start_to == null && $date_end_from == null && $date_end_to == null )
        ) {
            $distance_qry = "(((acos(sin((" . $lat_long['latitude'] . "*pi()/180)) * sin((g.latitude*pi()/180))+cos((" . $lat_long['latitude'] . "*pi()/180)) * cos((g.latitude*pi()/180)) * cos(((" . $lat_long['longitude'] . "-g.longitude)*pi()/180))))*180/pi())*60*1.1515*1.609344)";
            $query->addSelect($distance_qry . ' AS distance')
                ->join(
                    'App\Entity\Geoplaces',
                    'g',
                    \Doctrine\ORM\Query\Expr\Join::WITH,
                    'e.geoPlacesId = g.id'
                )
                ->having('distance <= '. $radius);
        }

        if ( $categories != null)
        {
            $query->andWhere('e.category IN (:categories)');
            $query->setParameter('categories', $categories);


            $query->orWhere('e.subCategory IN (:subCategories)');
            $query->setParameter('subCategories', $categories);
        }

        $query->orderBy('e.creationDate', 'DESC');

        return $query->getQuery()->getResult();
    }

    public function processView($eventId)
    {
        $event = $this->find($eventId);

        $view = (int)$event->getViews();
        $view = $view + 1;
        $event->setViews($view);

        $this->getEntityManager()->persist($event);
        $this->getEntityManager()->flush();
    }

    public function getEventsPaidInCategories($deletedUsers, $categories)
    {
        $query = $this->createQueryBuilder('e');
        $query->where('e.paymentStatus = :status');
        $query->andWhere('e.category IN (:categories)');

        $query->setParameter('status', 'paid');
        $query->setParameter('categories', $categories);

        if ( count($deletedUsers) > 0)
        {
            $query->andWhere('e.userId NOT IN (:deletedUsers)');
            $query->setParameter('deletedUsers', $deletedUsers);
        }

        return $query->getQuery()->getResult();
    }

    public function getEventsCreationsDate($type = null, $categories = null)
    {
        $query = $this->createQueryBuilder('e');
        if ( $type != null)
        {
            if ( $type == 'start') $query->select('e.eventStartDate as date_start');
            if ( $type == 'end') $query->select('e.eventEndDate as date_end');
        }

        $query->where('e.eventStartDate >= CURRENT_DATE() OR e.eventEndDate >= CURRENT_DATE()');
        $query->andWhere('e.deleted IS NULL OR e.deleted = :false');
        $query->setParameter('false', false);

        if ($categories != null)
        {
            if ( is_array($categories) )
            {
                $query->andWhere('e.category IN (:categories)');
                $query->setParameter('categories', $categories);
            } else {
                $query->andWhere('e.category = :categories');
                $query->setParameter('categories', $categories);
            }
        }

        if ( $type != null)
        {
            if ( $type == 'start') $query->orderBy('e.eventStartDate', 'ASC');
            if ( $type == 'end') $query->orderBy('e.eventEndDate', 'ASC');
        }

        return $query->getQuery()->getResult();
    }

    // /**
    //  * @return Eventadvert[] Returns an array of Eventadvert objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Eventadvert
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function findByLocationRadius(array $lat_long, int $radius = 20)
    {
        $distance_qry = "(((acos(sin((" . $lat_long['latitude'] . "*pi()/180)) * sin((g.latitude*pi()/180))+cos((" . $lat_long['latitude'] . "*pi()/180)) * cos((g.latitude*pi()/180)) * cos(((" . $lat_long['longitude'] . "-g.longitude)*pi()/180))))*180/pi())*60*1.1515*1.609344)";

        return $this->createQueryBuilder('e')
            ->addSelect($distance_qry . ' AS distance')
            ->join(
                'App\Entity\Geoplaces',
                'g',
                \Doctrine\ORM\Query\Expr\Join::WITH,
                'e.geoPlacesId = g.id'
            )
            ->andWhere('e.eventStartDate >= CURRENT_DATE() OR e.eventEndDate >= CURRENT_DATE()')
            ->having('distance <= '. $radius)
            ->orderBy('distance', 'ASC')
            ->getQuery()
            ->getResult()
            ;
    }

    public function getCompanyAllActiveAdverts($company)
    {
        $query = $this->createQueryBuilder('e');
        $query->where('e.eventStartDate >= CURRENT_DATE() OR e.eventEndDate >= CURRENT_DATE()');
        $query->andWhere( 'e.company = :company' );
        $query->setParameter('company', $company);

        return $query->getQuery()->getResult();
    }

    public function getPaidAdvertWithDatePaid($deletedUsers = [])
    {
        $query = $this->createQueryBuilder('e');
        $query->where('e.paymentStatus = :status');
        $query->andWhere( 'e.paidDate IS NOT NULL' );
        $query->setParameter('status', 'paid');

        if ( count($deletedUsers) > 0)
        {
            $query->andWhere('e.userId NOT IN (:deletedUsers)');
            $query->setParameter('deletedUsers', $deletedUsers);
        }

        return $query->getQuery()->getResult();
    }

    public function findUserActiveAdverts($user)
    {
        $query = $this->createQueryBuilder('e');
        $query->where('e.eventStartDate >= CURRENT_DATE() OR e.eventEndDate >= CURRENT_DATE()');
        $query->andWhere('e.userId = :user');
        $query->setParameter('user', $user);
        $query->orderBy('e.id', 'DESC');

        return $query->getQuery()->getResult();
    }

    public function findActiveUsersPremiumAdverts($deletedUsers)
    {
        $query = $this->createQueryBuilder('e');
        $query->where('e.paymentStatus = :status');
        $query->setParameter('status', 'paid');

        if ( count($deletedUsers) > 0)
        {
            $query->andWhere('e.userId NOT IN (:deletedUsers)');
            $query->setParameter('deletedUsers', $deletedUsers);
        }

        $query->orderBy('e.id', 'DESC');

        return $query->getQuery()->getResult();
    }

    public function getActiveUsersMostViewedAdverts($deletedUsers)
    {
        $query = $this->createQueryBuilder('e');

        if ( count($deletedUsers) > 0)
        {
            $query->where('e.userId NOT IN (:deletedUsers)');
            $query->setParameter('deletedUsers', $deletedUsers);
        }

        $query->orderBy('e.views', 'DESC');
        $query->setMaxResults(5);

        return $query->getQuery()->getResult();
    }
}