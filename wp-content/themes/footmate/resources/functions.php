<?php // phpcs:ignore PSR1.Files.SideEffects.FoundWithSymbols

define('FM_VERSION', '0.1.1');
define('FM_ROOT', str_replace(ABSPATH, '/', dirname(__FILE__, 2)));
define('FM_PATH', dirname(__FILE__, 2));
define('FM_URI', home_url(FM_ROOT));
define('FM_HMR_HOST', 'http://localhost:5173');
define('FM_HMR_URI', FM_HMR_HOST . FM_ROOT);
define('FM_ASSETS_PATH', FM_PATH . '/dist');
define('FM_ASSETS_URI', FM_URI . '/dist');

require_once(FM_PATH . '/inc/bootstrap.php');
