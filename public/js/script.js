var sliderImage = document.querySelectorAll('.header__gallery .header__image #header__img');
var btnRight = document.querySelector('.header__title-wrap .header__btn-wrap #headerRight');
var btnLeft = document.querySelector('.header__title-wrap .header__btn-wrap #headerLeft');
var i = 0;

btnRight.addEventListener('click', function (){
  activeItemRight();
  activeNumberRight();
})

btnLeft.addEventListener('click', function(){ 
  activeItemLeft();
  activeNumberLeft();
})

function activeItemRight() {
  sliderImage[i].className = '';
  i++;
  if (i >= sliderImage.length) {
    i = 0;
  }
  sliderImage[i].className = 'showed';
}

function activeItemLeft() {
  sliderImage[i].className = '';
  i--;
  if (i < 0) {
    i = sliderImage.length - 1;
  }
  sliderImage[i].className = 'showed';
}

var numbers = document.querySelectorAll('.header__btn-wrap .btn__numbers');
var b = 0;

function activeNumberRight() {
  numbers[b].style.display = 'none'
  b++;
  if (b >= numbers.length) {
    b = 0;
  }
  numbers[b].style.display = 'block'
}

function activeNumberLeft() {
  numbers[b].style.display = 'none'
  b--;
  if (b < 0) {
    b = numbers.length - 1;
  }
  numbers[b].style.display = 'block'
}

