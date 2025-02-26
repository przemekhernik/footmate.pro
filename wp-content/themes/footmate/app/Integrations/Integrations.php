<?php

namespace FM\Integrations;

use FM\Integrations\ACF;
use FM\Integrations\Console;
use FM\Integrations\Vite;

class Integrations
{
    /**
     * @action init 1
     */
    public function init(): void
    {
        $plugins = apply_filters('active_plugins', get_option('active_plugins'));

        if (fm()->config()->get('hmr.active')) {
            \FM\App::init(new Vite());
        }

        if (class_exists('WP_CLI')) {
            \FM\App::init(new Console());
        }

        if (in_array('advanced-custom-fields-pro/acf.php', $plugins)) {
            \FM\App::init(new ACF());
        }
    }
}
