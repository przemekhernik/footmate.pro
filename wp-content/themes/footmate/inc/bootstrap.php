<?php // phpcs:ignore PSR1.Files.SideEffects.FoundWithSymbols

$composer = FM_PATH . '/vendor/autoload.php';

if (! file_exists($composer)) {
    wp_die(wp_kses_post(__('Error locating autoloader. Please run <code>composer install</code>.', 'fm')));
}

require $composer;

if (! function_exists('fm')) {
    function fm(): FM\App
    {
        return FM\App::get();
    }
}

fm();
