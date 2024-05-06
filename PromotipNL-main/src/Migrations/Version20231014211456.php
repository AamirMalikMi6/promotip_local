<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231014211456 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        $this->addSql('CREATE TABLE review (
            id INT AUTO_INCREMENT NOT NULL,
            company_id INT NOT NULL,
            visitor_id INT NOT NULL,
            message VARCHAR(500) NOT NULL,
            stars INT NOT NULL,
            approved BOOLEAN NOT NULL,
            PRIMARY KEY (id)
        )');

    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}