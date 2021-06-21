$(function(){
   $('.header__slider').slick({
      slidesToShow: '4',
      draggable: false,
      autoplay: true,
      speed: 700,
      arrows: false,
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1
           }
         }
       ]
   });

   wow = new WOW(
      {
         boxClass:     'wow',      // default
         animateClass: 'animated', // default
         offset:       250,          // default
         mobile:       true,       // default
         live:         true     // default
      })
   wow.init();

   $('.slick-slide:odd').addClass('wow fadeIn');
   $('.slick-slide:even').addClass('wow fadeIn').attr('data-wow-delay', '0.5s');


   $('.tech__item').addClass('wow fadeIn');

   var iconDelayAnimation = (function(){
      var len = $('.tech__list').children('.tech__item').length;
      var count = 0;
      $('.tech__item').attr('data-wow-duration', '0.6s');
      for (var i = 0; i < len; i++) {
         $('.tech__item:eq('+i+')').attr('data-wow-delay', count+'s');
         count += 0.2;
      }
   });

   iconDelayAnimation();

   $('.tech__item').on('click', function(){
      var filterValue = $(this).attr('data-filter');
      $('.tech__item').removeClass('active');
      $(this).addClass('active');
      var dn = $('#projects').offset().top;
      $('html, body').animate(
         {
            scrollTop: dn,
         }, 600, "swing"
      );

      // Filter
      $('.projects__item').hide();
      $('.projects__item[data-val*='+filterValue+']').show();
   })


   
   
});