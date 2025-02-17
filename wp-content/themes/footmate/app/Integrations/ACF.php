<?php

namespace FM\Integrations;

class ACF
{
    /**
     * @action init
     */
    public function blocks(): void
    {
        if (! function_exists('acf_register_block_type')) {
            return;
        }

        foreach (fm()->blocks()->all() as $block) {
            acf_register_block_type(
                [
                    'name'  => $block->getId(),
                    'title' => $block->getTitle(),
                    'keywords' => ['footmate'],
                    // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed
                    'render_callback' => function ($config, $content, $preview, $post) use ($block) {
                        $block->render(
                            array_merge(
                                get_fields(),
                                ['is_preview' => $preview]
                            )
                        );
                    },
                    'enqueue_assets' => function () use ($block) {
                        $block->enqueue();
                    },
                ]
            );
        }
    }

    /**
     * @filter acf/settings/save_json
     */
    public function save(): string
    {
        return MD_PATH . '/resources/fields';
    }

    /**
     * @filter acf/settings/load_json
     */
    public function load(): array
    {
        return [MD_PATH . '/resources/fields'];
    }
}
