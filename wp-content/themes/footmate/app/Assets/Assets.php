<?php

namespace FM\Assets;

use FM\Assets\Resolver;

class Assets
{
    use Resolver;

    /**
     * @action wp_enqueue_scripts
     */
    public function front(): void
    {
        $this->enqueue('styles/styles.scss', ['handle' => 'style']);
        $this->enqueue('scripts/scripts.js', ['handle' => 'script']);

        wp_localize_script(
            'script',
            'fm',
            [
                'ajax' => admin_url('admin-ajax.php'),
            ]
        );
    }

    /**
     * @action wp_head
     */
    public function preload(): void
    {
        $preloads = apply_filters(
            'fm_assets_preload',
            [
                [
                    'href' => fm()->assets()->resolve('fonts/SourceSerif4-Regular.woff2'),
                    'as' => 'font',
                    'type' => 'font/woff2',
                ],
            ]
        );

        foreach ($preloads as $item) {
            if (empty($item['href']) || empty($item['as']) || empty($item['type'])) {
                continue;
            }

            printf(
                '<link rel="preload" href="%s" as="%s" type="%s" crossorigin="true" />',
                esc_attr($item['href']),
                esc_attr($item['as']),
                esc_attr($item['type']),
            );
        }
    }
}
