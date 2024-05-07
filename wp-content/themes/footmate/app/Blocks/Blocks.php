<?php

namespace FM\Blocks;

use FM\Blocks\Base;

class Blocks
{
    private array $blocks = [];

    /**
     * @action after_setup_theme
     */
    public function init(): void
    {
        $this->blocks['base'] = \FM\App::init(new Base('base'));
    }
}
