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

<section class="faq">
        <div class="container">
          <h4 class="faq__title">FAQ</h4>
          <div class="row">
            <div class="col-12 col-xxl-6">
              <ul
                class="faq__questions nav nav-pills nav-fill"
                id="tab"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="faq__questions-item active"
                    href="#pane-q1"
                    id="tab-q1"
                    data-bs-toggle="tab"
                    role="tab"
                    >Lorem ipsum dolor sit amet, consectetur?</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="faq__questions-item"
                    href="#pane-q2"
                    id="tab-q2"
                    data-bs-toggle="tab"
                    role="tab"
                    >Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.?</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="faq__questions-item"
                    href="#pane-q3"
                    id="tab-q3"
                    data-bs-toggle="tab"
                    role="tab"
                    >Nibh in maecenas interdum magna?</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="faq__questions-item"
                    href="#pane-q4"
                    id="tab-q4"
                    data-bs-toggle="tab"
                    role="tab"
                    >Facilisis volutpat porttitor lorem orci?</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="faq__questions-item"
                    href="#pane-q5"
                    id="tab-q5"
                    data-bs-toggle="tab"
                    role="tab"
                    >Diam non eu sagittis ipsum, donec dictumst sagittis nunc,
                    viverra amet, cursus?</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-12 col-xxl-6">
              <div id="content" class="tab-content" role="tablist">
                <div
                  id="pane-q1"
                  class="tab-pane fade show active"
                  role="tabpanel"
                  aria-labelledby="tab-q1"
                >
                  <div class="collapse-question" role="tab" id="heading-q1">
                      <a
                        class="faq__questions-item"
                        data-bs-toggle="collapse"
                        href="#collapse-q1"
                        aria-expanded="true"
                        aria-controls="collapse-q1"
                      >
                        Lorem ipsum dolor sit amet, consectetur?
                      </a>
                  </div>
                  <div
                    id="collapse-q1"
                    class="faq__answer collapse show"
                    data-bs-parent="#content"
                    role="tabpanel"
                    aria-labelledby="heading-q1"
                  >
                  <p class="faq__answer-question">
                    Lorem ipsum dolor sit amet, consectetur?
                  </p>
                  <div class="faq__answer-answer">
                    <div class="text-content text-content_white scroll">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </p>
                    </div>
                  </div>
                  </div>
                </div>

                <div
                  id="pane-q2"
                  class="tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="tab-q2"
                >
                  <div class="collapse-question" role="tab" id="heading-q2">
                      <a
                        class="collapsed faq__questions-item"
                        data-bs-toggle="collapse"
                        href="#collapse-q2"
                        aria-expanded="false"
                        aria-controls="collapse-q2"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.?
                      </a>
                  </div>
                  <div
                    id="collapse-q2"
                    class="faq__answer collapse"
                    data-bs-parent="#content"
                    role="tabpanel"
                    aria-labelledby="heading-q2"
                  >
                  <p class="faq__answer-question">2</p>
                  <div class="faq__answer-answer">
                    <div class="text-content text-content_white scroll">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy te0s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </p>
                    </div>
                  </div>
                  </div>
                </div>

                <div
                  id="pane-q3"
                  class="tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="tab-q3"
                >
                  <div class="collapse-question" role="tab" id="heading-q3">
                      <a
                      class="collapsed faq__questions-item"
                        data-bs-toggle="collapse"
                        href="#collapse-q3"
                        aria-expanded="false"
                        aria-controls="collapse-q3"
                      >
                        Nibh in maecenas interdum magna?
                      </a>
                  </div>
                  <div
                    id="collapse-q3"
                    class="faq__answer collapse"
                    role="tabpanel"
                    data-bs-parent="#content"
                    aria-labelledby="heading-q3"
                  >
                  <p class="faq__answer-question">3</p>
                  <div class="faq__answer-answer">
                    <div class="text-content text-content_white scroll">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took
                      </p>
                    </div>
                  </div>
                  </div>
                </div>

                <div
                  id="pane-q4"
                  class="tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="tab-q4"
                >
                  <div class="collapse-question" role="tab" id="heading-q4">
                      <a
                      class="collapsed faq__questions-item"
                        data-bs-toggle="collapse"
                        href="#collapse-q4"
                        aria-expanded="false"
                        aria-controls="collapse-q4"
                      >
                        Facilisis volutpat porttitor lorem orci?
                      </a>
                  </div>
                  <div
                    id="collapse-q4"
                    class="faq__answer collapse"
                    role="tabpanel"
                    data-bs-parent="#content"
                    aria-labelledby="heading-q4"
                  >
                  <p class="faq__answer-question">4</p>
                  <div class="faq__answer-answer">
                    <div class="text-content text-content_white scroll">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and type
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </p>
                    </div>
                  </div>
                  </div>
                </div>

                <div
                  id="pane-q5"
                  class="tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="tab-q5"
                >
                  <div class="collapse-question" role="tab" id="heading-q5">
                      <a
                      class="collapsed faq__questions-item"
                        data-bs-toggle="collapse"
                        href="#collapse-q5"
                        aria-expanded="false"
                        aria-controls="collapse-q5"
                      >
                        Diam non eu sagittis ipsum, donec dictumst sagittis
                        nunc, viverra amet, cursus?
                      </a>
                  </div>
                  <div
                    id="collapse-q5"
                    class="faq__answer collapse"
                    role="tabpanel"
                    data-bs-parent="#content"
                    aria-labelledby="heading-q5"
                  >
                  <p class="faq__answer-question">5</p>
                  <div class="faq__answer-answer">
                    <div class="text-content text-content_white scroll">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting indut ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
