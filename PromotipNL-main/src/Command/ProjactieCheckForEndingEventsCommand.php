<?php

namespace App\Command;

use App\Service\NotificationService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class ProjactieCheckForEndingEventsCommand extends Command
{
    protected static $defaultName = 'promotip:check-advert-ending-events';

    private $notificationService;

    public function __construct(NotificationService $notificationService, string $name = null)
    {
        $this->notificationService = $notificationService;
        parent::__construct($name);
    }

    protected function configure()
    {
        $this->setDescription('Check for advert ending events');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->notificationService->handleAdvertEndDate();

        return 0;
    }
}