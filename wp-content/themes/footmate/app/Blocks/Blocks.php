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

    public function get(string $key)
    {
        return ! empty($this->blocks[$key]) ? $this->blocks[$key] : null;
    }

    /**
     * @action template_redirect
     */
    public function action(): void
    {
        block('base')->render();
    }
}
