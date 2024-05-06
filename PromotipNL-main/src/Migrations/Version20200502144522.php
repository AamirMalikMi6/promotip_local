<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200502144522 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE channel (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(64) NOT NULL, title_slug VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_A2F98E47D347411D (title_slug), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('DROP INDEX channel ON category');
        $this->addSql('DROP INDEX featured ON category');
        $this->addSql('ALTER TABLE category CHANGE channel channel INT NOT NULL, CHANGE featured featured INT DEFAULT NULL');
        $this->addSql('ALTER TABLE category ADD CONSTRAINT FK_64C19C13D8E604F FOREIGN KEY (parent) REFERENCES category (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_64C19C13D8E604F ON category (parent)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE channel');
        $this->addSql('ALTER TABLE category DROP FOREIGN KEY FK_64C19C13D8E604F');
        $this->addSql('DROP INDEX UNIQ_64C19C13D8E604F ON category');
        $this->addSql('ALTER TABLE category CHANGE channel channel TINYINT(1) NOT NULL, CHANGE featured featured TINYINT(1) NOT NULL');
        $this->addSql('CREATE INDEX channel ON category (channel, parent)');
        $this->addSql('CREATE INDEX featured ON category (featured)');
    }
}
