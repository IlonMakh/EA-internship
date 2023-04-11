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

<section class="promo">
  <div class="background-img">
    <img src="<?= get_theme_file_uri( '/dist/images/projectImages/promo.png' ) ?>" >
  </div>
        <div class="container">
          <div class="row">
            <div class="col col-12">
              <div class="promo__info">
                <h1 class="promo__info-title">State of the art surgery center</h1>
                <p class="text-content text-content_white">Achieve your most beautiful self</p>
                <p class="promo__info-subtitle">Schedule complimentary Cosmetic Consultation</p>
                <button class="promo__info-btn" type="button" data-toggle="modal" data-target="#staticBackdrop">Schedule now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

