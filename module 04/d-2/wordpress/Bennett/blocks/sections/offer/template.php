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

<section class="offer">
        <div class="container">
          <div class="row">
            <div class="col-12 col-xxl-6">
              <div class="offer__info">
                <h6 class="offer__info-suptitle">OUR PROCEDURES</h6>
                <h5 class="offer__info-title">What We Offer</h5>
                <div class="text-content">
                  <p>
                    Our surgeons include Dr. Paul Feldman, Dr. Edward Gronka,
                    Dr. Joseph Raniere, and Dr. Joel Stewart – all of whom are
                    Board Certified plastic surgeons.
                  </p>
                  <p>
                    Each of our surgeons uphold the highest level of patient
                    care and support the vision to provide the Atlanta community
                    with a facility where they can achieve their aesthetic
                    goals. Many of our procedures can even be combined together
                    in order to help you save money and ease recovery time –
                    we’re here to provide treatment in a way that suits you in
                    the most efficient way possible.
                  </p>
                  <p>
                    We offer a variety of face, breast and body procedures that
                    include:
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-xxl-6">
              <div class="offer__procedures">
                <nav class="offer__procedures-nav" id="proceduresNav">
                  <div class="nav nav_tabs" id="nav-tab" role="tablist">
                    <button
                      class="offer__procedures-nav-btn"
                      id="nav-body-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-body"
                      type="button"
                      role="tab"
                      aria-controls="nav-body"
                      aria-selected="true"
                    >
                      body
                    </button>
                    <button
                      class="offer__procedures-nav-btn"
                      id="nav-breast-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-breast"
                      type="button"
                      role="tab"
                      aria-controls="nav-breast"
                      aria-selected="true"
                    >
                      breast
                    </button>
                    <button
                      class="offer__procedures-nav-btn active"
                      id="nav-face-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-face"
                      type="button"
                      role="tab"
                      aria-controls="nav-face"
                      aria-selected="true"
                    >
                      face
                    </button>
                    <button
                      class="offer__procedures-nav-btn"
                      id="nav-mens-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-mens"
                      type="button"
                      role="tab"
                      aria-controls="nav-mens"
                      aria-selected="true"
                    >
                      mens
                    </button>
                    <button
                      class="offer__procedures-nav-btn"
                      id="nav-body-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-body"
                      type="button"
                      role="tab"
                      aria-controls="nav-body"
                      aria-selected="true"
                    >
                      body2
                    </button>
                    <button
                      class="offer__procedures-nav-btn"
                      id="nav-breast-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-breast"
                      type="button"
                      role="tab"
                      aria-controls="nav-breast"
                      aria-selected="true"
                    >
                      breast2
                    </button>
                    <button
                      class="offer__procedures-nav-btn"
                      id="nav-face-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-face"
                      type="button"
                      role="tab"
                      aria-controls="nav-face"
                      aria-selected="true"
                    >
                      face2
                    </button>
                    <button
                      class="offer__procedures-nav-btn"
                      id="nav-mens-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-mens"
                      type="button"
                      role="tab"
                      aria-controls="nav-mens"
                      aria-selected="true"
                    >
                      mens2
                    </button>
                    <button
                      class="offer__procedures-nav-btn"
                      id="nav-body-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-body"
                      type="button"
                      role="tab"
                      aria-controls="nav-body"
                      aria-selected="true"
                    >
                      body3
                    </button>
                    <button
                      class="offer__procedures-nav-btn"
                      id="nav-breast-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-breast"
                      type="button"
                      role="tab"
                      aria-controls="nav-breast"
                      aria-selected="true"
                    >
                      breast3
                    </button>
                    <button
                      class="offer__procedures-nav-btn"
                      id="nav-face-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-face"
                      type="button"
                      role="tab"
                      aria-controls="nav-face"
                      aria-selected="true"
                    >
                      face3
                    </button>
                    <button
                      class="offer__procedures-nav-btn"
                      id="nav-mens-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-mens"
                      type="button"
                      role="tab"
                      aria-controls="nav-mens"
                      aria-selected="true"
                    >
                      mens3
                    </button>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade"
                    id="nav-body"
                    role="tabpanel"
                    aria-labelledby="nav-body-tab"
                  >
                    <ul>
                      <li>body</li>
                      <li>body</li>
                      <li>body</li>
                      <li>body</li>
                      <li>body</li>
                      <li>body</li>
                      <li>body</li>
                      <li>body</li>
                      <li>body</li>
                      <li>body</li>
                      <li>body</li>
                      <li>body</li>
                    </ul>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-breast"
                    role="tabpanel"
                    aria-labelledby="nav-breast-tab"
                  >
                    <ul>
                      <li>breast</li>
                      <li>breast</li>
                      <li>breast</li>
                      <li>breast</li>
                      <li>breast</li>
                      <li>breast</li>
                      <li>breast</li>
                      <li>breast</li>
                      <li>breast</li>
                      <li>breast</li>
                      <li>breast</li>
                      <li>breast</li>
                    </ul>
                  </div>
                  <div
                    class="tab-pane fade show active"
                    id="nav-face"
                    role="tabpanel"
                    aria-labelledby="nav-face-tab"
                  >
                    <ul>
                      <li>face</li>
                      <li>face</li>
                      <li>face</li>
                      <li>face</li>
                      <li>face</li>
                      <li>face</li>
                      <li>face</li>
                      <li>face</li>
                      <li>face</li>
                      <li>face</li>
                      <li>face</li>
                      <li>face</li>
                    </ul>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-mens"
                    role="tabpanel"
                    aria-labelledby="nav-mens-tab"
                  >
                    <ul>
                      <li>mens</li>
                      <li>mens</li>
                      <li>mens</li>
                      <li>mens</li>
                      <li>mens</li>
                      <li>mens</li>
                      <li>mens</li>
                      <li>mens</li>
                      <li>mens</li>
                      <li>mens</li>
                      <li>mens</li>
                      <li>mens</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

