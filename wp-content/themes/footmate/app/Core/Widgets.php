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
        $espn = new \FM\Integrations\ESPN();

        if (empty($items = $espn->get())) {
            return;
        }

        $html = '';

        foreach ($items as $item) {
            $html .= "<div><a href=\"{$item['url']}\">{$item['title']}</a></div>";
        }

        echo $html;
    }
}
