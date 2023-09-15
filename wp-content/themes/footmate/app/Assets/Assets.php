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
        $this->script('scripts/scripts.js', 'theme');
        $this->style('scripts/scripts.css', 'theme');
    }
}
