import * as fn from "./modules/functions.js";
import WOW from "wow.js";
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider.js";
import "bootstrap";

addEventListener("DOMContentLoaded", () => {
	new WOW().init();
	fn.stickyHeader();
	fn.closeMenuHandler();
	fn.scrollToTop();

	tns({
		container: ".slider-photo",
		autoplay: false,
		autoplayButtonOutput: false,
		mouseDrag: true,
		loop: false,
		gutter: 15,
		nav: true,
		navPosition: "bottom",
		controls: true,
		controlsContainer: "#controls-slider-photo",
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1024: {
				items: 3,
			},
			1200: {
				items: 4,
			},
		},
	});

	tns({
		container: ".slider-members",
		autoplay: false,
		autoplayButtonOutput: false,
		mouseDrag: true,
		loop: false,
		gutter: 15,
		nav: true,
		navPosition: "bottom",
		controls: true,
		controlsContainer: "#controls-slider-members",
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1024: {
				items: 3,
			},
			1200: {
				items: 4,
			},
		},
	});

	tns({
		container: ".slider-leaders",
		autoplay: false,
		autoplayButtonOutput: false,
		mouseDrag: true,
		loop: false,
		gutter: 15,
		nav: true,
		navPosition: "bottom",
		controls: true,
		controlsContainer: "#controls-slider-leaders",
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1024: {
				items: 3,
			},
			1200: {
				items: 4,
			},
		},
	});
});

// import "./modules/cookies.js";
// import "./modules/fancyapps.js";
