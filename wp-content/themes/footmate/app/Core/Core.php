<?php

namespace FM\Core;

use FM\Core\Widgets;

class Core
{
    public function __construct()
    {
        fmInit(Widgets::class);
    }
}
