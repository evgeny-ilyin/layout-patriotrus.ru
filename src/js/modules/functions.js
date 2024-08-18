/* Проверка поддержки webp браузером */
/* export function isWebp() {
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	testWebP(function (support) {
		if (support == true) {
			document.querySelector("body").classList.add("webp");
		} else {
			document.querySelector("body").classList.add("no-webp");
		}
	});
}
*/

export function stickyHeader() {
	const header = document.querySelector(".navbar-area");

	let handleScroll = () => {
		if (window.scrollY > 0) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	};
	window.addEventListener("scroll", handleScroll);
	handleScroll();
}

/* export function isTouchDevice() {
	const touchClass = "is-touch";
	["load", "resize"].forEach((evt) =>
		window.addEventListener(evt, () => {
			let isTouch = false;
			if ((window.PointerEvent && "maxTouchPoints" in navigator) || (window.PointerEvent && "msMaxTouchPoints" in navigator)) {
				// if Pointer Events are supported, just check maxTouchPoints
				if (navigator.maxTouchPoints > 0) {
					isTouch = true;
				}
			} else {
				// no Pointer Events...
				if (window.matchMedia && window.matchMedia("(any-pointer:coarse)").matches) {
					// check for any-pointer:coarse which mostly means touchscreen
					isTouch = true;
				} else if (window.TouchEvent || "ontouchstart" in window) {
					// last resort - check for exposed touch events API / event handler
					isTouch = true;
				}
			}
			document.body.classList[isTouch ? "add" : "remove"](touchClass);
		})
	);
}
*/

/* export function closeMenuHandler() {
	const menuToggler = document.getElementById("menu-toggle"),
		menuWrapper = document.querySelector(".menu-wrapper"),
		linkClassName = "nav__link";
	if (!menuToggler || !menuWrapper) return;
	document.addEventListener("click", (e) => {
		console.log(e.target);
		if (menuToggler.checked) {
			if (!menuWrapper.contains(e.target) || e.target.classList.contains(linkClassName)) {
				menuToggler.click();
			}
		}
	});
} */

export function closeMenuHandler() {
	let menuToggler = document.querySelector(".mobile-menu-btn");
	menuToggler.addEventListener("click", function () {
		menuToggler.classList.toggle("active");
	});
}

export function scrollToTop() {
	const toTopBtn = document.getElementById("scrollToTop"),
		toTopBtnClass = "is-visible";

	function scrollFunction() {
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			toTopBtn.classList.add(toTopBtnClass);
		} else {
			toTopBtn.classList.remove(toTopBtnClass);
		}
	}

	function toTop() {
		document.body.scrollTop = 0; // Safari
		document.documentElement.scrollTop = 0;
	}

	window.onscroll = function () {
		scrollFunction();
	};

	document.addEventListener("click", (e) => {
		if (e.target === toTopBtn) toTop();
	});
}
