<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

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
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'car_dealer' );

/** Database username */
define( 'DB_USER', 'car_dealer' );

/** Database password */
define( 'DB_PASSWORD', ')/fM(BQaW.laFWYC' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

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
define( 'AUTH_KEY',         'w=n.&_bjLY!~$%$t)1$%[=j^5dHjtN6cAY4jSX:b0{3_E6=S/MHnd7 qUE~ZU-8q' );
define( 'SECURE_AUTH_KEY',  've~vC(q{t#b*GssZ1ik;q+S5WOrWW50`_).nTVF&,^sB[iAoT2<tL25Dg`4f=4LM' );
define( 'LOGGED_IN_KEY',    'Q!S*72[wUy+_+)^nV eb= `IJ0%JHPhqqJJuskzt{uS_s+&f(T*0{[/n_6:ol,ZR' );
define( 'NONCE_KEY',        ';oIG%SE4tC5@,2(xa&EdqWV]A)/ loT]i.Yw_zaH02+%~Qw<5`}-tFUD miT{d@>' );
define( 'AUTH_SALT',        'Y?AY0^IciD^MY}20XWD5x,<KKMaHV{BlWr!^dGq%iJ9o77@LVdQVRQhFLB,pc0+e' );
define( 'SECURE_AUTH_SALT', 'TNCcJ9rWLeycMe=H($gHn^^HKyYP_Bb$KAea ,, vy<,wA5qW0|<i1@h[PTX_PkX' );
define( 'LOGGED_IN_SALT',   'k4~D+qSb~=J_oW$a eYmpbl`(-imPbOaV)m*iY!fDXGYsB s8*=(/]9;c/iF{(rH' );
define( 'NONCE_SALT',       'gLRO)~7J}IW&Kd/kd2=S]bq}U(4,]Mvo64fg6+@Ov+PCXR3@z_B<g) I,@vMG6}K' );

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
