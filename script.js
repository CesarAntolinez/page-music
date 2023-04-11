var swiper = new Swiper(".mySwiper", {
	autoplay: {
	  delay: 3000,
	  disableOnInteraction: false,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	slidesPerView: 1,
 
	breakpoints: {
		// when window width is >= 768px
		400: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		// when window width is >= 1400px
		// 1400: {
		//     slidesPerView: 3,
		//     spaceBetween: 24,
		// }
	}
});
