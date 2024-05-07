<?php

namespace FM\Blocks;

use FM\Blocks\Block;

class Base extends Block
{
    private string $id = '';

    public function __construct()
    {
        $this->setId('base');
    }

    protected function getTemplate(): string
    {
        return sprintf('%s/%s/template.blade.php', fm()->config()->get('blocks.path'), $this->getId());
    }

    protected function getId(): string
    {
        return $this->id;
    }

    protected function setId(string $id): void
    {
        $this->id = $id;
    }
}
