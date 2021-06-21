$(function () {
  // Слайдер с преимуществами
  $('.func__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    nextArrow: '<button class="slick-arrow slick-next"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"></button>',
  });
  //


  // Слайдер c отзывами
  $('.hist__slider-wrapper').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    speed: 500,
    // fade: true,
    // cssEase: 'linear',
    arrows: true,
    autoplay: true,
    nextArrow: '<button class="slick-arrow slick-next"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });
  //


  // Табы в FAQ
  $('.tabs__item').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).find('.tabs__content').slideUp();
    } else {
      $(this).addClass('active');
      $(this).find('.tabs__content').slideDown();
    }
  })
  //


  // Форма фиксированная
  $('.form-btn').on('click', function () {
    $(this).removeClass('animated');
    $(this).toggleClass('active');
    if ($('.form__content').hasClass('active')) {
      $('.form__content').removeClass('active').fadeOut(100, function () {
        $(this).hide();
      });
    } else {
      $('.form__content').addClass('active').fadeIn(100, function () {
        $(this).show();
      });
    }
  });

  $('.form__close-btn').on('click', function() {
    if ($('.form__content').hasClass('active')) {
      $('.form__content').removeClass('active').fadeOut(100, function () {
        $('.form__content').hide();
        $('.form-btn').toggleClass('active');
      });
    } else {
      $('.form__content').addClass('active').fadeIn(100, function () {
        $('.form__content').show();
      });
    }
  })
  //


  // Скролл с навигацией
  $(".header__menu-list, .header__phone, .header__middle, .footer__nav-menu, .footer__logo").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 500);
  });
  //


  // Валидация форм
  $('.promo__form').validate({
    rules: {
      phone: {
        required: true
      },
      email: {
        required: true
      }
    },
    messages: {
      phone: {
        required: 'Пожалуйста, заполните все обязательные поля'
      },
      email: {
        required: 'Пожалуйста, заполните все обязательные поля'
      }

    },

    errorPlacement: function (error, element) {
      var errorBody = $('.error-body');
      errorBody.show();
      errorBody.find('.error').remove();
      error.appendTo(errorBody);
      errorBody.find('.close-btn').on('click', function () {
        errorBody.hide();
        errorBody.find(error).remove();
      })
    }
  });

  $('.tabs__form form').validate({
    rules: {
      phone: {
        required: true
      }
    },
    messages: {
      phone: {
        required: 'Пожалуйста, заполните все обязательные поля'
      }
    },

    errorPlacement: function (error, element) {
      var errorBody = $('.error-body');
      errorBody.show();
      errorBody.find('.error').remove();
      error.appendTo(errorBody);
      errorBody.find('.close-btn').on('click', function () {
        errorBody.hide();
        errorBody.find(error).remove();
      });
      setTimeout(function () { 
        $('.error-body').hide() 
      }, 7000);
    }
  });

  $('.form__content form').validate({
    rules: {
      phone: {
        required: true
      }
    },
    messages: {
      phone: {
        required: 'Пожалуйста, заполните все обязательные поля'
      }
    },

    errorPlacement: function (error) {
      var errorBody = $('.form__content form .form__field.phone').parent();
      error.insertAfter(errorBody);
    }
  });
  //


  // Поля с телефоном
  $(".promo__form .phone").intlTelInput({
    separateDialCode: true,
    initialCountry: "ru",
    customContainer: "promo__tel-country"
  });

  $(".tabs__form .phone").intlTelInput({
    separateDialCode: true,
    initialCountry: "ru",
    customContainer: "tabs__tel-country"
  });
  $(".form__content .phone").intlTelInput({
    separateDialCode: true,
    initialCountry: "ru",
    customContainer: "form__tel-country"
  });
  //

});