<?php

namespace FM\Blocks;

abstract class Block
{
    public function render(array $data = []): void
    {
        fm()->templates()->render($this->getTemplate(), $data);
    }

    public function generate(array $data = []): string
    {
        return fm()->templates()->generate($this->getTemplate(), $data);
    }

    abstract protected function getTemplate(): string;
}
