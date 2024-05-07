<?php

namespace FM\Blocks;

class Base
{
    private string $id;

    public function __construct(string $id)
    {
        $this->id = $id;
    }

    public function render(): void
    {
        fm()->templates()->render($this->getTemplate());
    }

    private function getTemplate(): string
    {
        return sprintf('%s/%s/template.blade.php', fm()->config()->get('blocks.path'), $this->id);
    }
}
