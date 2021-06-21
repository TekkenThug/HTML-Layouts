$(document).ready(function () {
   // Слайдер товаров
   var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      spaceBetween: 100,

      // If we need pagination
      pagination: {
         el: '.swiper-pagination',
         type: 'fraction',
      },

      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
         el: '.swiper-scrollbar',
      }

   })

   // Слайдер для миниатюр в товаре
   $('.slider-thumbnails li').click(function () {
      $('.slider-thumbnails li').removeClass('thumbnail_active');
      var image = $(this).children('img').attr('src');
      $(this).addClass('thumbnail_active');
      $('.slider-main-image img.active').attr('src', image);
   });

   // Переключение разделов описания
   $('.item__menu li').click(function () {
      var section = $(this).attr('data-section');
      $('.item__menu li').removeClass('active');
      $(this).addClass('active');
      $('.item__info p[data-section]').removeClass('active');
      $('.item__info p[data-section=' + section + ']').addClass('active');
   })

   // Слайдер для членов команды 
   var swiper = new Swiper('.our-team__slider', {

      slidesPerView: 4,
      freeMode: true,
      fadeEffect: {
         crossFade: true
      },

      navigation: {
         nextEl: '.team-button-next',
         prevEl: '.team-button-prev',
      },

      breakpoints: {
         
         996: {
           slidesPerView: 4,
         },

         768: {
            slidesPerView: 3,
         },

         572: {
            slidesPerView: 2,
         },

         300: {
            slidesPerView: 1,
         }
       }
   });

   // Кнопка бургер
   $('.burger-btn i').click(function () {
      $('nav').slideToggle(500);
      $('.burger-btn i').toggleClass('fa-bars fa-times');
   })
});