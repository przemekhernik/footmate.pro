<?php

namespace FM;

use FM\Core\Core;
use FM\Posts\Posts;
use FM\Teams\Teams;

class App
{
    private static ?App $instance = null;

    private function __construct()
    {
        new Core();
        new Posts();
        new Teams();
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
