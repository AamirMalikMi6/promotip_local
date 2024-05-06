<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class Extension extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('displayDate', [
                $this,
                'formatDate'
            ]),
        ];
    }

    public function formatDate($date)
    {
        $datetime = new \DateTime('now');
        $datetime->setTime(0, 0);

        $interval = $datetime->diff($date);

        switch ($interval->format('%R%a')) {
            case 0:
                return 'Vandaag';
            case '+1':
                return 'Morgen';
            case '+2':
                return 'Overmorgen';
            case '+3':
            case '+4':
            case '+5':
                $start = new \DateTimeImmutable('now');
                $start->setTime(0, 0);

                $datetime = $start->modify($interval->format('%R%a day'));
                return $datetime->format('l');
            default:
                return $date->format('d/m');
        }
    }
}