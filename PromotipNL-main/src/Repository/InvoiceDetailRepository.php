<?php

namespace App\Repository;

use App\Entity\InvoiceDetail;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<InvoiceDetail>
 *
 * @method InvoiceDetail|null find($id, $lockMode = null, $lockVersion = null)
 * @method InvoiceDetail|null findOneBy(array $criteria, array $orderBy = null)
 * @method InvoiceDetail[]    findAll()
 * @method InvoiceDetail[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InvoiceDetailRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, InvoiceDetail::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(InvoiceDetail $entity, bool $flush = true): void
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
    public function remove(InvoiceDetail $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    // /**
    //  * @return InvoiceDetail[] Returns an array of InvoiceDetail objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?InvoiceDetail
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
