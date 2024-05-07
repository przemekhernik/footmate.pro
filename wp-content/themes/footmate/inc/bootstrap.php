<?php // phpcs:ignore PSR1.Files.SideEffects.FoundWithSymbols

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

if (! function_exists('block')) {
    function block(string $key): FM\Blocks\Block
    {
        return FM\App::get()->blocks()->get($key);
    }
}

fm();
