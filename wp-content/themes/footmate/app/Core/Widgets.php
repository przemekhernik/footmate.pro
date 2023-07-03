<?php

namespace FM\Core;

class Widgets
{
    /**
     * @action get_sidebar
     */
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
