<?php

namespace FM;

use FM\Core\Core;
use FM\Posts\Posts;
use FM\Teams\Teams;

class App
{
    public function __construct()
    {
        new Core();
        new Posts();
        new Teams();
    }
}
