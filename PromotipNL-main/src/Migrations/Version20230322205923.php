<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230322205923 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        $this->addSql('ALTER TABLE eventadvert ADD paused TINYINT(1) DEFAULT \'0\' NOT NULL, ADD blocked TINYINT(1) DEFAULT \'0\' NOT NULL, ADD deleted TINYINT(1) DEFAULT \'0\' NOT NULL, ADD deleted_at DATETIME DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
    }
}
