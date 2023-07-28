<?php 

namespace FM\Core;

class Setup
{
    /**
     * @action wp_enqueue_scripts
     * @todo Refactor with assets generation.
     */
    public function assets(): void
    {
        wp_enqueue_style('fm/style', fm()->config()->get('uri') . '/style.css', false, fm()->config()->get('version'));
    }
}
