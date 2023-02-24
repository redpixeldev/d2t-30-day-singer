import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import collapse from "@alpinejs/collapse";

Alpine.plugin(focus);
Alpine.plugin(collapse);

Alpine.store("mobileMenu", {
	isOpen: false,

	toggle() {
		this.isOpen = !this.isOpen;
	},

	close() {
		this.isOpen = false;
	},

	open() {
		this.isOpen = true;
	},
});

window.Alpine = Alpine;

Alpine.start();

$(document).ready(function () {
	$(".video-slider").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});

	$(".review-slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	});
});
