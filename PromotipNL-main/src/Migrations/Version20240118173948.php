<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240118173948 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE referral (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, link LONGTEXT NOT NULL, created_at DATETIME NOT NULL, short_link LONGTEXT DEFAULT NULL, INDEX IDX_73079D00A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE referred (id INT AUTO_INCREMENT NOT NULL, parent_user_id INT NOT NULL, child_user_id INT NOT NULL, uuid VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL, ip_address VARCHAR(255) DEFAULT NULL, user_agent LONGTEXT DEFAULT NULL, http_referrer LONGTEXT DEFAULT NULL, INDEX IDX_19B0D036D526A7D3 (parent_user_id), INDEX IDX_19B0D036C5DA9B8E (child_user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reward (id INT AUTO_INCREMENT NOT NULL, referred_id INT NOT NULL, service VARCHAR(255) DEFAULT NULL, service_id INT DEFAULT NULL, credits NUMERIC(10, 2) DEFAULT NULL, description LONGTEXT DEFAULT NULL, created_at DATETIME DEFAULT NULL, INDEX IDX_4ED17253CFE2A98 (referred_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE referral ADD CONSTRAINT FK_73079D00A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE referred ADD CONSTRAINT FK_19B0D036D526A7D3 FOREIGN KEY (parent_user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE referred ADD CONSTRAINT FK_19B0D036C5DA9B8E FOREIGN KEY (child_user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE reward ADD CONSTRAINT FK_4ED17253CFE2A98 FOREIGN KEY (referred_id) REFERENCES referred (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE reward DROP FOREIGN KEY FK_4ED17253CFE2A98');
        $this->addSql('CREATE TABLE geo_places_backup (language VARCHAR(2) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, id BIGINT NOT NULL, iso VARCHAR(2) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, country VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, old_id INT DEFAULT NULL, region1 VARCHAR(80) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, region2 VARCHAR(80) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, region3 VARCHAR(80) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, region4 VARCHAR(80) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, locality VARCHAR(80) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, locality_dirify VARCHAR(80) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, postcode VARCHAR(15) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, suburb VARCHAR(80) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, latitude DOUBLE PRECISION DEFAULT NULL, longitude DOUBLE PRECISION DEFAULT NULL, iso2 VARCHAR(10) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, INDEX iso_2 (iso, locality, postcode), INDEX iso (iso), INDEX id (id), INDEX locality_dirify (locality_dirify), PRIMARY KEY(language, id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, headers LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, queue_name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), INDEX IDX_75EA56E0FB7336F0 (queue_name), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('DROP TABLE referral');
        $this->addSql('DROP TABLE referred');
        $this->addSql('DROP TABLE reward');
        $this->addSql('DROP INDEX UNIQ_4FBF094FE97C1118 ON company');
        $this->addSql('ALTER TABLE company CHANGE payment_status payment_status VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE INDEX locality_dirify ON company (locality_dirify)');
        $this->addSql('ALTER TABLE company_photo DROP FOREIGN KEY FK_5346267D979B1AD6');
        $this->addSql('ALTER TABLE company_photo DROP FOREIGN KEY FK_5346267D979B1AD6');
        $this->addSql('DROP INDEX idx_5346267d979b1ad6 ON company_photo');
        $this->addSql('CREATE INDEX FK_5346267D979B1AD6 ON company_photo (company_id)');
        $this->addSql('ALTER TABLE company_photo ADD CONSTRAINT FK_5346267D979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id)');
        $this->addSql('ALTER TABLE company_tag DROP FOREIGN KEY FK_77A33EB979B1AD6');
        $this->addSql('ALTER TABLE company_tag DROP FOREIGN KEY FK_77A33EB979B1AD6');
        $this->addSql('ALTER TABLE company_tag DROP FOREIGN KEY FK_77A33EBBAD26311');
        $this->addSql('DROP INDEX idx_77a33ebbad26311 ON company_tag');
        $this->addSql('CREATE INDEX FK_77A33EBBAD26311 ON company_tag (tag_id)');
        $this->addSql('DROP INDEX idx_77a33eb979b1ad6 ON company_tag');
        $this->addSql('CREATE INDEX FK_77A33EB979B1AD6 ON company_tag (company_id)');
        $this->addSql('ALTER TABLE company_tag ADD CONSTRAINT FK_77A33EB979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id)');
        $this->addSql('ALTER TABLE company_tag ADD CONSTRAINT FK_77A33EBBAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id)');
        $this->addSql('ALTER TABLE credit_payment DROP FOREIGN KEY FK_57ACE32256EBF28B');
        $this->addSql('ALTER TABLE eventadvert DROP FOREIGN KEY FK_9FD2A9BB979B1AD6');
        $this->addSql('ALTER TABLE eventadvert CHANGE sub_category sub_category INT DEFAULT NULL, CHANGE price price NUMERIC(18, 2) DEFAULT NULL, CHANGE payment_status payment_status VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE paused paused TINYINT(1) DEFAULT \'0\', CHANGE blocked blocked TINYINT(1) DEFAULT \'0\', CHANGE deleted deleted TINYINT(1) DEFAULT \'0\'');
        $this->addSql('ALTER TABLE eventadvert_photo DROP FOREIGN KEY FK_E9A7F80A56EBF28B');
        $this->addSql('DROP INDEX IDX_E9A7F80A56EBF28B ON eventadvert_photo');
        $this->addSql('ALTER TABLE eventadvert_tag DROP FOREIGN KEY FK_81862845D07ECCB6');
        $this->addSql('ALTER TABLE invoice_detail DROP FOREIGN KEY FK_9530E2C02989F1FD');
        $this->addSql('ALTER TABLE messages CHANGE id id BIGINT AUTO_INCREMENT NOT NULL, CHANGE received received DATETIME DEFAULT NULL, CHANGE sender sender VARCHAR(255) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_general_ci`, CHANGE company_id company_id BIGINT DEFAULT NULL, CHANGE message message TEXT CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_general_ci`, CHANGE is_read is_read TINYINT(1) DEFAULT NULL, CHANGE subject subject VARCHAR(255) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_general_ci`');
        $this->addSql('ALTER TABLE notification CHANGE id id BIGINT AUTO_INCREMENT NOT NULL, CHANGE type type VARCHAR(10) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_general_ci`, CHANGE obj obj BIGINT NOT NULL, CHANGE isRead isRead TINYINT(1) NOT NULL, CHANGE companyId companyId BIGINT NOT NULL');
        $this->addSql('ALTER TABLE opening_hour DROP FOREIGN KEY FK_969BD765979B1AD6');
        $this->addSql('ALTER TABLE review DROP FOREIGN KEY FK_794381C6979B1AD6');
        $this->addSql('ALTER TABLE review DROP FOREIGN KEY FK_794381C670BEE6D');
        $this->addSql('DROP INDEX IDX_794381C6979B1AD6 ON review');
        $this->addSql('DROP INDEX IDX_794381C670BEE6D ON review');
        $this->addSql('ALTER TABLE review CHANGE company_id company_id INT NOT NULL, CHANGE visitor_id visitor_id INT NOT NULL, CHANGE message message VARCHAR(500) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE approved approved TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE transaction DROP FOREIGN KEY FK_723705D1A76ED395');
        $this->addSql('ALTER TABLE transaction DROP FOREIGN KEY FK_723705D156EBF28B');
        $this->addSql('ALTER TABLE user CHANGE roles roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_bin`, CHANGE surname surname VARCHAR(128) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE deleted deleted TINYINT(1) DEFAULT NULL, CHANGE remarks remarks LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE blocked blocked TINYINT(1) DEFAULT \'0\'');
    }
}