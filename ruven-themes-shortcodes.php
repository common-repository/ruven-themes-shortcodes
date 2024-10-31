<?php
/*
Plugin Name: Ruven Themes: Shortcodes
Description: Extends the functionality of Ruven Themes by adding a shortcode editor.
Version: 1.0
Author: Ruven
Author URI: http://ruventhemes.com/
Author Email: info@ruventhemes.com
*/







/* Initialize Shortcodes
============================================================ */

if(!class_exists('rt_shortcodes')):

  class rt_shortcodes {



    /* Constructor
    ------------------------------------------------------------ */

  	function __construct()
  	{
  	  require_once(plugin_dir_path(__FILE__).'shortcodes/shortcodes.php');
  	  require_once(plugin_dir_path(__FILE__).'tinymce/tinymce.php');

      // Enqueue Scripts and Styles
  	  add_action('wp_enqueue_scripts', array(&$this, 'enqueue_scripts_and_styles'));

      // Load plugin text domain (for translation)
      add_action('plugins_loaded', array($this, 'load_textdomain'));
  	}



    /* Load plugin text domain (for translation)
    ------------------------------------------------------------ */

    function load_textdomain()
    {
      load_plugin_textdomain('ruventhemes', false, dirname(plugin_basename(__FILE__)).'/lang');
    }



    /* Enqueue Scripts and Styles
    ------------------------------------------------------------ */

  	function enqueue_scripts_and_styles()
  	{
    	if(!is_admin()) {
    		wp_enqueue_style('rtsc-shortcodes', plugin_dir_url(__FILE__).'shortcodes/shortcodes.css');
    	}
  	}



  } // END class rt_shortcodes







  /* Invoke Shortcodes
  ============================================================ */

  new rt_shortcodes();







endif;