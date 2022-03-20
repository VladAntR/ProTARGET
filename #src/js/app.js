//Slider
import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.image-slider', {
  modules: [Navigation, Pagination],
  //Arrows
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev'
  },
  //Height slides
  autoHeight:true,
  //Show slides
  slidesPerView:3.6,
  //Disconnection sliders if he doesn't need
  watchOverflow:true,
  //Retreat between slide
  spaceBetween:15,
  //Active slide in the center
  centeredSlides: true,
  //Beginner slide
  initialSlide:1,
  //Loop
  loop:true,

  //Adaptive
  breakpoints:{
    320:{
      slidesPerView:1,
    },
    720:{
      slidesPerView:2.6,
    },
    960:{
      slidesPerView:3.6,
    },

  },

});
 

//Parallax
const parallaxElemLeft = document.querySelector('.images_left_ball');
const parallaxElemRight = document.querySelector('.images_right_ball');

document.addEventListener("mousemove", function(e) { moveBackground(e); });

function moveBackground(e){
  let offsetX = (e.clientX / window.innerWidth * 30) - 15;
  let offsetY = (e.clientY / window.innerHeight * 10) - 5;
  parallaxElemLeft.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");
  parallaxElemRight.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");  
}

//Button activates more reasons work with us
const btnMore = document.getElementById('btn_more');
const more  = document.getElementById('more');

btnMore.addEventListener('click', () =>{
  more.classList.toggle('active');
})

//Effects on buttons in the messengers

const btnMessengers = document.querySelectorAll('#messenger__btn');

btnMessengers.forEach(element => {
    element.addEventListener('click', ()=>{
      btnMessengers.forEach(elem =>{
        elem.classList.remove('active');  
      });
      element.classList.add('active');
    });
});

//Stages of cooperations active block

const cooperationItems = document.querySelectorAll('#cooperationItem');
const imgActive = document.querySelectorAll('.body__img_point');
const btnActive = document.querySelectorAll('.info__button')


for(let i=0; i < cooperationItems.length; i++){
  cooperationItems[i].addEventListener('click', audit);
}

function audit(){
  let index = this.dataset.index;
  let n = imgActive.length;

  for(let i=0; i<n; i++){
    deletActiveClass(imgActive[i]);
    deletActiveClass(btnActive[i]);
  }

  addClassActive(imgActive[index]);
  addClassActive(btnActive[index]);
  
}

function deletActiveClass(elemen){
  elemen.classList.remove('active');
}

function addClassActive(elemen){
  elemen.classList.add('active');
}


//Result our work button more
const lookMore = document.getElementById('button_more');
const containerCards = document.querySelector('.card__wrapper')

lookMore.addEventListener('click', ()=>{
    containerCards.classList.toggle('active')
    auditCard();

    
    console.log(  )
})

function auditCard(){
  for(let i=0; i<containerCards.classList.length; i++){
    if(containerCards.classList[i] === 'active'){
      lookMore.innerHTML='Hidden';
    }else{
      lookMore.innerHTML='Look more';
    }
  }

}
