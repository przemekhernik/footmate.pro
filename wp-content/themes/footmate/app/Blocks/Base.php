<?php

namespace FM\Blocks;

use FM\Blocks\Block;

class Base extends Block
{
    protected function getTemplate(): string
    {
        return sprintf('%s/base/template.blade.php', fm()->config()->get('blocks.path'));
    }
}
