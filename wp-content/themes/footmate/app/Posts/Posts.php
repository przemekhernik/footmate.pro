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

        if (empty($items = fm()->integrations()->espn()->get())) {
            return $content;
        }

        $html = '';

        foreach ($items as $item) {
            $html .= "<li><a href=\"{$item['url']}\">{$item['title']}</a></li>";
        }

        return $content .= "<ul>{$html}</ul>";
    }
}
