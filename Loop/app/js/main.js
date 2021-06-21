$(function () {
  /* Поиск по каталогу */
  $(".header__search-field input").on("input", function () {
    const inputField = $(this);
    const inputValue = $(this).val().toLowerCase();
    const productsList = document.querySelector("#search-items");
    const products = productsList.querySelectorAll("li");

    if (inputValue.trim()) {
      manipulateList(true);

      let count = 0;

      products.forEach(product => {
        let a = product.querySelector("a");
        a = a.innerHTML.toLowerCase();

        if (a.indexOf(inputValue) > -1) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
          count++;
        }
      });

      if (products.length == count) {
        manipulateList(false)
      }
    } else {
      products.forEach(product => {
        product.style.display = "none";
        manipulateList(false);
      })
    };

    function manipulateList(showing) {
      if (showing) {
        productsList.style.display = "block";
        $(inputField).addClass("active");
      } else {
        productsList.style.display = "none";
        $(inputField).removeClass("active");
      }
    }
  });


  /* Слайдер для баннера на главной */
  $(".banner__slider").slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: "<button class='slider-arrow right'></button>",
    prevArrow: "<button class='slider-arrow left'></button>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  });

  /* Слайдер для витрин */
  $(".showcase__slider").slick({
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: "<button class='slider-arrow right'></button>",
    prevArrow: "<button class='slider-arrow left'></button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          autoplay: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 2,
          autoplay: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          autoplay: true
        }
      }
    ]
  });

  /* Слайдер для партнеров */
  $(".partners__row:not(.reverse)").slick({
    infinite: true,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    variableWidth: true,
    
  });

  $(".partners__row.reverse").slick({
    infinite: true,
    pauseOnHover: false,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    arrows: false,
    variableWidth: true,
    draggable: false,
    rtl: true,
  });

  /* Скролл наверх */
  $(".arrow-to-top").on("click", function (e) {
    e.preventDefault();
    $("body,html").animate({ scrollTop: 0 }, 400);
  });

  /* Сортировка товаров */
  $(".catalog__header-filter-item").on("click", function (e) {
    if (!$(this).hasClass("active")) {
      $(`.${$(e.target).attr("class")}`).removeClass("active");
      $(this).addClass("active");
    }
  });

  /* Слайдеры для страницы товара */
  $(".item__showcase-slider .thumb").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    focusOnSelect: true,
    asNavFor: ".main-photo",
    nextArrow: "<button class='slider-arrow-item bottom'></button>",
    prevArrow: "<button class='slider-arrow-item top'></button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          vertical: false
        }
      }
    ]
  });

  $(".item__showcase-slider .main-photo").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".item__showcase-slider .thumb",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          nextArrow: "<button class='slider-arrow right'></button>",
          prevArrow: "<button class='slider-arrow left'></button>",
        }
      }
    ]
  });

  /* Больше/меньше в корзине товаров */
  $(".less, .more").on("click", function () {
    let inputField = $(this).parent().find("input[type='number']");

    if ($(this).hasClass("less") && +inputField.val() - 1 >= 1) {
      inputField.val(+inputField.val() - 1);
    } else if ($(this).hasClass("more")) {
      inputField.val(+inputField.val() + 1);
    }
  });

  /* Поп-апы */
  $(".open-popup-link").magnificPopup({
    type: "inline",
    midClick: true,
    fixedContentPos: false,
    fixedBgPos: false
  });
});
