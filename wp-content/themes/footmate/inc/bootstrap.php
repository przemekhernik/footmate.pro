<?php

if (! file_exists($composer = FM_PATH . '/vendor/autoload.php')) {
    wp_die(__('Error locating autoloader. Please run <code>composer install</code>.', 'fm'));
}

require $composer;

if (! function_exists('fm')) {
    function fm(): FM\App
    {
        return FM\App::get();
    }
}