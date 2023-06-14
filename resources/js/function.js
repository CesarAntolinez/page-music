// Skills progress circle dynamic
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