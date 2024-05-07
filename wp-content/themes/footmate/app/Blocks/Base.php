<?php

namespace FM\Blocks;

class Base
{
    public function render(): void
    {
        fm()->templates()->render($this->getTemplate());
    }

    public function generate(): string
    {
        return fm()->templates()->generate($this->getTemplate());
    }

    private function getTemplate(): string
    {
        return sprintf('%s/base/template.blade.php', fm()->config()->get('blocks.path'));
    }
}
