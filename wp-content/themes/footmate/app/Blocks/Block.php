<?php

namespace FM\Blocks;

abstract class Block
{
    private string $id = '';

    private array $schema = [];

    public function parse(array $data = []): array
    {
        return array_replace_recursive($this->getSchema(), $data);
    }

    final public function render(array $data = []): void
    {
        $this->assets();
        fm()->templates()->render($this->getTemplate(), $this->parse($data));
    }

    final public function generate(array $data = []): string
    {
        $this->assets();
        return fm()->templates()->generate($this->getTemplate(), $this->parse($data));
    }

    final protected function assets(): void
    {
        $assets = $this->getAssets();

        foreach ($assets['scripts'] as $key => $src) {
            wp_enqueue_script("block-{$this->getId()}-{$key}", $src, [], fm()->config()->get('version'), true);
        }

        foreach ($assets['styles'] as $key => $src) {
            wp_enqueue_style("block-{$this->getId()}-{$key}", $src, [], fm()->config()->get('version'));
        }
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

    final protected function getAssets(): array
    {
        $deps = fm()->assets()->dependencies("blocks/{$this->getId()}/script.js");

        return [
            'scripts' => array_merge([
                fm()->assets()->resolve("blocks/{$this->getId()}/script.js"),
            ], $deps['scripts']),
            'styles' => array_merge([
                fm()->assets()->resolve("blocks/{$this->getId()}/style.scss"),
            ], $deps['styles']),
        ];
    }
}
