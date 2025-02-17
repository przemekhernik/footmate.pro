<?php

namespace FM;

class Setup
{
    /**
     * @action init
     */
    public function supports(): void
    {
        add_theme_support('post-thumbnails');
    }

    /**
     * @action init
     */
    public function menus(): void
    {
        register_nav_menus(
            [
                'primary_navigation' => __('Primary Navigation', 'md'),
            ]
        );
    }
}
