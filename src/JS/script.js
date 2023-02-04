
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
          arrows: true,
          dots: false
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


// Modal
$('[data-modal=consultation]').on('click', function() {
  $('.overlay, #consultation').fadeIn();
});


$('.modal__close').on('click', function() {
  $('.overlay, #consultation, #order, #thanks').fadeOut();
});

$('[data-modal=order]').each(function(i) {
  $(this).on('click', function() {
    $('#order .modal__description').text($('.catalog-item__name').eq(i).text());
    $('.overlay, #order').fadeIn();
});
});


    function validateForms(form){
      $(form).validate({
          rules: {
              name: {
                  required: true,
                  minlength: 2
              },
              phone: "required",
              email: {
                  required: true,
                  email: true
              }
          },
          messages: {
              name: {
                  required: "Пожалуйста, введите свое имя",
                  minlength: jQuery.validator.format("Введите {0} символа!")
                },
              phone: "Пожалуйста, введите свой номер телефона",
              email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
              }
          }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");


    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn();

          $('form').trigger('reset');
      });
      return false;
  });

  // Smooth scroll and pageup
  $(window).scroll(function(){
    if ($(this).scrollTop() > 1500) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href^='#']").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  new WOW().init();

})
