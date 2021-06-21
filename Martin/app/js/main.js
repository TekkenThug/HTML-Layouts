$(function () {
  $('.slider__inner').slick({
    nextArrow: "<img class='slider__arrows slider__next-arrow' src='images/icons/slide-arrow.svg'>",
    prevArrow: "<img class='slider__arrows slider__prev-arrow' src='images/icons/slide-arrow.svg'>",
    dots: true,
    infinite: false
  });

  $('.blog__slider-inner').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: "<img class='blog__arrows blog__next-arrow' src='images/icons/slide-arrow.svg'>",
    prevArrow: "<img class='blog__arrows blog__prev-arrow' src='images/icons/slide-arrow.svg'>",
    variableWidth: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: true
        }
      }
    ]
  })

  $(window).on('scroll', function () {
    if ($(document).scrollTop() > 100) {
      $(".header-menu").addClass("scrolling");
    } else {
      $(".header-menu").removeClass("scrolling");
    }
  });

  $('img.img-svg').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
      var $svg = $(data).find('svg');
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });

  $('.header-menu__list-btn').on('click', function (e) {
    e.preventDefault();
    var menu = $('.header-menu__hidden');
    menu.addClass('open');
  })

  $('.close-btn').on('click', function () {
    var menu = $('.header-menu__hidden');
    menu.removeClass('open');
  })

  $('.tab__btn').on('click', function () {
    var parent = $(this).parent('.tab');
    if (parent.hasClass('active')) {
      parent.removeClass('active');
      parent.find('ul').slideUp()
    } else {
      parent.addClass('active');
      parent.find('ul').slideDown();
    }
  });

  $('.person__logo-wrapper').slick({
    responsive: [
      {
        breakpoint: 99999,
        settings: "unslick"
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: false,
          variableWidth: true,
        }
      }
    ]
  });

  $('.care__item-img-box').hover(
    function() {
      $(this).find('+ .care__item-content').addClass('hover');
    },
    function() {
      $(this).find('+ .care__item-content').removeClass('hover');
    },
  )

});