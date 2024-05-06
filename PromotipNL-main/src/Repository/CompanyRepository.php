<?php

namespace App\Repository;

use App\Entity\Company;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Company|null find($id, $lockMode = null, $lockVersion = null)
 * @method Company|null findOneBy(array $criteria, array $orderBy = null)
 * @method Company[]    findAll()
 * @method Company[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CompanyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Company::class);
    }

    // /**
    //  * @return Company[] Returns an array of Company objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Company
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function findByRefPostCode($ref)
    {
        $qb = $this->createQueryBuilder('c')
            ->join(
                'App\Entity\GeoPlaces',
                'g',
                \Doctrine\ORM\Query\Expr\Join::WITH,
                'c.geoPlacesId = g.id'
            )
            ->where('g.postcode LIKE :ref')
            ->setParameter('ref', '%'.$ref.'%')
            ->getQuery();

        return $qb->getResult();
    }

    public function findByLocalityDirify($locality)
    {
        $qb = $this->createQueryBuilder('c')
            ->join(
                'App\Entity\GeoPlaces',
                'g',
                \Doctrine\ORM\Query\Expr\Join::WITH,
                'c.geoPlacesId = g.id'
            )
            ->where('g.localityDirify LIKE :locality')
            ->setParameter('locality', $locality)
            ->getQuery();

        return $qb->getResult();
    }


    public function getCompaniesActiveUsers($deletedUsers, $geoPlaceId)
    {
        $query = $this->createQueryBuilder('c');
        $query->where('c.geoPlacesId = :geoPlaceId');
        $query->setParameter('geoPlaceId', $geoPlaceId);

        if ( count($deletedUsers) > 0)
        {
            $query->andWhere('c.userId NOT IN (:deletedUsers)');
            $query->setParameter('deletedUsers', $deletedUsers);
        }

        return $query->getQuery()->getResult();
    }

    public function getLastRegisteredCompanies()
    {
        $query = $this->createQueryBuilder('c');
        $query->orderBy('c.creationDate', 'DESC');
        $query->setMaxResults(20);

        return $query->getQuery()->getResult();
    }
}