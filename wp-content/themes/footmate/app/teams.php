<?php

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
