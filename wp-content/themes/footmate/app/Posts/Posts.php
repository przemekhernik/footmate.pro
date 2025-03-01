<?php

namespace FM\Posts;

class Posts
{
    /**
     * @filter the_content
     */
    public function addLinks(string $content): string
    {
        if (! is_singular('post')) {
            return $content;
        }

        $items = fm()->integrations()->espn()->get();

        if (empty($items)) {
            return $content;
        }

        $html = '';

        foreach ($items as $item) {
            $html .= "<li><a href=\"{$item['url']}\">{$item['title']}</a></li>";
        }

        return $content .= "<ul>{$html}</ul>";
    }
}
