<?php

namespace FM\Assets;

trait Resolver
{
    private const TYPES = [
        'css' => 'style',
        'js' => 'script'
    ];

    private array $manifest = [];

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

    private function dependencies(string $path): array
    {
        $dependencies = [];

        if (fm()->config()->get('hmr.active')) {
            return $dependencies;
        }

        $entry = $this->find($path);

        if (! empty($entry)) {
            foreach (self::TYPES as $ext => $type) {
                if (! empty($entry[$ext])) {
                    foreach ($entry[$ext] as $name) {
                        $dependencies[] = [
                            'type' => $type,
                            'handle' => "{$path}.dep.{$name}",
                            'src' => fm()->config()->get('dist.uri') . '/' . $name,
                        ];
                    }
                }
            }
        }

        if (! empty($dependencies)) {
            foreach ($dependencies as $item) {
                switch ($item['type']) {
                    case 'style':
                        $this->style($item['handle'], $item['src'], []);
                        break;

                    case 'script':
                        $this->script($item['handle'], $item['src'], []);
                        break;
                }
            }
        }

        return array_map(fn(array $item) => $item['handle'], $dependencies);
    }

    public function enqueue(string $path, string $type): void
    {
        switch ($type) {
            case 'style':
                $this->style($path, $this->resolve($path), $this->dependencies($path));
                break;

            case 'script':
                $this->script($path, $this->resolve($path), $this->dependencies($path));
                break;
        }
    }

    private function style(string $handle, string $src, array $deps = []): void
    {
        wp_enqueue_style($handle, $src, $deps, fm()->config()->get('version'));
    }

    private function script(string $handle, string $src, array $deps = []): void
    {
        wp_enqueue_script($handle, $src, $deps, fm()->config()->get('version'));
    }

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

    private function find(string $path): array
    {
        return $this->has($path) ? $this->manifest["resources/{$path}"] : [];
    }

    private function has(string $path): bool
    {
        return ! empty($this->manifest["resources/{$path}"]);
    }
}
