<?php

namespace FM;

use FM\Core\Core;
use FM\Integrations\Integrations;
use FM\Posts\Posts;
use FM\Teams\Teams;

class App
{
    private Core $core;

    private Integrations $integrations;

    private Posts $posts;

    private Teams $teams;

    private static ?App $instance = null;

    private function __construct()
    {
        $this->core = new Core();
        $this->integrations = new Integrations();
        $this->posts = new Posts();
        $this->teams = new Teams();
    }
    
    public function core(): Core
    {
        return $this->core;
    }

    public function integrations(): Integrations
    {
        return $this->integrations;
    }

    public function posts(): Posts
    {
        return $this->posts;
    }

    public function teams(): Teams
    {
        return $this->teams;
    }

    private function __clone()
    {
    }

    public function __wakeup()
    {
        throw new \Exception('Cannot unserialize a singleton.');
    }

    public static function get(): App
    {
        if (empty(self::$instance)) {
            self::$instance = new App();
        }

        return self::$instance;
    }
}
