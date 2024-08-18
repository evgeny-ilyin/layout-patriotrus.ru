import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider.js";

addEventListener("DOMContentLoaded", () => {
	const sliders = document.querySelectorAll(".slider");

	sliders.forEach((slider) => {
		let controls = slider.parentElement.querySelector(".controls");

		tns({
			container: slider,
			autoplay: false,
			autoplayButtonOutput: false,
			mouseDrag: true,
			loop: false,
			gutter: 15,
			nav: true,
			navPosition: "bottom",
			controls: true,
			controlsContainer: controls,
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
});
