// // ================= Button scroll top =================
// $(document).ready(function(){"use strict";
// 	var progressPath = document.querySelector('.btn-scroll-top path');
// 	var pathLength = progressPath.getTotalLength();
// 	progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
// 	progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
// 	progressPath.style.strokeDashoffset = pathLength;
// 	progressPath.getBoundingClientRect();
// 	progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
// 	var updateProgress = function () {
// 		var scroll = $(window).scrollTop();
// 		var height = $(document).height() - $(window).height();
// 		var progress = pathLength - (scroll * pathLength / height);
// 		progressPath.style.strokeDashoffset = progress;
// 	}
// 	updateProgress();
// 	$(window).scroll(updateProgress);	
// 	var offset = 50;
// 	var duration = 550;
// 	jQuery(window).on('scroll', function() {
// 		if (jQuery(this).scrollTop() > offset) {
// 			jQuery('.btn-scroll-top').addClass('actived-scroll');
// 		} else {
// 			jQuery('.btn-scroll-top').removeClass('actived-scroll');
// 		}
// 	});				
// 	jQuery('.btn-scroll-top').on('click', function(event) {
// 		event.preventDefault();
// 		jQuery('html, body').animate({scrollTop: 0}, duration);
// 		return false;
// 	})
// });
	



const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false;


// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;
  
  // toggle a11y attributes and active class
  menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
  menu.hidden = !isMenuOpen;
  nav.classList.toggle('nav--open');
});


// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener('keydown', e => {
  // abort if menu isn't open or modifier keys are pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }
  
  // listen for tab press and move focus
  // if we're on either end of the navigation
  const menuLinks = menu.querySelectorAll('.nav__link');
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});