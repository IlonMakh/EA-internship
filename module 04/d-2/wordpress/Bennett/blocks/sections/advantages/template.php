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

<section class="advantages">
        <div class="container">
          <div class="row">
            <div class="col-12 col-xxl-12 col-xl-12 col-md-10">
              <h2 class="advantages__title">The Advanced Commitment</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-xxl-4 col-xl-6 col-md-10">
              <div class="advantages__card">
                <img
                  class="advantages__card-img"
                  src="<?= get_theme_file_uri( '/dist/images/projectImages/healthcare.svg' ) ?>" 
                  alt="healthcare"
                />
                <h5 class="advantages__card-title">Patient-Focused Care</h5>
                <p class="text-content text-content_white scroll">
                  Our mission is to help our Texas patients choose the right
                  treatments to achieve their goals, deliver a comfortable and
                  rewarding treatment experience, and restore your confidence by
                  producing consistently dramatic, natural-looking, and stunning
                  results.
                </p>
              </div>
            </div>
            <div class="col-12 col-xxl-4 col-xl-6 col-md-10">
              <div class="advantages__card">
                <img
                  class="advantages__card-img"
                  src="<?= get_theme_file_uri( '/dist/images/projectImages/protection.svg' ) ?>" 
                  alt="protection"
                />
                <h5 class="advantages__card-title">
                  Fully Accredited Surgical Center
                </h5>
                <p class="text-content text-content_white scroll">
                  Our private, state-of-the-art surgical suite meets the highest
                  safety standards in the industry and is accredited by the
                  American Association for Accreditation of Ambulatory Surgery
                  Facilities (AAAASF).
                </p>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 col-md-10">
              <div class="advantages__card">
                <img
                  class="advantages__card-img"
                  src="<?= get_theme_file_uri( '/dist/images/projectImages/technology.svg' ) ?>" 
                  alt="technology"
                />
                <h5 class="advantages__card-title">Advanced Technology</h5>
                <p class="text-content text-content_white scroll">
                  Our surgeon uses the latest technology and state-of-the-art
                  techniques so we can produce the best possible results. From
                  the full range of breast implant options to non-invasive
                  injectable treatments, we can enhance your appearance safely
                  and comfortably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

