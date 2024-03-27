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
     * @filter fm/assets/resolver/url 1 2
     */
    public function url(string $url, string $path): string
    {
        return fm()->config()->get('hmr.sources') . "/{$path}";
    }
}
