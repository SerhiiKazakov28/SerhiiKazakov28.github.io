$(document).ready(function(){
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
  $('.slider-nav').slick({
    dots:true,
    variableWidth:true,
    asNavFor:".slider-main",
    centerMode: true,
    focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows:false,
          dots: false
        }
      }
    ]
  });
  $(".slider-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    fade:true,
    asNavFor:".slider-nav"
  });
  $(".slider-maps").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    fade:true,
    centerMode: true,
    focusOnSelect: true
  });
  $(".slider-main-popup").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    dots:false,
    fade:false,
    centerMode: false,
    focusOnSelect: true
  });
});

let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');

openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => { 
      e.preventDefault();
      popupBg.classList.add('active');
      popup.classList.add('active');
  })
});

document.addEventListener('click', (e) => {
  if(e.target === popupBg) {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
  }
});