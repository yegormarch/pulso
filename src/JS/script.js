$(document).ready(function(){
  $('.carousel__inner').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src = "icons/chevron_left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src = "icons/chevron_right.png"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }]
  });
});