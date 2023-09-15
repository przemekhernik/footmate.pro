<?php

namespace FM\Core;

class Config
{
    private array $config = [];

    public function __construct()
    {
        $this->config = [
            'version' => wp_get_environment_type() === 'development' ? time() : FM_VERSION,
            'path' => FM_PATH,
            'uri' => FM_URI,
            'env' => [
                'type' => wp_get_environment_type(),
                'mode' => false === strpos(FM_PATH, ABSPATH . 'wp-content/plugins') ? 'theme' : 'plugin',
            ],
            'manifest' => [
                'path' => FM_ASSETS_PATH . '/manifest.json',
            ],
            'cache' => [
                'path' => wp_upload_dir()['basedir'] . '/cache/fm',
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
