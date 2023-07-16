<?php

namespace FM\Core;

use FM\Core\Config;
use FM\Core\Widgets;

class Core
{
    private Config $config;

    private Widgets $widgets;

    public function __construct()
    {
        $this->config = \FM\App::init(new Config());
        $this->widgets = \FM\App::init(new Widgets());
    }

    public function config(): Config
    {
        return $this->config;
    }
}
