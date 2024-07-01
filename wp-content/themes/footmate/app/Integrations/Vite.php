<?php

namespace FM\Integrations;

class Vite
{
    /**
     * @action wp_head 1
     */
    public function client(): void
    {
        //phpcs:ignore WordPress.WP.EnqueuedResources.NonEnqueuedScript
        printf('<script type="module" src="%s"></script>', esc_attr(fm()->config()->get('hmr.client')));
    }

    /**
     * @filter fm_assets_resolver_url 1 2
     */
    public function url(string $url, string $path): string
    {
        return fm()->config()->get('hmr.sources') . "/{$path}";
    }
}
