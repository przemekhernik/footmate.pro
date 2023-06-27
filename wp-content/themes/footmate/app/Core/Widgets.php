<?php

namespace FM\Core;

class Widgets
{
    public function __construct()
    {
        add_action('get_sidebar', [$this, 'addLinks']);
    }

    public function addLinks(): void
    {
        if (empty($items = fm()->integrations()->espn()->get())) {
            return;
        }

        $html = '';

        foreach ($items as $item) {
            $html .= "<div><a href=\"{$item['url']}\">{$item['title']}</a></div>";
        }

        echo $html;
    }
}
