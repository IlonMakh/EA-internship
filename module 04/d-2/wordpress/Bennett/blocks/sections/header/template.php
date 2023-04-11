<?php
/**
 * Block Header.
 *
 * @var array $block The block settings and attributes.
 * @var string $content The block inner HTML (empty).
 * @var bool $is_preview True during AJAX preview.
 * @var $post_id (int|string) The post ID this block is saved to.
 */

/**
 * Block preview image
 */
if ( isset( $block['data']['block_preview_images'] ) ) {
	hm_get_template_part_with_params( 'fragments/block-preview-image', ['block' => $block] );
	return;
}
?>

<header class="header">
      <button class="header__burger">
        <img src="<?= get_theme_file_uri( '/dist/images/projectImages/burger.svg' ) ?>" alt="menu">
      </button>
      <a class="header__link" href="javascript:void(0);"><img class="header__logo" src="<?= get_theme_file_uri( '/dist/images/projectImages/logo.png' ) ?>" alt="logo" /></a>
      <nav class="header__nav">
        <a class="header__nav-logo" href="javascript:void(0)"><img class="header__nav-img" src="<?= get_theme_file_uri( '/dist/images/projectImages/logo.png' ) ?>" alt="logo" /></a>
        <ul class="scroll">
          <li><a class="header__nav-link active" href="javascript:void(0)">Home</a></li>
          <li><a class="header__nav-link" href="javascript:void(0)">About us</a></li>
          <li><a class="header__nav-link" href="javascript:void(0)">Locations</a></li>
          <li><a class="header__nav-link" href="javascript:void(0)">Home</a></li>
          <li><a class="header__nav-link" href="javascript:void(0)">About us</a></li>
          <li><a class="header__nav-link" href="javascript:void(0)">Locations</a></li>
          <li><a class="header__nav-link" href="javascript:void(0)">Home</a></li>
          <li><a class="header__nav-link" href="javascript:void(0)">About us</a></li>
          <li><a class="header__nav-link" href="javascript:void(0)">Locations</a></li>
          <li><a class="header__nav-link" href="javascript:void(0)">About us</a></li>
          <li><a class="header__nav-link" href="javascript:void(0)">Locations</a></li>
        </ul>
        <a class="header__nav-phone" href="tel:(404) 737-5803">(404) 737-5803</a>
      </nav>
      <div class="header__phone">
        <a class="header__phone-link" href="tel:(404) 737-5803"><span class="phone-num">(404) 737-5803</span><img class="phone-img" src="<?= get_theme_file_uri( '/dist/images/projectImages/phone.svg' ) ?>" alt="phone"></a>
      </div>
      <button class="header__close"><img src="<?= get_theme_file_uri( '/dist/images/projectImages/close.svg' ) ?>" alt="close"></button>
    </header>