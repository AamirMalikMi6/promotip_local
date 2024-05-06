<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221124185441 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        $this->addSql('CREATE TABLE keywords (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, creation_ipaddr VARCHAR(64) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE eventadvert_tag (id INT AUTO_INCREMENT NOT NULL, advert_id INT DEFAULT NULL, tag_id INT DEFAULT NULL, INDEX IDX_81862845D07ECCB6 (advert_id), INDEX IDX_81862845BAD26311 (tag_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE eventadvert_tag ADD CONSTRAINT FK_81862845D07ECCB6 FOREIGN KEY (advert_id) REFERENCES eventadvert (id)');
        $this->addSql('ALTER TABLE eventadvert_tag ADD CONSTRAINT FK_81862845BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id)');
        $this->addSql('ALTER TABLE company_tag DROP INDEX UNIQ_77A33EBBAD26311, ADD INDEX IDX_77A33EBBAD26311 (tag_id)');
        $this->addSql('ALTER TABLE company_tag ADD CONSTRAINT FK_77A33EB979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id)');
        $this->addSql('ALTER TABLE company_tag ADD CONSTRAINT FK_77A33EBBAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id)');
    }

    public function down(Schema $schema) : void
    {
        
    }
}
