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
