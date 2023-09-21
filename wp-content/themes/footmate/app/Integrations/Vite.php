<?php 

namespace FM\Integrations;

class Vite
{
    /**
     * @action wp_enqueue_scripts 1
     */
    public function include(): void
    {
        if (! wp_script_is('vite', 'enqueued')) {
            wp_enqueue_script('vite', fm()->config()->get('hmr.client'));
        }
    }

    /**
     * @action script_loader_tag 1 3
     */
    public function module(string $tag, string $handle, string $url): string
    {
        if (false !== strpos($url, FM_ASSETS_URI) || false !== strpos($url, FM_HMR_HOST)) {
            $tag = str_replace('<script ', '<script type="module" ', $tag);
        }

        return $tag;
    }
    
    /**
     * @filter fm/assets/resolver/url 1 2
     */
    public function url(string $url, string $path): string
    {
        if (false !== strpos($path, '.css')) {
            return '';
        }

        return fm()->config()->get('hmr.base') . "/{$path}";
    }
}
