<?php

define('FM_VERSION', '0.1.1');
define('FM_PATH', dirname(__FILE__));
define('FM_URI', home_url(str_replace(ABSPATH, '', FM_PATH)));

require_once(FM_PATH . '/inc/bootstrap.php');

fm();
