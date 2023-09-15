<?php

namespace FM\Integrations;

use FM\Integrations\ESPN;
use FM\Integrations\Vite;

class Integrations
{
    private ESPN $espn;

    /**
     * @action init
     */
    public function action(): void
    {
        $this->espn = \FM\App::init(new ESPN());

        if (fm()->config()->get('hmr.active')) {
            \FM\App::init(new Vite());
        }
    }

    public function espn(): ESPN
    {
        return $this->espn;
    }
}
