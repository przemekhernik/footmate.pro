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

if (! function_exists('fmInit')) {
    function fmInit(string $class, array $args = []): object
    {
        $instance = new $class(...$args);
        
        FM\Core\Hooks::init($instance);
        
        return $instance;
    }
}
