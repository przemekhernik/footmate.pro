<?php

define('FM_VERSION', '0.1.1');
define('FM_PATH', dirname(__FILE__));
define('FM_URI', home_url(str_replace(ABSPATH, '', FM_PATH)));
define('FM_ASSETS_PATH', FM_PATH . '/dist');
define('FM_ASSETS_URI', FM_URI . '/dist');
define('FM_RESOURCES_PATH', FM_PATH . '/resources');
define('FM_RESOURCES_URI', FM_URI . '/resources');

require_once(FM_PATH . '/inc/bootstrap.php');

fm();
