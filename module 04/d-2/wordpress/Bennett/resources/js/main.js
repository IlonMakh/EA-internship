/**
 * Internal Dependencies
 */
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/collapse";
import "./modules/hide-preloader";
import "./modules/horizontal-scroll";
import "https://unpkg.com/simplebar@latest/dist/simplebar.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
import hideFocusOnDesktop from "./modules/hide-focus-on-desktop";
import modalVideoLogic from "./modules/modal-video-logic";
import modalYoutubeVideoLogic from "./modules/modal-youtube-video-logic";
import updateStyleVariables from "./modules/resize-dependent";

const admin = function() {
	setTimeout(() => {
		updateStyleVariables();
	}, 2000);
}

const front = function() {
	const $body = $('body');

	$body.removeClass('scroll-off');

	updateStyleVariables();
	modalVideoLogic();
	modalYoutubeVideoLogic();

	// This code block always will be in the end!
	hideFocusOnDesktop();
}


$(function () {
	if ( $('body').hasClass('wp-admin') || $('body').hasClass('block-editor-iframe__body') )
		admin();
	else
		front();
});

const initMap = () => {}
