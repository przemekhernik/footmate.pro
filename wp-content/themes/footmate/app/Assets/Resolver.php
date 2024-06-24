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

        if (! empty($this->manifest["resources/{$path}"])) {
            $url = FM_ASSETS_URI . "/{$this->manifest["resources/{$path}"]['file']}";
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
        if (fm()->config()->get('hmr.active')) {
            return [];
        }

        if ($this->has($path)) {
            $styles = collect($this->find($path)['js'] ?? [])
                ->map(fn($item, $index) => [
                    'type' => 'style',
                    'handle' => $path . '-' . $index,
                    'src' => fm()->config()->get('dist.uri') . '/' . $item,
                    'version' => fm()->config()->get('version'),
                ])
                ->each(fn($item) => wp_enqueue_script($item['handle'], $item['src'], [], $item['version']))
                ->map(fn($item) => $item['handle'])
                ->all();

            $scripts = collect($this->find($path)['css'] ?? [])
                ->map(fn($item, $index) => [
                    'type' => 'script',
                    'handle' => $path . '-' . $index,
                    'src' => fm()->config()->get('dist.uri') . '/' . $item,
                    'version' => fm()->config()->get('version'),
                ])
                ->each(fn($item) => wp_enqueue_style($item['handle'], $item['src'], [], $item['version']))
                ->map(fn($item) =>$item['handle'])
                ->all();
        }

        return array_merge($scripts, $styles);
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
