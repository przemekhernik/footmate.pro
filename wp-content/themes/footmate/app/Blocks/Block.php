<?php

namespace FM\Blocks;

abstract class Block
{
    private string $id = '';

    private array $schema = [];

    final public function render(array $data = []): void
    {
        fm()->templates()->render($this->getTemplate(), $this->parse($data));
    }

    final public function generate(array $data = []): string
    {
        return fm()->templates()->generate($this->getTemplate(), $this->parse($data));
    }

    public function parse(array $data = []): array
    {
        return array_replace_recursive($this->getSchema(), $data);
    }

    final protected function getId(): string
    {
        if (empty($this->id)) {
            throw new \Exception('Block ID is missing.');
        }

        return $this->id;
    }

    final protected function setId(string $id): void
    {
        $this->id = $id;
    }

    final protected function getSchema(): array
    {
        return $this->schema;
    }

    final protected function setSchema(array $schema): void
    {
        $this->schema = $schema;
    }

    final protected function getTemplate(): string
    {
        return sprintf('%s/%s/template.blade.php', fm()->config()->get('blocks.path'), $this->getId());
    }
}
