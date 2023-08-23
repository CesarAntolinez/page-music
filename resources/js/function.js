// AOS Animation
AOS.init({
    duration: 1500,
    once: false
});

// Button fixed - Scroll Top 
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.btn__scroll-top')
        .classList.add('animation__btn-scroll-top');
    }
    else{
        document.querySelector('.btn__scroll-top')
        .classList.remove('animation__btn-scroll-top');
    }
}
document.querySelector('.btn__scroll-top')
    .addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }); 
});

$(".service-description-zs").on('click', function () {
    var div = $(this);

    if (div.hasClass("txt-three-lines")) {
        div.removeClass("txt-three-lines").addClass("show-txt-three-lines");
    } else {
        div.removeClass("show-txt-three-lines").addClass("txt-three-lines");
    }
});


$(".oculto").hide();
$(".ver-mas").click(function(){
    var self = $(this);
    self.next().toggle();
    /////
    if(self.val()=="Ver menos"){
        self.val("Ver más");
        $(self).removeClass("icon-chevronUp");
        $(self).addClass('icon-chevronDown');
    } else {
        $(self).val ("Ver menos");
        $(self).removeClass('icon-chevronDown');
        $(self).addClass("icon-chevronUp");
    }
});