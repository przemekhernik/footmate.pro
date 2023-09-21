<?php 

namespace FM\Assets;

trait Resolver
{
    private array $manifest = [];

    // public function style(string $path, string $handle, array $config = []): void
    // {
    //     $asset = apply_filters('fm/assets/enqueue/style', wp_parse_args($config, [
    //         'handle' => $handle,
    //         'url' => $this->resolve($path),
    //         'deps' => [],
    //         'version' => fm()->config()->get('version'),
    //         'media' => 'all'
    //     ]), $path, $handle);

    //     wp_enqueue_style($asset['handle'], $asset['url'], $asset['deps'], $asset['version'], $asset['media']);
    // }

    // public function script(string $handle, string $path, array $config = []): void
    // {
    //     $asset = apply_filters('fm/assets/enqueue/script', wp_parse_args($config, [
    //         'handle' => $handle,
    //         'url' => $this->resolve($path),
    //         'deps' => [],
    //         'version' => fm()->config()->get('version'),
    //         'args' => ['strategy' => 'defer']
    //     ]), $path, $handle);

    //     wp_enqueue_script($asset['handle'], $asset['url'], $asset['deps'], $asset['version'], $asset['args']);
    // }

    /**
     * @action wp_enqueue_scripts 1
     */
    public function load(): void
    {
        $path = fm()->config()->get('manifest.path');

        if (empty($path) || ! file_exists($path)) {
            wp_die(__('Run <code>npm run build</code> in your application root!', 'fm'));
        }

        $this->manifest = json_decode(file_get_contents($path), true);
    }

    private function resolve(string $path): string
    {
        $url = '';

        if (! empty($this->manifest["resources/{$path}"])) {
            $url = FM_ASSETS_URI . "/{$this->manifest["resources/{$path}"]['file']}";
        }

        return apply_filters('fm/assets/resolver/url', $url, $path);
    }
}
