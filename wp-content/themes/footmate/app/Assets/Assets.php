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
        wp_enqueue_style('theme', $this->resolve('scripts/scripts.css'), [], fm()->config()->get('version'), 'all');
        wp_enqueue_script('theme', $this->resolve('scripts/scripts.js'), [], fm()->config()->get('version'), ['strategy' => 'defer']);
    }
}
