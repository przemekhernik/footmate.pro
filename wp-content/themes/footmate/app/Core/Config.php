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
            'uri' => home_url(str_replace(ABSPATH, '', FM_PATH)),
            'cache' => [
                'path' => wp_upload_dir()['basedir'] . '/cache/fm',
            ],
            'env' => [
                'type' => wp_get_environment_type(),
                'mode' => false === strpos(FM_PATH, ABSPATH . 'wp-content/plugins') ? 'theme' : 'plugin',
            ],
            'images' => [
                'path' => FM_PATH . '/resources/images',
            ],
            'styles' => [
                'path' => FM_PATH . '/resources/styles',
            ],
            'scripts' => [
                'path' => FM_PATH . '/resources/scripts',
            ],
            'views' => [
                'path' => FM_PATH . '/resources/views',
            ],
        ];
    }
}
