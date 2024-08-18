import * as fn from "./modules/functions.js";
import WOW from "wow.js";
import "./modules/slider.js";
import "bootstrap";

addEventListener("DOMContentLoaded", () => {
	new WOW().init();
	fn.stickyHeader();
	fn.closeMenuHandler();
	fn.scrollToTop();
});

// import "./modules/cookies.js";
