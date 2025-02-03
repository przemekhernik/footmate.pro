<?php
/**
 * W.I.P
 * @see https://github.com/roots/acorn/tree/main/src/Roots/Acorn/Console
 * @see https://make.wordpress.org/cli/handbook/references/internal-api/wp-cli-add-command/
 * phpcs:disable
 */
namespace FM\Integrations;

use WP_CLI;

class Console
{
    public function __construct()
    {
        WP_CLI::add_command(
            'fm release',
            [$this, 'release'],
            [
                'shortdesc' => __('Creates release version of the theme.', 'fm'),
            ]
        );

        WP_CLI::add_command(
            'fm block',
            [$this, 'block'],
            [
                'shortdesc' => __('Creates a new block of the theme.', 'fm'),
            ]
        );
    }

    public function release(array $args = [], array $assoc = []): void
    {
        $paths = [
            'source' => FM_PATH,
            'output' => FM_PATH . '/.output',
        ];

        fm()->filesystem()->exists($paths['output']) ? fm()->filesystem()->cleanDirectory($paths['output']) : fm()->filesystem()->makeDirectory($paths['output']);

        shell_exec("cd {$paths['source']} && composer install --no-dev --quiet");

        fm()->filesystem()->copyDirectory($paths['source'] . '/vendor', $paths['output'] . '/vendor');

        shell_exec("cd {$paths['source']} && composer install --quiet");

        shell_exec("cd {$paths['source']} && yarn build");

        fm()->filesystem()->copyDirectory($paths['source'] . '/dist', $paths['output'] . '/dist');

        fm()->filesystem()->copyDirectory($paths['source'] . '/app', $paths['output'] . '/app');

        fm()->filesystem()->copyDirectory($paths['source'] . '/inc', $paths['output'] . '/inc');

        fm()->filesystem()->copyDirectory($paths['source'] . '/resources', $paths['output'] . '/resources');

        fm()->filesystem()->deleteDirectory($paths['output'] . '/resources/scripts');

        fm()->filesystem()->deleteDirectory($paths['output'] . '/resources/styles');

        fm()->filesystem()->deleteDirectory($paths['output'] . '/resources/fonts');

        fm()->filesystem()->deleteDirectory($paths['output'] . '/resources/images');

        collect(fm()->filesystem()->allFiles($paths['output'] . '/resources/blocks', true))
            ->filter(fn($file) => in_array($file->getExtension(), ['scss', 'js'], true))
            ->each(fn($file) => fm()->filesystem()->delete($file->getPathname()));

        collect(fm()->filesystem()->allFiles($paths['output'], true))
            ->filter(fn($file) => in_array($file->getExtension(), ['gitkeep', 'DS_Store'], true))
            ->each(fn($file) => fm()->filesystem()->delete($file->getPathname()));

        if (! empty($assoc['zip'])) {
            fm()->filesystem()->copyDirectory($paths['output'], FM_PATH . '/footmate');
            shell_exec("cd {$paths['source']} && zip -r footmate.zip footmate");
            fm()->filesystem()->cleanDirectory($paths['output']);
            fm()->filesystem()->move(FM_PATH . '/footmate.zip', $paths['output'] . '/footmate.zip');
            fm()->filesystem()->deleteDirectory(FM_PATH . '/footmate');
        }

        WP_CLI::success(__('🚀 Release complete.', 'fm'));
    }

    public function block(array $args = [], array $assoc = []): void
    {
        if (empty($assoc['id'])) {
            WP_CLI::error(__('Block ID is required.', 'fm'));
        }

        if (empty($assoc['title'])) {
            WP_CLI::error(__('Block Title is required.', 'fm'));
        }

        if (!preg_match('/^[a-z\-]+$/', $assoc['id'])) {
            WP_CLI::error(__('Block ID has incorrect format.', 'fm'));
        }

        if (!preg_match('/^[a-zA-Z]+$/', $assoc['title'])) {
            WP_CLI::error(__('Block Title has incorrect format.', 'fm'));
        }

        if (fm()->filesystem()->exists(FM_PATH . '/app/Blocks/' . $assoc['title'] . '.php')) {
            WP_CLI::error(__('Block already exists.', 'fm'));
        }

        if (fm()->filesystem()->exists(FM_PATH . '/resources/blocks/' . $assoc['id'])) {
            WP_CLI::error(__('Block already exists.', 'fm'));
        }

        fm()->filesystem()->copy(FM_PATH . '/app/Blocks/Base.php', FM_PATH . '/app/Blocks/' . $assoc['title'] . '.php');
        fm()->filesystem()->copyDirectory(FM_PATH . '/resources/blocks/base', FM_PATH . '/resources/blocks/' . $assoc['id']);

        $files = [
            FM_PATH . '/app/Blocks/' . $assoc['title'] . '.php',
            FM_PATH . '/resources/blocks/' . $assoc['id'] . '/template.blade.php',
            FM_PATH . '/resources/blocks/' . $assoc['id'] . '/script.js',
            FM_PATH . '/resources/blocks/' . $assoc['id'] . '/style.scss',
        ];

        foreach ($files as $file) {
            $content = fm()->filesystem()->get($file);
            $content = str_replace('Base', $assoc['title'], $content);
            $content = str_replace('base', $assoc['id'], $content);
            fm()->filesystem()->put($file, $content);
        }

        WP_CLI::success(__('🚀 Block created.', 'fm'));
    }
}
