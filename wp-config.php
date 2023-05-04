<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'footmate' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', 'utf8mb4_general_ci' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'Rm)2Ym)iX~x234yMt1A<#]>Ae6VRp^P7ku.*cOq8zre^NC^&&^.nPB)N)cvj]9Ia' );
define( 'SECURE_AUTH_KEY',   '?x3)Ssw9L<vpU_f!(/??8Ge~-)U]^QY~cV!7]3p%8*U~%Rv5Nubdd$ihAyYr0H o' );
define( 'LOGGED_IN_KEY',     '(ELB^R2Gx>h4 <UANU 5-lc{Zfqv@h) uY)78 %0}NUEVyE_Z/dgo4>0!^tDL!Vt' );
define( 'NONCE_KEY',         'oV`r9}%O-mOY$;wG_<K~rr3Is:brsqxT]uWGOqZEnE:.a#%$!dkwiD#(&1#WQ[[v' );
define( 'AUTH_SALT',         '+4,`,Ao3w!DcCc!ktHF~.IX$6y?8B9hkyeO(65TwF<M3[jEFqk,:JQVdO;U$vEq ' );
define( 'SECURE_AUTH_SALT',  '.Qe+Epv(2ys,(~y5o|YKsFp9/J?QH7/gCWrjhoEfZk{HSR$r^=BdDC?/9<yTF_ga' );
define( 'LOGGED_IN_SALT',    'w,=Pl3Y1b{(V~UN;f1/0KBLlZCMmanF@B5}a!l@~g3zt^saD96$X|T{pJc.pyrZP' );
define( 'NONCE_SALT',        'HPmQ)II*yUxaef?uD;~OX!a+Cu(Q67[g!~*}dW1xj@cQa)xs^Lji?P~6>t^70z#J' );
define( 'WP_CACHE_KEY_SALT', 'ld(A:nj7p7Hosjif o[]7vBGq,G/xr^P?Zf1(Cjan4,Zd0Su/#JAK$;b$ee7pb%l' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );


/* Add any custom values between this line and the "stop editing" line. */



define( 'WP_DEBUG_DISPLAY', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_ENVIRONMENT_TYPE', 'development' );
define( 'DISALLOW_FILE_EDIT', true );
define( 'WP_AUTO_UPDATE_CORE', true );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
