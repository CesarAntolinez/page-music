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

// Skills
const progText = document.querySelectorAll('.circular-progress-text');
const progress = document.querySelectorAll('.circular-progress-effect');
const progContainer = document.querySelector('.card-content-skill'); 
let bole = false;
window.addEventListener("scroll", function (){
    if (pageYOffset > progContainer.offsetTop - 800 && bole === false) {
        for(let i = 0; i < progText.length; i++) {
            progText[i].innerText = 0;
            count = 0;
            progress[i].style.bottom = "100%";
            progress[i].style.bottom = progText[i].dataset.count - 100 + "%";

            function updateCount() {
                target = parseInt(progText[i].dataset.count);

                if (count < target) {
                    count++;
                    progText[i].innerText = count;
                    setTimeout(updateCount, 50)
                } else  {
                    progText[i].innerText = target + "%";
                }
            }
            
            updateCount();

            bole = true;
        }
    }
});

// ================= Button scroll top =================
$(document).ready(function(){"use strict";
	var progressPath = document.querySelector('.btn-scroll-top path');
	var pathLength = progressPath.getTotalLength();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
	progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	progressPath.style.strokeDashoffset = pathLength;
	progressPath.getBoundingClientRect();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
	var updateProgress = function () {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var progress = pathLength - (scroll * pathLength / height);
		progressPath.style.strokeDashoffset = progress;
	}
	updateProgress();
	$(window).scroll(updateProgress);	
	var offset = 50;
	var duration = 550;
	jQuery(window).on('scroll', function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.btn-scroll-top').addClass('actived-scroll');
		} else {
			jQuery('.btn-scroll-top').removeClass('actived-scroll');
		}
	});				
	jQuery('.btn-scroll-top').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
});