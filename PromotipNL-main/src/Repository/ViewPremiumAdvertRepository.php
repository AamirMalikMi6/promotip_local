<?php

namespace App\Repository;

use App\Entity\ViewPremiumAdvert;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ViewPremiumAdvert>
 *
 * @method ViewPremiumAdvert|null find($id, $lockMode = null, $lockVersion = null)
 * @method ViewPremiumAdvert|null findOneBy(array $criteria, array $orderBy = null)
 * @method ViewPremiumAdvert[]    findAll()
 * @method ViewPremiumAdvert[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ViewPremiumAdvertRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ViewPremiumAdvert::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(ViewPremiumAdvert $entity, bool $flush = true): void
    {
        $this->_em->persist($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function remove(ViewPremiumAdvert $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    // /**
    //  * @return ViewPremiumAdvert[] Returns an array of ViewPremiumAdvert objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ViewPremiumAdvert
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
