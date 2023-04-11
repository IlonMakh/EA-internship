<?php
/**
 * Block Promo.
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

<section class="gallery">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="gallery__content">
                <div class="gallery__item gallery__item_1">
                  <div class="background-img">
                    <img src="<?= get_theme_file_uri( '/dist/images/projectImages/center.jpg' ) ?>">
                  </div>
                  <button class="gallery__item-link" href="#gallery-modal" data-bs-toggle="modal" data-bs-target="#gallery-modal">
                    <span class="gallery__item-title">Our center</span>
                    <span class="gallery__item-subtitle">5 photos</span>
                  </button>
                </div>
                <div class="gallery__item gallery__item_2">
                <div class="background-img">
                    <img src="<?= get_theme_file_uri( '/dist/images/projectImages/lorem.jpg' ) ?>">
                  </div>
                  <a class="gallery__item-link" href="#gallery-modal" data-bs-toggle="modal" data-bs-target="#gallery-modal">
                    <span class="gallery__item-title">Procedures you can find in our medical center</span>
                    <span class="gallery__item-subtitle">5 photos</span>
                  </a>
                </div>
                <div class="gallery__item gallery__item_3">
                <div class="background-img">
                    <img src="<?= get_theme_file_uri( '/dist/images/projectImages/spa.jpg' ) ?>">
                  </div>
                  <a class="gallery__item-link" href="#gallery-modal" data-bs-toggle="modal" data-bs-target="#gallery-modal">
                    <span class="gallery__item-title">Spa</span>
                    <span class="gallery__item-subtitle">5 photos</span>
                  </a>
                </div>
                <div class="gallery__item gallery__item_4">
                <div class="background-img">
                    <img src="<?= get_theme_file_uri( '/dist/images/projectImages/pills.jpg' ) ?>">
                  </div>
                  <a class="gallery__item-link" href="#gallery-modal" data-bs-toggle="modal" data-bs-target="#gallery-modal">
                    <span class="gallery__item-title">Medecines you can buy in our medical center</span>
                    <span class="gallery__item-subtitle">5 photos</span>
                  </a>
                </div>
                <div class="gallery__item gallery__item_5">
                <div class="background-img">
                    <img src="<?= get_theme_file_uri( '/dist/images/projectImages/procedures.jpg' ) ?>">
                  </div>
                  <a class="gallery__item-link" href="#gallery-modal" data-bs-toggle="modal" data-bs-target="#gallery-modal">
                    <span class="gallery__item-title">Cabinets</span>
                    <span class="gallery__item-subtitle">5 photos</span>
                  </a>
                </div>
                <div class="gallery__item gallery__item_6">
                <div class="background-img">
                    <img src="<?= get_theme_file_uri( '/dist/images/projectImages/procedures2.jpg' ) ?>">
                  </div>
                  <a class="gallery__item-link" href="#gallery-modal" data-bs-toggle="modal" data-bs-target="#gallery-modal">
                    <span class="gallery__item-title">Cosmetology</span>
                    <span class="gallery__item-subtitle">5 photos</span>
                  </a>
                </div>
                <div class="gallery__item gallery__item_7">
                <div class="background-img">
                    <img src="<?= get_theme_file_uri( '/dist/images/projectImages/team.jpg' ) ?>">
                  </div>
                  <a class="gallery__item-link" href="#gallery-modal" data-bs-toggle="modal" data-bs-target="#gallery-modal">
                    <span class="gallery__item-title">Our team</span>
                    <span class="gallery__item-subtitle">5 photos</span>
                  </a>
                </div>
                <div class="gallery__item gallery__item_8">
                <div class="background-img">
                    <img src="<?= get_theme_file_uri( '/dist/images/projectImages/clients.jpg' ) ?>">
                  </div>
                  <a class="gallery__item-link" href="#gallery-modal" data-bs-toggle="modal" data-bs-target="#gallery-modal">
                    <span class="gallery__item-title">Our clients</span>
                    <span class="gallery__item-subtitle">5 photos</span>
                  </a>
                </div>
                <div class="gallery__item gallery__item_9">
                <div class="background-img">
                    <img src="<?= get_theme_file_uri( '/dist/images/projectImages/technology.jpg' ) ?>">
                  </div>
                  <a class="gallery__item-link" href="#gallery-modal" data-bs-toggle="modal" data-bs-target="#gallery-modal">
                    <span class="gallery__item-title">Technologies</span>
                    <span class="gallery__item-subtitle">5 photos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
