<?php 

namespace FM\Templates;

class Resolver
{
    /**
     * @filter template_include
     */
    public function render(string $template): string
    {
        if (! fm()->config()->isTheme()) {
            return $template;
        }
        
        fm()->templates()->render($template, []);

        return fm()->config()->get('path') . '/index.php';
    }

    /**
     * @filter 404_template_hierarchy
     * @filter archive_template_hierarchy
     * @filter attachment_template_hierarchy
     * @filter author_template_hierarchy
     * @filter category_template_hierarchy
     * @filter date_template_hierarchy
     * @filter embed_template_hierarchy
     * @filter frontpage_template_hierarchy
     * @filter home_template_hierarchy
     * @filter index_template_hierarchy
     * @filter page_template_hierarchy
     * @filter paged_template_hierarchy
     * @filter privacypolicy_template_hierarchy
     * @filter search_template_hierarchy
     * @filter single_template_hierarchy
     * @filter singular_template_hierarchy
     * @filter tag_template_hierarchy
     * @filter taxonomy_template_hierarchy
     * 
     * @see https://github.com/WordPress/WordPress/blob/master/wp-includes/template.php#L30-L62
     */
    public function relocate(array $templates): array
    {
        if (! fm()->config()->isTheme()) {
            return $templates;
        }

        $relpath = str_replace(fm()->config()->get('path') . '/', '', fm()->config()->get('views.path'));
        $templates = array_map(fn($template) => str_replace('.php', '.blade.php', "{$relpath}/{$template}"), $templates);

        return $templates;
    }
}
