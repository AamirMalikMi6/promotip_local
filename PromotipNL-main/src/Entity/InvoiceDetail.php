<?php

namespace App\Entity;

use App\Repository\InvoiceDetailRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=InvoiceDetailRepository::class)
 */
class InvoiceDetail
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $eventadvertTitle;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $transactionId;

    /**
     * @ORM\Column(type="datetime")
     */
    private $publicationDate;

    /**
     * @ORM\Column(type="integer")
     */
    private $quantity;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2)
     */
    private $eventadvertFeeAmount;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2)
     */
    private $totalAmount;

    /**
     * @ORM\ManyToOne(targetEntity=Invoice::class, inversedBy="invoiceDetails")
     * @ORM\JoinColumn(nullable=false)
     */
    private $invoice;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEventadvertTitle(): ?string
    {
        return $this->eventadvertTitle;
    }

    public function setEventadvertTitle(string $eventadvertTitle): self
    {
        $this->eventadvertTitle = $eventadvertTitle;

        return $this;
    }

    public function getTransactionId(): ?string
    {
        return $this->transactionId;
    }

    public function setTransactionId(string $transactionId): self
    {
        $this->transactionId = $transactionId;

        return $this;
    }

    public function getPublicationDate(): ?\DateTimeInterface
    {
        return $this->publicationDate;
    }

    public function setPublicationDate(\DateTimeInterface $publicationDate): self
    {
        $this->publicationDate = $publicationDate;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getEventadvertFeeAmount(): ?string
    {
        return $this->eventadvertFeeAmount;
    }

    public function setEventadvertFeeAmount(string $eventadvertFeeAmount): self
    {
        $this->eventadvertFeeAmount = $eventadvertFeeAmount;

        return $this;
    }

    public function getTotalAmount(): ?string
    {
        return $this->totalAmount;
    }

    public function setTotalAmount(string $totalAmount): self
    {
        $this->totalAmount = $totalAmount;

        return $this;
    }

    public function getInvoice(): ?Invoice
    {
        return $this->invoice;
    }

    public function setInvoice(?Invoice $invoice): self
    {
        $this->invoice = $invoice;

        return $this;
    }
}
