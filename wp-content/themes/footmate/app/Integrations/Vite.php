<?php 

namespace FM\Integrations;

use Illuminate\Support\Str;

class Vite
{
    /**
     * @action wp_enqueue_scripts 1
     */
    public function include(): void
    {
        if (! wp_script_is('vite', 'enqueued')) {
            wp_enqueue_script('vite', fm()->config()->get('hmr.client'));
        }
    }

    /**
     * @action script_loader_tag 1 3
     */
    public function module(string $tag, string $handle, string $url): string
    {
        if (in_array($handle, ['vite', 'theme'])) {
            $tag = str_replace('<script ', '<script type="module" ', $tag);
        }

        return $tag;
    }
    
    /**
     * @filter fm/assets/enqueue/script 10 3
     */
    public function url(array $data, string $path, string $handle): array
    {
        if (! Str::isUrl($path)) {
            $data['url'] = fm()->config()->get('hmr.base') . "/{$path}";
            $data['deps'][] = 'vite';
        }

        return $data;
    }
}
