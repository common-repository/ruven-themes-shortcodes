<?php







/* Initialize Shortcodes
============================================================ */

if(!class_exists('rtsc_add_mce_button')):

  class rtsc_add_mce_button {



    /* Constructor
    ------------------------------------------------------------ */

    function __construct()
    {
      add_action('admin_head', array(&$this, 'add_mce_button'));
      add_action('admin_enqueue_scripts', array(&$this, 'enqueue_styles'));
    }



    /* Add MCE Button
    ------------------------------------------------------------ */

    function add_mce_button()
    {
      // Check user permissions
      if(!current_user_can('edit_posts') && !current_user_can('edit_pages')) {
        return;
      }

      // Check if WYSIWYG editor is enabled
      if('true' == get_user_option('rich_editing')) {
        add_filter('mce_external_plugins', array(&$this, 'add_mce_plugin'));
        add_filter('mce_buttons', array(&$this, 'register_mce_button'));
      }
    }



    /* Add MCE Plugin
    ------------------------------------------------------------ */

    function add_mce_plugin($plugin_array)
    {
      $plugin_array['rtsc_mce_button'] = plugins_url('tinymce.js', __FILE__);
      return $plugin_array;
    }



    /* Register MCE Button
    ------------------------------------------------------------ */

    function register_mce_button($buttons)
    {
      array_push($buttons, 'rtsc_mce_button');
      return $buttons;
    }



    /* Enqueue Styles
    ------------------------------------------------------------ */

    function enqueue_styles()
    {
      wp_enqueue_style('rtsc-tinymce', plugins_url('tinymce.css', __FILE__));
    }



  } // END class rtsc_add_mce_button







  /* Invoke Shortcodes
  ============================================================ */

  new rtsc_add_mce_button();







endif;