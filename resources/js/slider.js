// Banner top
var swiper = new Swiper(".mySwiperBanner", {
    effect: "fade",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
});

// Services
var swiper = new Swiper(".swiper-services", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 8,
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: true,
    },
    loop: true,
    breakpoints: {
            // when window width is >= 600px
            600: {
                slidesPerView: 2,
            },
                // when window width is >= 1024px
                1024: {
                slidesPerView: 3,
            },
        }
}); 

// Swiper Artistas
var swiper = new Swiper(".swiper-artists", {
    slidesPerView: 1,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
        },
        
        1200: {
            slidesPerView: 3,
        },
    },
});

// Clientes
var swiper = new Swiper(".swiper-clients", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        // when window width is >= 400px
        400: {
            slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
        },
    }
});