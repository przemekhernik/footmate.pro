<?php

define('FM_VERSION', '0.0.1');
define('FM_PATH', dirname(__FILE__));
define('FM_FILE', FM_PATH . '/functions.php');

function fm_register_teams_cpt()
{
    register_post_type('team', [
        'labels' => [
            'name' => __('Teams', 'fm'),
            'singular_name' => __('Team', 'fm'),
        ],
        'public' => true,
    ]);
}

add_action('init', 'fm_register_teams_cpt');

function fm_add_teams_to_posts_content($content)
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

add_filter('the_content', 'fm_add_teams_to_posts_content');
