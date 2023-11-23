<?php 

namespace FM\Assets;

use FM\Assets\Resolver;

class Assets
{
    use Resolver;

    /**
     * @action wp_enqueue_scripts
     */
    public function front(): void
    {
        wp_enqueue_style('theme', $this->resolve('styles/styles.scss'), [], fm()->config()->get('version'));
        wp_enqueue_script('theme', $this->resolve('scripts/scripts.js'), [], fm()->config()->get('version'));
        wp_enqueue_script('theme-blocks', $this->resolve('scripts/blocks.js'), [], fm()->config()->get('version'));
    }

    /**
     * @filter script_loader_tag 1 3
     */
    public function module(string $tag, string $handle, string $url): string
    {
        $tag = str_replace('<script ', '<script type="module" ', $tag);

        return $tag;
    }
}
