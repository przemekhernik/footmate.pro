<?php

namespace FM\Blocks;

use FM\Blocks\Block;
use FM\Blocks\Base;

class Blocks
{
    private array $blocks = [];

    /**
     * @action after_setup_theme
     */
    public function init(): void
    {
        $this->blocks['base'] = new Base();
    }

    public function get(string $key): ?Block
    {
        return ! empty($this->blocks[$key]) ? $this->blocks[$key] : null;
    }
}
