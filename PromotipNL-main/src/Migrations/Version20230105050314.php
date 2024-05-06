<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230105050314 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        $this->addSql('ALTER TABLE user ADD credits INT DEFAULT 0');
        $this->addSql('CREATE TABLE credit_payment (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, event_advert_id INT NOT NULL, credit_deducted INT NOT NULL, date_payment DATETIME NOT NULL, INDEX IDX_57ACE322A76ED395 (user_id), INDEX IDX_57ACE32256EBF28B (event_advert_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE credit_payment ADD CONSTRAINT FK_57ACE322A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE credit_payment ADD CONSTRAINT FK_57ACE32256EBF28B FOREIGN KEY (event_advert_id) REFERENCES eventadvert (id)');
    }

    public function down(Schema $schema) : void
    {
    }
}
