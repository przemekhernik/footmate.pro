<?php // phpcs:ignore PSR1.Files.SideEffects.FoundWithSymbols

$composer = FM_PATH . '/vendor/autoload.php';

if (! file_exists($composer)) {
    wp_die('Error locating autoloader. Please run <code>composer install</code>.');
}

if (function_exists('opcache_get_status') && empty(ini_get('opcache.save_comments'))) {
    wp_die('The <code>opcache.save_comments</code> option must be enabled on the server.');
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
