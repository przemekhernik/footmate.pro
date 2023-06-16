<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php wp_head(); ?>

    <style>
      body { max-width: 1024px; margin: auto; }
      p { margin: 0 0 1.375rem 0; }
      ul { padding: 0 0 0 20px }
      .app { display: flex; }
      .app__content { flex-basis: 75%; max-width: 75%; padding: 20px; }
      .app__sidebar { flex-basis: 25%; max-width: 25%; padding: 20px; }
    </style>
  </head>

  <body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <?php do_action('get_header'); ?>

    <div class="app">
      <div class="app__content">
        <?php the_content() ?>
      </div>

      <div class="app__sidebar">
        <?php do_action('get_sidebar'); ?>
      </div>
    </div>

    <?php do_action('get_footer'); ?>
    <?php wp_footer(); ?>
  </body>
</html>
