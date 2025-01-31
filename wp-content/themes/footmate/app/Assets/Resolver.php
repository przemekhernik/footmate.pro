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
            wp_die(esc_attr__('Run <code>npm run build</code> in your application root!', 'fm'));
        }

        $data = fm()->filesystem()->get($path);

        if (! empty($data)) {
            $this->manifest = json_decode($data, true);
        }
    }

    /**
     * @filter script_loader_tag 1 3
     */
    public function module(string $tag, string $handle, string $url): string
    {
        if (
            false !== strpos($url, fm()->config()->get('hmr.uri')) ||
            false !== strpos($url, fm()->config()->get('dist.uri'))
        ) {
            $tag = str_replace('<script ', '<script type="module" ', $tag);
        }

        return $tag;
    }

    public function enqueue(string $path, array $config = []): string
    {
        $config = [
            'handle' => ! empty($config['handle']) ? $config['handle'] : uniqid(),
            'src' => ! empty($path) ? $this->resolve($path) : $path,
            'deps' => ! empty($config['deps']) ? $config['deps'] : [],
            'version' => ! empty($config['version']) ? $config['version'] : fm()->config()->get('version'),
            'type' => ! empty($config['type']) ? $config['type'] : '',
        ];

        if (preg_match('/\.(css|scss)(\?.*)?$/', $path)) {
            $config['type'] = 'style';
        } elseif (preg_match('/\.js(\?.*)?$/', $path)) {
            $config['type'] = 'script';
        }

        if (! filter_var($path, FILTER_VALIDATE_URL)) {
            $dependencies = $this->dependencies($path);

            if (! empty($dependencies['scripts'])) {
                foreach ($dependencies['scripts'] as $index => $script) {
                    $config['deps'][] = $this->enqueue(
                        $script,
                        [
                            'handle' => "{$config['handle']}-{$index}",
                        ]
                    );
                }
            }

            if (! empty($dependencies['styles'])) {
                foreach ($dependencies['styles'] as $index => $style) {
                    $config['deps'][] = $this->enqueue(
                        $style,
                        [
                            'handle' => "{$config['handle']}-{$index}",
                        ]
                    );
                }
            }
        }

        switch ($config['type']) {
            case 'script':
                wp_enqueue_script($config['handle'], $config['src'], $config['deps'], $config['version'], true);
                break;

            case 'style':
                wp_enqueue_style($config['handle'], $config['src'], $config['deps'], $config['version']);
                break;
        }

        return $config['handle'];
    }

    public function resolve(string $path, string $type = 'url'): string
    {
        if (filter_var($path, FILTER_VALIDATE_URL)) {
            return $path;
        }

        $data = $this->find($path);

        switch ($type) {
            case 'url':
                $url = ! empty($data['file']) ? fm()->config()->get('dist.uri') . "/{$data['file']}" : '';

                return apply_filters('fm_assets_resolver_resolve_url', $url, $path);

            case 'path':
                $fullpath = ! empty($data['file']) ? fm()->config()->get('dist.path') . "/{$data['file']}" : '';

                return apply_filters('fm_assets_resolver_resolve_path', $fullpath, $path);
        }

        return '';
    }

    public function dependencies(string $path): array
    {
        $assets = [
            'scripts' => [],
            'styles' => [],
        ];

        if (fm()->config()->get('hmr.active')) {
            return $assets;
        }

        if ($this->has($path)) {
            $assets['scripts'] = collect($this->find($path)['js'] ?? [])
                ->map(fn($item) => fm()->config()->get('dist.uri') . '/' . $item)
                ->all();

            $assets['styles'] = collect($this->find($path)['css'] ?? [])
                ->map(fn($item) => fm()->config()->get('dist.uri') . '/' . $item)
                ->all();
        }

        return $assets;
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
