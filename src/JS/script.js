
// const slider = tns ({
//   container: '.carousel__inner',
//   items: 1,
//   slideBy: 'page',
//   autoplay: false, 
//   controls: false,
//   nav: false
// });

// document.querySelector('.prev').onclick = function () {
//   slider.goTo('prev');
// };

// document.querySelector('.next').onclick = function () {
//   slider.goTo('next');
// };







// Initializes a carousel using the Slick library on any element with the class "carousel__inner". It configures the carousel to be infinite, have a slide speed of 300ms, show only one slide at a time, and use custom prev/next arrows. It also sets a responsive breakpoint at 992px where the arrows will be hidden and dots will be shown.
$(document).ready(function(){
  $('.carousel__inner').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    prevArrow: '<button type="button" class="slick-prev"><img src = "icons/chevron_left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src = "icons/chevron_right.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });



  // Sets up an event listener on elements with the class "catalog__tabs" so that when one is clicked, it becomes active and the corresponding content is displayed.
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});



// Defines a function "toggleSlide" that takes in an item, and when that item is clicked, it toggles the active class on the associated elements.
  function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__promo').eq(i).toggleClass('catalog-item__promo_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__link-back');


});





