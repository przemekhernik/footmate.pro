<?php

namespace FM\Core;

class Widgets
{
    /**
     * @action get_sidebar
     */
    public function addLinks(): void
    {
        $items = fm()->integrations()->espn()->get();

        if (empty($items)) {
            return;
        }

        $html = '';

        foreach ($items as $item) {
            $html .= "<div><a href=\"{$item['url']}\">{$item['title']}</a></div>";
        }

        echo $html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    }
}
