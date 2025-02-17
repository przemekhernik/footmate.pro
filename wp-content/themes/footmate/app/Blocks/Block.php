<?php

namespace FM\Blocks;

abstract class Block
{
    private string $id = '';

    private string $title = '';

    private array $data = [];

    private array $schema = [];

    final public function render(array $data = []): void
    {
        $this->enqueue();
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        echo $this->generate($data);
    }

    final public function generate(array $data = []): string
    {
        ob_start();

        fm()->templating()->render($this->getTemplate(), $this->parse($data));

        return ob_get_clean();
    }

    final protected function parse(array $data): array
    {
        $data = array_replace_recursive($this->getData(), $data);
        $data = apply_filters("fm_blocks_{$this->getId()}_data", $data);

        if ($this->hasSchema()) {
            $result = fm()->validation()->validate($data, $this->getSchema());

            if (is_wp_error($result)) {
                throw new \Exception(
                    esc_attr(
                        sprintf(
                            '%s block data verification failed: %s',
                            $this->getTitle(),
                            $result->get_error_message()
                        )
                    )
                );
            }
        }

        return $data;
    }

    final public function enqueue(): void
    {
        fm()->assets()->enqueue("blocks/{$this->getId()}/script.js");
        fm()->assets()->enqueue("blocks/{$this->getId()}/style.scss");
    }

    final protected function getTemplate(): string
    {
        return sprintf('%s/%s/template.blade.php', fm()->config()->get('blocks.path'), $this->getId());
    }

    final public function getId(): string
    {
        if (empty($this->id)) {
            throw new \Exception(esc_attr__('Block ID is missing.', 'fm'));
        }

        return $this->id;
    }

    final protected function setId(string $id): void
    {
        $this->id = $id;
    }

    final public function getTitle(): string
    {
        if (empty($this->id)) {
            throw new \Exception(esc_attr__('Block Title is missing.', 'fm'));
        }

        return $this->title;
    }

    final protected function setTitle(string $title): void
    {
        $this->title = $title;
    }

    final protected function getData(string $key = ''): mixed
    {
        if (! empty($key)) {
            return data_get($this->data, $key);
        }

        return $this->data;
    }

    final protected function setData(array $data): void
    {
        $this->data = $data;
    }

    final public function hasData(string $key = ''): bool
    {
        if (! empty($key)) {
            return ! empty($this->getData($key));
        }

        return ! empty($this->getData());
    }

    final protected function getSchema(): array
    {
        return $this->schema;
    }

    final protected function setSchema(array $schema): void
    {
        $this->schema = $schema;
    }

    final public function hasSchema(): bool
    {
        return ! empty($this->getSchema());
    }
}
