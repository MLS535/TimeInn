//button go to top
window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 100) {
        document.querySelector('.goBackContainer').classList.add('display');

    }
    else{
        document.querySelector('.goBackContainer').classList.remove('display');
    }
}

function goBack(){
    const buttons = document.querySelectorAll('.goBackContainer');

    buttons.forEach(button => {
        button.addEventListener('click', function(){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
}

window.addEventListener("DOMContentLoaded", function () {
    goBack();
});

//Slide front
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
var slideIndex = 1;
showDivs(slideIndex);
document.querySelector(".prev").addEventListener("click", function (){
    let n = -1;
    showDivs(slideIndex += n)
})

document.querySelector(".next").addEventListener("click", function (){
    let n = 1;
    showDivs(slideIndex += n)
})

function showDivs(n) {
    let i;
    let timer;
    let elementsByClassName = document.getElementsByClassName("mySlides");
    if (n > elementsByClassName.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = elementsByClassName.length
    }
    for (i = 0; i < elementsByClassName.length; i++) {
        elementsByClassName[i].style.display = "none";
    }
    elementsByClassName[slideIndex-1].style.display = "block";
}
setInterval(showDivs, )





// setInterval(function() {
//     for (var i = 0; i < slides.length; i++) {
//         slides[i].style.opacity = 0;
//     }
//     current = (current != slides.length - 1) ? current + 1 : 0;
//     slides[current].style.opacity = 1;
// }, 1000);



//
// var isAnimating = false;
//
// function scrollLeftAnimate(elem, unit) {
//
//     if (!elem || isAnimating) {
//         //if element not found / if animating, do not execute slide
//         return;
//     }
//
//     var time = 300; // animation duration in MS, the smaller the faster.
//     var from = elem.scrollLeft; // to continue the frame posistion
//     var aframe = 10; //fraction of frame frequency , set 1 for smoothest  ~ set 10++ for lower FPS (reduce CPU usage)
//     isAnimating = true; //if animating prevent double trigger animation
//
//     var start = new Date().getTime(),
//         timer = setInterval(function () {
//             var step = Math.min(1, (new Date().getTime() - start) / time);
//             elem.scrollLeft = ((step * unit) + from);
//             if (step === 1) {
//                 clearInterval(timer);
//                 isAnimating = false;
//             }
//         }, aframe);
// }
//
//
//
// function initDealCarrousel(dealCarrouselID) {
//     var target = document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox");
//     var cardOutterWidth;
//     var maxCarrouselScroll;
//
//     function updateUpaCarrouselInfo() {
//         cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .va-card").offsetWidth; //you can define how far the scroll
//         maxCarrouselScroll = (document.querySelectorAll("#" + dealCarrouselID + " .va-card").length *
//             cardOutterWidth) - document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox")
//             .clientWidth;
//     }
//
//     document.querySelector("#" + dealCarrouselID + " .deals-scroll-left").addEventListener("click",
//         function () {
//             updateUpaCarrouselInfo(); //in case window resized, will get new info
//             if (target.scrollLeft > 0) {
//                 scrollLeftAnimate(target, -cardOutterWidth * 2);
//             }
//         }
//     );
//
//     document.querySelector("#" + dealCarrouselID + " .deals-scroll-right").addEventListener("click",
//         function () {
//             updateUpaCarrouselInfo(); //in case window resized, will get new info
//             if (target.scrollLeft < maxCarrouselScroll) {
//                 scrollLeftAnimate(target, cardOutterWidth * 2);
//             }
//         }
//     );
// }
// // Initiate the container with ID
// initDealCarrousel('va_container'); //carrousel ID

