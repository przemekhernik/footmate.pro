<?php

namespace FM\Blocks;

abstract class Block
{
    private string $id = '';

    private array $schema = [];

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

    public function parse(array $data = []): array
    {
        return array_replace_recursive($this->getSchema(), $data);
    }

    final protected function assets(): void
    {
        $assets = $this->getAssets();

        foreach ($assets['scripts'] as $script) {
            wp_enqueue_script($script['handle'], $script['src'], $script['deps'], $script['version'], $script['args']);
        }

        foreach ($assets['styles'] as $style) {
            wp_enqueue_style($style['handle'], $style['src'], $style['deps'], $style['version'], $style['media']);
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
        return [
            'scripts' => [
                [
                    'handle' => "block-{$this->getId()}",
                    'src' => fm()->assets()->resolve('blocks/base/script.js'),
                    'deps' => [],
                    'version' => fm()->config()->get('version'),
                    'args' => true,
                ],
            ],
            'styles' => [
                [
                    'handle' => "block-{$this->getId()}",
                    'src' => fm()->assets()->resolve('blocks/base/style.scss'),
                    'deps' => [],
                    'version' => fm()->config()->get('version'),
                    'media' => 'all',
                ],
            ],
        ];
    }
}
