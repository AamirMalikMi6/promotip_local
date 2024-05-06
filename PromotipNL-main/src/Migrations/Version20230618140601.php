<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230618140601 extends AbstractMigration
{
    public function getDescription() : string
    {
        return 'Add price column in eventadvert table';
    }

    public function up(Schema $schema) : void
    {
        $this->addSql('ALTER TABLE `eventadvert` ADD `price` DECIMAL(18,2) NULL DEFAULT NULL AFTER `title`');
    }

    public function down(Schema $schema) : void
    {
        $this->addSql('ALTER TABLE `eventadvert` DROP `price`');
    }
}
