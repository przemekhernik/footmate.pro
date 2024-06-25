<?php

namespace FM\Assets;

trait Resolver
{
    private array $manifest = [];

    /**
     * @action init
     */
    public function load(): void
    {
        $path = fm()->config()->get('manifest.path');

        if (empty($path) || ! file_exists($path)) {
            wp_die(__('Run <code>npm run build</code> in your application root!', 'fm'));
        }

        $this->manifest = json_decode(file_get_contents($path), true);
    }

    /**
     * @filter script_loader_tag 1 3
     */
    public function module(string $tag, string $handle, string $url): string
    {
        if ((false !== strpos($url, FM_HMR_HOST)) || (false !== strpos($url, FM_ASSETS_URI))) {
            $tag = str_replace('<script ', '<script type="module" ', $tag);
        }

        return $tag;
    }

    public function resolve(string $path): string
    {
        $url = '';

        if ($this->has($path)) {
            $url = FM_ASSETS_URI . "/{$this->find($path)['file']}";
        }

        return apply_filters('fm/assets/resolver/url', $url, $path);
    }

    public function enqueue(string $path, string $type): void
    {
        $version = fm()->config()->get('version');

        switch ($type) {
            case 'style':
                wp_enqueue_style($path, $this->resolve($path), $this->dependencies($path), $version);
                break;

            case 'script':
                wp_enqueue_script($path, $this->resolve($path), $this->dependencies($path), $version);
                break;
        }
    }

    public function dependencies(string $path): array
    {
        $dependencies = [];

        if (fm()->config()->get('hmr.active')) {
            return $dependencies;
        }

        $entry = $this->find($path);

        if (! empty($entry['css'])) {
            foreach ($entry['css'] as $item) {
                $dependencies[] = [
                    'type' => 'style',
                    'src' => fm()->config()->get('dist.uri') . '/' . $item,
                ];
            }
        }

        if (! empty($entry['js'])) {
            foreach ($entry['js'] as $item) {
                $dependencies[] = [
                    'type' => 'script',
                    'src' => fm()->config()->get('dist.uri') . '/' . $item,
                ];
            }
        }

        if (! empty($dependencies)) {
            $version = fm()->config()->get('version');

            foreach ($dependencies as $index => &$item) {
                $item['handle'] = "{$path}.dep.{$index}";

                switch ($item['type']) {
                    case 'style':
                        wp_enqueue_style($item['handle'], $item['src'], [], $version);
                        break;

                    case 'script':
                        wp_enqueue_script($item['handle'], $item['src'], [], $version);
                        break;
                }
            }
        }

        return array_map(fn(array $item) => $item['handle'], $dependencies);
    }

    private function find(string $path): array
    {
        return $this->has($path) ? $this->manifest["resources/{$path}"] : [];
    }

    private function has(string $path): bool
    {
        return ! empty($this->manifest["resources/{$path}"]);
    }
}
