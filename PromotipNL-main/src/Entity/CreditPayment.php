<?php

namespace App\Entity;

use App\Repository\CreditPaymentRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CreditPaymentRepository::class)
 */
class CreditPayment
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="creditPayments")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=Eventadvert::class, inversedBy="creditPayments")
     * @ORM\JoinColumn(nullable=false)
     */
    private $eventAdvert;

    /**
     * @ORM\Column(type="integer")
     */
    private $creditDeducted;

    /**
     * @ORM\Column(type="datetime")
     */
    private $datePayment;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getEventAdvert(): ?Eventadvert
    {
        return $this->eventAdvert;
    }

    public function setEventAdvert(?Eventadvert $eventAdvert): self
    {
        $this->eventAdvert = $eventAdvert;

        return $this;
    }

    public function getCreditDeducted(): ?int
    {
        return $this->creditDeducted;
    }

    public function setCreditDeducted(int $creditDeducted): self
    {
        $this->creditDeducted = $creditDeducted;

        return $this;
    }

    public function getDatePayment(): ?\DateTimeInterface
    {
        return $this->datePayment;
    }

    public function setDatePayment(\DateTimeInterface $datePayment): self
    {
        $this->datePayment = $datePayment;

        return $this;
    }
}
