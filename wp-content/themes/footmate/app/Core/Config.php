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
            'env' => [
                'type' => wp_get_environment_type(),
                'mode' => false === strpos(FM_PATH, ABSPATH . 'wp-content/plugins') ? 'theme' : 'plugin',
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

    public function has(string $key): bool
    {
        return null !== $this->get($key);
    }
}
