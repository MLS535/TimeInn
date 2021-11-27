

//button go to top
window.onscroll = function(){
   // console.log(document.documentElement.scrollTop);
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
  overlay();
  checkCookie();
  changeToNew();
  changeToEvent();
});

//Slide front

 var slideIndex = 1;
showDivs(slideIndex);
//Si haces click en el boton del slider se irá a la izquierda
document.querySelector(".prev").addEventListener("click", function (){
    let n = -1;
    showDivs(slideIndex += n)
})
//Si haces click en el boton del slider se irá a la derecha
document.querySelector(".next").addEventListener("click", function (){
    let n = 1;
    showDivs(slideIndex += n)
})
//Función del slider
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



//Slider de las news
const next=document.querySelector('#next')
const prev=document.querySelector('#prev')

function handleScrollNext (direction) {
    const cards = document.querySelector('.card-content')
    cards.scrollLeft=cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth /2 : window.innerWidth -100
}

function handleScrollPrev (direction) {
    const cards = document.querySelector('.card-content')
    cards.scrollLeft=cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth /2 : window.innerWidth -100
}

next.addEventListener('click', handleScrollNext)
prev.addEventListener('click', handleScrollPrev)

//events

const next1=document.querySelector('#next1')
const prev1=document.querySelector('#prev1')

function handleScrollNext1 (direction) {
    const cards = document.querySelector('.event-content')
    cards.scrollLeft=cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth /2 : window.innerWidth -100
}

function handleScrollPrev1 (direction) {
    const cards = document.querySelector('.event-content')
    cards.scrollLeft=cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth /2 : window.innerWidth -100
}

next1.addEventListener('click', handleScrollNext1)
prev1.addEventListener('click', handleScrollPrev1)

//overlay del index

function overlay(){
  const buttons = document.querySelectorAll('.close1');

  buttons.forEach(button => {
    button.addEventListener('click', function(){
      document.querySelector('.overlay2').className = 'overlayOff';
    });
  });
}

//crear una cookie de un formulario
var today = new Date();
var expiry = new Date(today.getTime() + 7 * 24 * 3600 * 1000);

function setCookie(name, value) {
    document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}
//this should set the UserName cookie to the proper value;
function storeValues(form){
    setCookie('cookie',form.email.value);
    return true;
}

// comprobar si hay cookie
function checkCookie() {
    if (document.cookie != "") {
      document.querySelector('.overlay2').className = 'overlayOff';
    }}
    

//selector entre eventos y noticias

function changeToNew(){
  const buttons = document.querySelectorAll('.newsButton');
  buttons.forEach(button => {
    button.addEventListener('click', function(){
      document.querySelector('.eventIndex').className = 'eventIndexOff';
      document.querySelector('.newsOff').className = 'news';
    });
  });
}


function changeToEvent(){
  const buttons = document.querySelectorAll('.eventsButton');
  buttons.forEach(button => {
      button.addEventListener('click', function(){
      document.querySelector('.eventIndexOff').className = 'eventIndex';
      document.querySelector('.news').className = 'newsOff';
    });
  });
}
