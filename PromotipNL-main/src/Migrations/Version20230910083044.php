<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230910083044 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        $this->addSql('CREATE TABLE invoice (id INT AUTO_INCREMENT NOT NULL, number INT NOT NULL, invoice_date DATETIME NOT NULL, user_id INT NOT NULL, total_ht NUMERIC(10, 2) NOT NULL, total_tax NUMERIC(10, 2) NOT NULL, total_ttc NUMERIC(10, 2) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE invoice_detail (id INT AUTO_INCREMENT NOT NULL, invoice_id INT NOT NULL, eventadvert_title VARCHAR(255) NOT NULL, transaction_id VARCHAR(255) NOT NULL, publication_date DATETIME NOT NULL, quantity INT NOT NULL, eventadvert_fee_amount NUMERIC(10, 2) NOT NULL, total_amount NUMERIC(10, 2) NOT NULL, INDEX IDX_9530E2C02989F1FD (invoice_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE invoice_detail ADD CONSTRAINT FK_9530E2C02989F1FD FOREIGN KEY (invoice_id) REFERENCES invoice (id)');
    }

    public function down(Schema $schema) : void
    {
    }
}
