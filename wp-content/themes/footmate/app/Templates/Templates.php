<?php

namespace FM\Templates;

use FM\Templates\Provider;
use FM\Templates\Resolver;

class Templates
{
    private Provider $provider;

    public function __construct()
    {
        \FM\App::init(new Resolver());
        $this->provider = \FM\App::init(new Provider());
    }

    public function render(string $template, array $data = []): void
    {
        $this->provider->render($template, $data);
    }

    public function generate(string $template, array $data = []): string
    {
        return $this->provider->generate($template, $data);
    }
}
