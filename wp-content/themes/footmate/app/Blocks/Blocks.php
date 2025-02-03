<?php

namespace FM\Blocks;

use FM\Blocks\Block;

class Blocks
{
    private array $blocks = [];

    /**
     * @action after_setup_theme
     */
    public function init(): void
    {
        $ignores = ['..', '.', 'Block.php', 'Blocks.php'];
        $classes = array_values(array_diff(scandir(__DIR__), $ignores));

        foreach ($classes as $class) {
            $class = sprintf('FM\Blocks\%s', str_replace('.php', '', $class));
            $block = \FM\App::init(new $class());
            $this->blocks[$block->getId()] = $block;
        }
    }

    public function get(string $key): ?Block
    {
        return ! empty($this->blocks[$key]) ? $this->blocks[$key] : null;
    }
}
