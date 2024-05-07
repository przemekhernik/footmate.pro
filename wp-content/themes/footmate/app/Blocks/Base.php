<?php

namespace FM\Blocks;

class Base
{
    public function render(array $data = []): void
    {
        fm()->templates()->render($this->getTemplate(), $data);
    }

    public function generate(array $data = []): string
    {
        return fm()->templates()->generate($this->getTemplate(), $data);
    }

    private function getTemplate(): string
    {
        return sprintf('%s/base/template.blade.php', fm()->config()->get('blocks.path'));
    }
}
