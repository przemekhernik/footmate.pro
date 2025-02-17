<?php

namespace FM;

use FM\Assets\Assets;
use FM\Blocks\Blocks;
use FM\Core\Config;
use FM\Core\Hooks;
use FM\Core\Validation;
use FM\Integrations\Integrations;
use FM\Media\Media;
use FM\Setup;
use FM\Templating\Templating;
use Illuminate\Filesystem\Filesystem;

class App
{
    private Assets $assets;

    private Blocks $blocks;

    private Config $config;

    private Filesystem $filesystem;

    private Integrations $integrations;

    private Media $media;

    private Setup $setup;

    private Templating $templating;

    private Validation $validation;

    private static ?App $instance = null;

    private function __construct()
    {
        $this->assets = self::init(new Assets());
        $this->blocks = self::init(new Blocks());
        $this->config = self::init(new Config());
        $this->filesystem = new Filesystem();
        $this->integrations = self::init(new Integrations());
        $this->media = self::init(new Media());
        $this->setup = self::init(new Setup());
        $this->templating = self::init(new Templating());
        $this->validation = new Validation();
    }

    public function assets(): Assets
    {
        return $this->assets;
    }

    public function blocks(): Blocks
    {
        return $this->blocks;
    }

    public function config(): Config
    {
        return $this->config;
    }

    public function filesystem(): Filesystem
    {
        return $this->filesystem;
    }

    public function integrations(): Integrations
    {
        return $this->integrations;
    }

    public function media(): Media
    {
        return $this->media;
    }

    public function setup(): Setup
    {
        return $this->setup;
    }

    public function templating(): Templating
    {
        return $this->templating;
    }

    public function validation(): Validation
    {
        return $this->validation;
    }

    private function __clone()
    {
    }

    public function __wakeup()
    {
        throw new \Exception('Cannot unserialize a singleton.');
    }

    public static function get(): App
    {
        if (empty(self::$instance)) {
            self::$instance = new App();
        }

        return self::$instance;
    }

    public static function init(object $module): object
    {
        return Hooks::init($module);
    }
}
