<?php

namespace FM\Media;

class Sizes
{
    private array $default = [
        'thumbnail' => [
            'width' => 400,
            'height' => 400,
            'crop' => ['center', 'center'],
        ],
        'medium' => [
            'width' => 720,
            'height' => 405,
            'crop' => ['center', 'center'],
        ],
        'large' => [
            'width' => 1440,
            'height' => 810,
            'crop' => ['center', 'center'],
        ],
    ];

    private array $additional = [
        'thumbnail@2x' => [
            'width' => 400,
            'height' => 400,
            'crop' => ['center', 'center'],
        ],
        'medium@2x' => [
            'width' => 1440,
            'height' => 810,
            'crop' => ['center', 'center'],
        ],
        'large@2x' => [
            'width' => 2880,
            'height' => 1620,
            'crop' => ['center', 'center'],
        ],
        'wide' => [
            'width' => 1440,
            'height' => 340,
            'crop' => ['center', 'center'],
        ],
        'wide@2x' => [
            'width' => 2880,
            'height' => 680,
            'crop' => ['center', 'center'],
        ],
    ];

    private function isAllowedSize(string $size): bool
    {
        return ! empty($this->default[$size]) || ! empty($this->additional[$size]);
    }

    /**
     * @action after_setup_theme
     */
    public function setAdditionalSizes(): void
    {
        if (! empty($this->additional)) {
            foreach ($this->additional as $name => $data) {
                add_image_size($name, $data['width'], $data['height'], $data['crop']);
            }
        }
    }

    /**
     * @filter intermediate_image_sizes_advanced 10
     */
    public function filterDefaultSizes(array $sizes): array
    {
        if (! empty($this->default)) {
            foreach ($this->default as $name => $data) {
                if (! empty($sizes[$name])) {
                    $sizes[$name] = $data;
                }
            }
        }

        return $sizes;
    }

    /**
     * @action after_setup_theme
     */
    public function setDefaultSizes(): void
    {
        if (! empty($this->default)) {
            foreach ($this->default as $name => $data) {
                $width = (int) get_option("{$name}_size_w");
                $height = (int) get_option("{$name}_size_h");

                if (! empty($width) && $width !== $data['width']) {
                    update_option("{$name}_size_w", $data['width']);
                }

                if (! empty($height) && $height !== $data['height']) {
                    update_option("{$name}_size_h", $data['height']);
                }
            }
        }
    }

    /**
     * @filter intermediate_image_sizes
     */
    public function unsetSizes(array $sizes): array
    {
        $total = count($sizes);

        for ($i = 0; $i < $total; $i++) {
            if (! $this->isAllowedSize($sizes[$i])) {
                unset($sizes[$i]);
            }
        }

        return $sizes;
    }

    /**
     * @action init
     */
    public function removeSizes(): void
    {
        foreach (get_intermediate_image_sizes() as $size) {
            if (! $this->isAllowedSize($size)) {
                remove_image_size($size);
            }
        }
    }
}
