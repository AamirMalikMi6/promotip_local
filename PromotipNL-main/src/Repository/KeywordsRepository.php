<?php

namespace App\Repository;

use App\Entity\Keywords;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Keywords>
 *
 * @method Keywords|null find($id, $lockMode = null, $lockVersion = null)
 * @method Keywords|null findOneBy(array $criteria, array $orderBy = null)
 * @method Keywords[]    findAll()
 * @method Keywords[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class KeywordsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Keywords::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(Keywords $entity, bool $flush = true): void
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
    public function remove(Keywords $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * @param integer|null $limit
     * @return mixed
     */
    public function findMostKeywordsUsed(?int $limit = null)
    {
        return $this->createQueryBuilder("k")
            ->select("k.name", "count(k.name) AS number_searching")
            ->where("k.name != ''")
            ->groupBy("k.name")
            ->orderBy("number_searching", "desc")
            ->setMaxResults(($limit ?: 10))
            ->getQuery()
            ->getResult()
            ;
    }

    // /**
    //  * @return Keywords[] Returns an array of Keywords objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('k')
            ->andWhere('k.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('k.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Keywords
    {
        return $this->createQueryBuilder('k')
            ->andWhere('k.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}