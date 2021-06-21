$(document).ready(function () {
   // Portfolio
   $('.btn[filter]').click(function () {
      if ($(this).attr('filter') == 'all') {
         if ($(this).attr('val') == 'off') {
            $('.btn[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.btn[filter]').removeClass('active');
            $(this).addClass('active');
            $('.items > div').show(300);
         }
      } else if ($(this).attr('val') == 'off') {
         $('.btn[filter]').attr('val', 'off');
         $(this).attr('val', 'on');
         $('.btn[filter]').removeClass('active');
         $(this).addClass('active');
         $('.items > div').hide(300);
         var filter = $(this).attr('filter');
         $('.items > div[filter=' + filter + ']').show(300);
      }

   })


   //Slider
   $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      dots: true,
      dotsClass: 'dots-style',
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               infinite: true,
               dots: true
            }
         },

         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         },
      ]
   });

   //Menu
   $('ul.menu a[href^="#"]').click(function () {
      var target = $(this).attr('href');
      $('html, body').animate({
         scrollTop: $(target).offset().top

      }, 500);
      return false;
   })

   //toTop Button
   $(window).scroll(function () {
      if ($(this).scrollTop() != 0)
         $('#toTop').fadeIn();
      else
         $('#toTop').fadeOut();
   });
   $('#toTop').click(function () {
      $('body, html').animate({
         scrollTop: 0

      }, 600);
   })

   //Mobile menu
   $('.menu__icon').click(function(){
      $('nav').slideToggle(500);
      $('.menu__icon > i').toggleClass('fa-bars fa-times');
   })


});

