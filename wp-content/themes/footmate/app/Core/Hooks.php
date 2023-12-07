<?php

namespace FM\Core;

class Hooks
{
    private const PATTERN =
        '#\* @(?P<type>filter|action|shortcode)\s+(?P<name>[a-z0-9\-\.\/_]+)(\s+(?P<priority>\d+))?#';

    public static function init(object $object): object
    {
        foreach (self::extract($object) as $config) {
            call_user_func($config['hook'], $config['name'], $config['callback'], $config['priority'], $config['args']);
        }

        return $object;
    }

    private static function extract(object $object): array
    {
        $handlers = [];

        if (empty($object)) {
            return $handlers;
        }

        $reflector = new \ReflectionObject($object);

        foreach ($reflector->getMethods() as $method) {
            if (preg_match_all(self::PATTERN, $method->getDocComment(), $matches, PREG_SET_ORDER)) {
                foreach ($matches as $match) {
                    $handlers[] = [
                        'hook' => sprintf('add_%s', $match['type']),
                        'name' => $match['name'],
                        'callback' => [$object, $method->getName()],
                        'priority' => $match['priority'] ?? 10,
                        'args' => $method->getNumberOfParameters(),
                    ];
                }
            }
        }

        return $handlers;
    }
}
