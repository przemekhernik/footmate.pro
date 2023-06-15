<?php

namespace FM\Posts;

class Posts
{
    public function __construct()
    {
        add_filter('the_content', [$this, 'addLinks']);
    }

    public function addLinks(string $content): string
    {
        if (! is_singular('post')) {
            return $content;
        }

        $espn = new \FM\Integrations\ESPN();
        $items = $espn->get();

        if (! empty($items)) {
            $links = [];

            foreach ($items as $item) {
                $links[] = sprintf('<a href="%s">%s</a>', $item['url'], $item['title']);
            }

            $content .= sprintf(__('Latest News: %s', 'fm'), join(', ', $links));
        }

        return $content;
    }
}
