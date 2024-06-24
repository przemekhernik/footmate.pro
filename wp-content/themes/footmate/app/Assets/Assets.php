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
        $this->enqueue('styles/styles.scss', 'style');
        $this->enqueue('scripts/scripts.js', 'script');
        $this->enqueue('scripts/blocks.js', 'script');
    }
}
