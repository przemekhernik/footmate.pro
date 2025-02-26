<?php

namespace FM\Core;

use WP_Error;
use Illuminate\Validation\Factory;
use Illuminate\Translation\Translator;
use Illuminate\Translation\FileLoader;
use Illuminate\Filesystem\Filesystem;

class Validation
{
    private Factory $factory;

    /**
     * @todo refactor
     */
    public function __construct()
    {
        $lang = FM_PATH . '/vendor/illuminate/translation/lang';
        $this->factory = new Factory(new Translator(new FileLoader(new Filesystem(), $lang), 'en'));
    }

    public function validate(array $data, array $rules, array $messages = [], array $attrs = []): ?WP_Error
    {
        $validator = $this->factory->make($data, $this->format($rules), $messages, $attrs);

        if (! $validator->fails()) {
            return null;
        }

        $errors = new WP_Error();

        foreach ($validator->errors()->all() as $error) {
            $errors->add('validation', $error);
        }

        return $errors;
    }

    /**
     * @todo refactor
     */
    private function format(array $rules, string $prefix = ''): array
    {
        $flatRules = [];

        foreach ($rules as $key => $rule) {
            if (is_array($rule)) {
                if (isset($rule[0]) && is_string($rule[0])) {
                    $flatRules[trim($prefix . $key, '.')] = $rule[0];
                    unset($rule[0]);
                }

                $nestedPrefix = $prefix . (is_numeric($key) ? '*' : $key) . '.';
                $flatRules = array_merge(
                    $flatRules,
                    $this->format($rule, $nestedPrefix)
                );
            } else {
                $flatRules[trim($prefix . $key, '.')] = $rule;
            }
        }

        return $flatRules;
    }
}
