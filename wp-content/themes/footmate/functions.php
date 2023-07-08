<?php

define('FM_VERSION', '0.1.1');
define('FM_PATH', dirname(__FILE__));
define('FM_FILE', FM_PATH . '/functions.php');

require_once(FM_PATH . '/inc/bootstrap.php');

fm();

add_action('template_redirect', function() {
    echo 'OK';
});

add_filter('the_content', function(string $content) {
    $content .= 'OK';
    
    return $content;
});