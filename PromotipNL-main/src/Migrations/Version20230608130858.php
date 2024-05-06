<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230608130858 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        $this->addSql('CREATE TABLE eventadvert_premium (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, title VARCHAR(255) NOT NULL, creation_date DATETIME NOT NULL, creation_ipaddr VARCHAR(64) DEFAULT NULL, redirection_type VARCHAR(255) NOT NULL, redirection_link VARCHAR(255) NOT NULL, plan VARCHAR(255) DEFAULT NULL, paid_date DATETIME DEFAULT NULL, paid TINYINT(1) DEFAULT \'0\' NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE premium_eventadvert_photo (id INT AUTO_INCREMENT NOT NULL, premium_event_advert_id INT DEFAULT NULL, image_name VARCHAR(255) NOT NULL, image_size INT NOT NULL, updated_at DATETIME NOT NULL, priority INT DEFAULT NULL, temporary_id VARCHAR(128) DEFAULT NULL, INDEX IDX_CB6D9750F859C4B9 (premium_event_advert_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE premium_eventadvert_photo ADD CONSTRAINT FK_CB6D9750F859C4B9 FOREIGN KEY (premium_event_advert_id) REFERENCES eventadvert_premium (id)');
        $this->addSql('ALTER TABLE transaction ADD premium_event_advert_id INT NULL');
        $this->addSql('ALTER TABLE transaction ADD CONSTRAINT FK_723705D1F859C4B9 FOREIGN KEY (premium_event_advert_id) REFERENCES eventadvert_premium (id)');
        $this->addSql('CREATE INDEX IDX_723705D1F859C4B9 ON transaction (premium_event_advert_id)');
    }

    public function down(Schema $schema) : void
    {
    }
}
