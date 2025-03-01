<?php

namespace FM\Teams;

class Teams
{
    /**
     * @action init
     */
    public function initCPT(): void
    {
        register_post_type(
            'team',
            [
                'labels' => [
                    'name' => __('Teams', 'fm'),
                    'singular_name' => __('Team', 'fm'),
                ],
                'public' => true,
            ]
        );
    }
}
