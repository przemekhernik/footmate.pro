<?php

namespace FM\Blocks;

abstract class Block
{
    private string $id = '';

    public function render(array $data = []): void
    {
        fm()->templates()->render($this->getTemplate(), $data);
    }

    public function generate(array $data = []): string
    {
        return fm()->templates()->generate($this->getTemplate(), $data);
    }

    protected function getId(): string
    {
        if (empty($this->id)) {
            throw new \Exception('Block ID is missing.');
        }

        return $this->id;
    }

    protected function setId(string $id): void
    {
        $this->id = $id;
    }

    protected function getTemplate(): string
    {
        return sprintf('%s/%s/template.blade.php', fm()->config()->get('blocks.path'), $this->getId());
    }
}
