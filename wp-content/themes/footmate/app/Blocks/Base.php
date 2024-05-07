<?php

namespace FM\Blocks;

class Base
{
    private string $id;

    public function __construct(string $id)
    {
        $this->id = $id;
    }

    public function render(): void
    {
        echo '<div>BASE</div>';
    }
}
