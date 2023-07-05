// AOS Animation
AOS.init({
    duration: 1500,
    once: false
});

// Button fixed - Scroll Top 
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.btn-scroll-top')
        .classList.add('btn-show');
    }
    else{
        document.querySelector('.btn-scroll-top')
        .classList.remove('btn-show');
    }
}
document.querySelector('.btn-scroll-top')
    .addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }); 
});