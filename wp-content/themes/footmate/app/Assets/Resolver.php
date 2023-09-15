<?php 

namespace FM\Assets;

use Illuminate\Support\Str;

trait Resolver
{
    public array $deps = [];

    public function style(string $path, string $handle, array $config = []): void
    {
        $asset = apply_filters('fm/assets/enqueue/style', wp_parse_args($config, [
            'handle' => $handle,
            'url' => $this->resolve($path),
            'deps' => [],
            'version' => fm()->config()->get('version'),
            'media' => 'all'
        ]), $path, $handle);

        wp_enqueue_style($asset['handle'], $asset['url'], $asset['deps'], $asset['version'], $asset['media']);
    }

    public function script(string $path, string $handle, array $config = []): void
    {
        $asset = apply_filters('fm/assets/enqueue/script', wp_parse_args($config, [
            'handle' => $handle,
            'url' => $this->resolve($path),
            'deps' => [],
            'version' => fm()->config()->get('version'),
            'args' => ['strategy' => 'defer']
        ]), $path, $handle);

        wp_enqueue_script($asset['handle'], $asset['url'], $asset['deps'], $asset['version'], $asset['args']);
    }

    private function resolve(string $path): string
    {
        if (Str::isUrl($path)) {
            return $path;
        }

        if (empty($this->deps)) {
            $this->load();
        }

        return $this->deps[$path] ?? '';
    }

    private function load(): void
    {
        $manifest = fm()->config()->get('manifest.path');

        if (empty($manifest) || ! file_exists($manifest)) {
            wp_die(__('Run <code>npm run build</code> in your application root!', 'fm'));
        }

        $data = json_decode(file_get_contents($manifest), true);

        if (! empty($data) && is_array($data)) {
            foreach ($data as $item) {
                $key = str_replace('resources/', '', $item['src']);
                $this->deps[$key] = FM_ASSETS_URI . '/' . $item['file'];
            }
        }
    }
}
