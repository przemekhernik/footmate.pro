<?php

namespace FM\Templating;

use Illuminate\View\Compilers\BladeCompiler;

class Directives
{
    public function register(BladeCompiler $compiler): void
    {
        $compiler->directive('svg', fn($exp) => "<?php echo \FM\Templating\Directives::svg({$exp}) ?>");
        $compiler->directive('image', fn($exp) => "<?php echo \FM\Templating\Directives::image({$exp}) ?>");
    }

    public static function svg(string $name, array $args = []): string
    {
        if (empty($name)) {
            throw new \Exception('Filename not resolved.');
        }

        $path = fm()->assets()->resolve("images/{$name}.svg", 'path');

        if (empty($path)) {
            throw new \Exception(esc_html("SVG {$name} not resolved."));
        }

        if (! fm()->filesystem()->exists($path)) {
            throw new \Exception(esc_html("{$path} file not found."));
        }

        if (fm()->filesystem()->guessExtension($path) !== 'svg') {
            throw new \Exception(esc_html("{$path} is not an svg file."));
        }

        $content = fm()->filesystem()->get($path);

        if (! empty($args['class']) && is_string($args['class'])) {
            $args['class'] = sanitize_text_field($args['class']);

            if (preg_match('/\s*class="[^"]*"\s*/', $content)) {
                $content = preg_replace(
                    '/\s*class="[^"]*"\s*/',
                    " class=\"{$args['class']}\" ",
                    $content
                );
            } else {
                $content = preg_replace(
                    '/<svg\b/',
                    "<svg class=\"{$args['class']}\"",
                    $content
                );
            }
        }

        return $content;
    }

    public static function image(string $name, array $attrs = []): string
    {
        if (empty($name)) {
            throw new \Exception('Filename not resolved.');
        }

        $path = fm()->assets()->resolve("images/{$name}", 'path');

        if (empty($path)) {
            throw new \Exception(esc_html("Image {$name} not resolved."));
        }

        if (! fm()->filesystem()->exists($path)) {
            throw new \Exception(esc_html("{$path} file not found."));
        }

        if (! in_array(fm()->filesystem()->guessExtension($path), ['png', 'jpg', 'jpeg'])) {
            throw new \Exception(esc_html("{$path} file extension is not allowed."));
        }

        $url = fm()->assets()->resolve("images/{$name}");
        $alt = ! empty($attrs['alt']) ? $attrs['alt'] : '';
        $class = ! empty($attrs['class']) ? $attrs['class'] : '';

        return "<img src=\"{$url}\" alt=\"{$alt}\" class=\"{$class}\" />";
    }
}
