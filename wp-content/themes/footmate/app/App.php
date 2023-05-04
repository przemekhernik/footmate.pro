<?php

namespace FM;

use FM\Posts\Posts;
use FM\Teams\Teams;

class App
{
    public function __construct()
    {
        new Posts();
        new Teams();
    }
}
