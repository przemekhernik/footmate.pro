<?php

namespace FM\Blocks;

use FM\Blocks\Base;
use FM\Blocks\Block;

class Blocks
{
    private array $blocks = [];

    /**
     * @action after_setup_theme
     */
    public function init(): void
    {
        $this->blocks['base'] = \FM\App::init(new Base());
    }

    public function get(string $key): ?Block
    {
        return ! empty($this->blocks[$key]) ? $this->blocks[$key] : null;
    }

    /**
     * @action template_redirect
     */
    public function action(): void
    {
        fm()->blocks()->get('base')->render();
    }
}
