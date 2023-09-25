<?php 

namespace FM\Integrations;

class Vite
{
    /**
     * @action wp_head 1
     */
    public function client(): void
    {
        echo '<script type="module" src="' . fm()->config()->get('hmr.client') . '"></script>';
    }

    /**
     * @filter script_loader_tag 1 3
     */
    public function module(string $tag, string $handle, string $url): string
    {
        if (false !== strpos($url, FM_HMR_HOST)) {
            $tag = str_replace('<script ', '<script type="module" ', $tag);
        }

        return $tag;
    }
    
    /**
     * @filter fm/assets/resolver/url 1 2
     */
    public function url(string $url, string $path): string
    {
        return fm()->config()->get('hmr.base') . "/{$path}";
    }
}
