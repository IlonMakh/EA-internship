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

<section class="team">
        <div class="container">
          <div class="row">
            <div class="col-12 col-xxl-8 col-md-8">
              <div class="team__info">
                <h5 class="team__info-suptitle">OUR SURGEONS</h5>
                <h4 class="team__info-title">Who We Are</h4>
                <p class="text-content">
                  We have over 45 years of combined experience working with
                  individuals who wish to enhance their bodies.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-xxl-12">
              <div class="team__cards">
                <div class="team__card">
                  <img
                  class="team__card-img"
                  src="<?= get_theme_file_uri( '/dist/images/projectImages/doctor1.png' ) ?>" 
                  alt="doctor"/>
                  <h5 class="team__card-title">Dr. Edward S. Gronka</h5>
                  <div class="team__card-info">
                    <div class="text-content text-content_white scroll">
                      <h5 class="team__card-info-title">Dr. Edward S. Gronka</h5>
                      <p class="team__card-info-text">
                        Tincidunt eget blandit velit a, ultrices diam. At ut enim,
                        sapien turpis. Augue velit neque elementum dolor aliquam.
                        Tincidunt eget blandit velit a, ultrices diam. At ut enim,
                        sapien turpis. Augue velit neque elementum dolor aliquam.
                        Tincidunt eget blandit velit a, ultrices diam. At ut enim,
                        sapien turpis. Augue velit neque elementum dolor aliquam.
                        Tincidunt eget blandit velit a, ultrices diam. At ut enim,
                        sapien turpis. Augue velit neque elementum dolor aliquam.
                        Tincidunt eget blandit velit a, ultrices diam. At ut enim,
                        sapien turpis. Augue velit neque elementum dolor aliquam.
                        Tincidunt eget blandit velit a, ultrices diam. At ut enim,
                        sapien turpis. Augue velit neque elementum dolor aliquam.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="team__card">
                  <img
                    class="team__card-img"
                    src="<?= get_theme_file_uri( '/dist/images/projectImages/doctor1.png' ) ?>" 
                    alt="doctor"
                  />
                  <h5 class="team__card-title">Dr. Joseph Raniere, Jr.</h5>
                  <div class="team__card-info">
                    <div class="text-content text-content_white scroll">
                      <h5 class="team__card-info-title">Dr. Joseph Raniere, Jr.</h5>
                      <p class="team__card-info-text">
                        Tincidunt eget blandit velit a, ultrices diam. At ut enim,
                        sapien turpis. Augue velit neque elementum dolor aliquam.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="team__card">
                  <img
                    class="team__card-img"
                    src="<?= get_theme_file_uri( '/dist/images/projectImages/doctor2.png' ) ?>" 
                    alt="doctor"
                  />
                  <h5 class="team__card-title">
                    Dr. Joel Melford Stewart,&nbsp;Jr.
                  </h5>
                  <div class="team__card-info">
                    <div class="text-content text-content_white scroll">
                      <h5 class="team__card-info-title">Dr. Joel Melford Stewart,&nbsp;Jr.</h5>
                      <p class="team__card-info-text">
                        Tincidunt eget blandit velit a, ultrices diam. At ut enim,
                        sapien turpis. Augue velit neque elementum dolor aliquam.
                        Tincidunt eget blandit velit a, ultrices diam. At ut enim,
                        sapien turpis. Augue velit neque elementum dolor aliquam.
                        Tincidunt eget blandit velit a, ultrices diam. At ut enim,
                        sapien turpis. Augue velit neque elementum dolor aliquam.
                        Tincidunt eget blandit velit a, ultrices diam. At ut enim,
                        sapien turpis. Augue velit neque elementum dolor aliquam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-xxl-8">
              <div class="team__collapse">
                <button
                  class="team__collapse-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTeam"
                  aria-expanded="false"
                  aria-controls="collapseTeam"
                >
                  Learn more
                </button>
                <div class="collapse" id="collapseTeam">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora, quam officiis maiores, deserunt quis itaque
                    suscipit excepturi vero hic eos, atque numquam incidunt unde
                    sapiente pariatur quae fugiat? Reprehenderit, modi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

