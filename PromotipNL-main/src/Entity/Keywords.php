<?php

namespace App\Entity;

use App\Repository\KeywordsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=KeywordsRepository::class)
 */
class Keywords
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
    private $name;

    /**
     * @ORM\Column(type="string", length=64, nullable=true)
     */
    private $creationIpaddr;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreationIpaddr(): ?string
    {
        return $this->creationIpaddr;
    }

    public function setCreationIpaddr(?string $creationIpaddr): self
    {
        $this->creationIpaddr = $creationIpaddr;

        return $this;
    }
}
