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

<section class="lorem">
        <div class="container">
          <div class="row">
            <div class="col col-12 col-xxl-6 col-xl-12">
              <div class="lorem__img">
                <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_dgw6g3d8.json"  background="transparent"  speed="1"  style="width: 680px; height: 480px;"  loop autoplay></lottie-player>
              </div>
            </div>
            <div class="col col-12 col-xxl-6 col-xl-12">
              <div class="lorem__info">
                <h4 class="lorem__info-title">Lorem ipsum</h4>
                <p class="text-content">
                  The plastic surgeons of Advanced Aesthetics have years of
                  experience performing facial cosmetic surgery in Atlanta. They
                  are renowned throughout the state for their expertise. If you
                  would like to take years off your appearance and start looking
                  <a class="lorem__info-underlined" href="javascript:void(0);">some very very very very very very very very very very very very long link</a>
                  and feeling youthful again, please feel free to browse through
                  our list of procedures to see how we can help you realize your
                  dream.
                </p>
                <div class="collapse text-content" id="collapseLorem">
                  <p class="lorem__info-text">
                    The plastic surgeons of Advanced Aesthetics have years of
                    experience performing facial cosmetic surgery in Atlanta.
                    They are renowned throughout the state for their expertise.
                    If you would like to take years off your appearance and
                    start looking and feeling youthful again, please feel free
                    to browse through our list of procedures to see how we can
                    help you realize your dream.
                  </p>
                  <p class="lorem__info-text">
                    The plastic surgeons of Advanced Aesthetics have years of
                    experience performing facial cosmetic surgery in Atlanta.
                    They are renowned throughout the state for their expertise.
                    If you would like to take years off your appearance and
                    start looking and feeling youthful again, please feel free
                    to browse through our list of procedures to see how we can
                    help you realize your dream.
                  </p>
                </div>
                <button
                  class="lorem__info-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLorem"
                  aria-expanded="false"
                  aria-controls="collapseLorem"
                >
                learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

