<?php

namespace App\Entity;

use App\Repository\TransactionRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TransactionRepository::class)
 */
class Transaction
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="transactions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=Eventadvert::class, inversedBy="transactions")
     * @ORM\JoinColumn(nullable=true)
     */
    private $eventAdvert;

    /**
     * @ORM\ManyToOne(targetEntity=EventadvertPremium::class, inversedBy="transactions")
     * @ORM\JoinColumn(nullable=true)
     */
    private $premiumEventAdvert;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $paymentMethod;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $serviceTransactionId;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2)
     */
    private $amount;

    /**
     * @ORM\Column(type="date")
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

    public function getPremiumEventAdvert(): ?EventadvertPremium
    {
        return $this->premiumEventAdvert;
    }

    public function setPremiumEventAdvert(?EventadvertPremium $premiumEventAdvert): self
    {
        $this->premiumEventAdvert = $premiumEventAdvert;

        return $this;
    }

    public function getPaymentMethod(): ?string
    {
        return $this->paymentMethod;
    }

    public function setPaymentMethod(string $paymentMethod): self
    {
        $this->paymentMethod = $paymentMethod;

        return $this;
    }

    public function getServiceTransactionId(): ?string
    {
        return $this->serviceTransactionId;
    }

    public function setServiceTransactionId(string $serviceTransactionId): self
    {
        $this->serviceTransactionId = $serviceTransactionId;

        return $this;
    }

    public function getAmount(): ?string
    {
        return $this->amount;
    }

    public function setAmount(string $amount): self
    {
        $this->amount = $amount;

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
