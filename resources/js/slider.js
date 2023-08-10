// Banner top
var swiper = new Swiper(".mySwiperBanner", {
    effect: "fade",
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: true,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
});

// Services
var swiper = new Swiper(".swiper-services", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: false,
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
        800: {
            slidesPerView: 2,
        },
        1275: {
            slidesPerView: 3,
        },
        1750: {
            slidesPerView: 4,
        },
        2200: {
            slidesPerView: 5,
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
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
        1700: {
            slidesPerView: 4,
        },
        1920: {
            slidesPerView: 5,
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
        400: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    }
});

// Clientes
var swiper = new Swiper(".swiper-professionals", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
});