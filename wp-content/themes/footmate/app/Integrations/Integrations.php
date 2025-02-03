<?php

namespace FM\Integrations;

use FM\Integrations\Console;
use FM\Integrations\ESPN;
use FM\Integrations\Vite;

class Integrations
{
    private ESPN $espn;

    /**
     * @action init
     */
    public function init(): void
    {
        $this->espn = \FM\App::init(new ESPN());

        if (fm()->config()->get('hmr.active')) {
            \FM\App::init(new Vite());
        }

        if (class_exists('WP_CLI')) {
            \FM\App::init(new Console());
        }
    }

    public function espn(): ESPN
    {
        return $this->espn;
    }
}
