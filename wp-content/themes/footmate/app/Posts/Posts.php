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
        $teams = get_posts([
            'post_type' => 'team',
            'posts_per_page' => 5,
        ]);

        if (! empty($teams)) {
            $links = [];

            foreach ($teams as $team) {
                $links[] = sprintf('<a href="%s">%s</a>', get_permalink($team), get_the_title($team));
            }

            $content .= sprintf(__('Latest Teams: %s', 'fm'), join(', ', $links));
        }

        return $content;
    }
}
