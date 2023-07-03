<?php

namespace FM\Integrations;

use FM\Integrations\ESPN;

class Integrations
{
    private ESPN $espn;

    public function __construct()
    {
        $this->espn = new ESPN();
    }

    public function espn(): ESPN
    {
        return $this->espn;
    }
}