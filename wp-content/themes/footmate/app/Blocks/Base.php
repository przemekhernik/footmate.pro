<?php

namespace FM\Blocks;

use FM\Blocks\Block;

class Base extends Block
{
    public function __construct()
    {
        $this->setId('base');
        $this->setTitle('Base');
        $this->setSchema(
            [
                'title' => 'required|string|max:60',
            ]
        );
        $this->setData(
            [
                'title' => 'base',
            ]
        );
    }
}
