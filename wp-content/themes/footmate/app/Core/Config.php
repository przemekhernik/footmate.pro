<?php

namespace FM\Core;

class Config
{
    private array $config = [];

    public function __construct()
    {
        $this->config = [
            'version' => FM_VERSION,
            'path' => FM_PATH,
            'uri' => FM_URI,
            'cache' => [
                'path' => wp_upload_dir()['basedir'] . '/cache/fm',
            ],
            'env' => [
                'type' => wp_get_environment_type(),
                'mode' => false === strpos(FM_PATH, ABSPATH . 'wp-content/plugins') ? 'theme' : 'plugin',
            ],
            'images' => [
                'path' => FM_PATH . '/resources/images',
                'uri' => FM_URI . '/resources/images',
            ],
            'styles' => [
                'path' => FM_PATH . '/resources/styles',
                'uri' => FM_URI . '/resources/images',
            ],
            'scripts' => [
                'path' => FM_PATH . '/resources/scripts',
                'uri' => FM_URI . '/resources/images',
            ],
            'views' => [
                'path' => FM_PATH . '/resources/views',
            ],
        ];
    }

    public function get(string $key): mixed
    {
        $value = $this->config;

        foreach (explode('.', $key) as $key) {
            if (isset($value[$key])) {
                $value = $value[$key];
            } else {
                return null;
            }
        }

        return $value;
    }

    public function isTheme(): bool
    {
        return 'theme' === $this->get('env.mode');
    }

    public function isPlugin(): bool
    {
        return 'plugin' === $this->get('env.mode');
    }
}
