<?php

namespace FM\Media;

use FM\Media\Sizes;
use FM\Media\WEBP;

class Media
{
    public function __construct()
    {
        \FM\App::init(new Sizes());
        \FM\App::init(new WEBP());
    }
}
