$(function () {
   $('.functions__slider-wrapper').slick({
      nextArrow: '<button type="button" class="slick-btn slick-next btn"></button>',
      prevArrow: '<button type="button" class="slick-btn slick-prev btn"></button>'
   });

   $('.header__btn-menu').click(function (event) {
      $('.header__btn-menu, .menu').toggleClass('active');
      $('.header__btn-menu').toggleClass('icon-close icon-bars')
   });
   // $('.header__btn-menu').on('click', function(){
   //    $('.menu .menu__box').slideToggle();
   // });
});

var wow = new WOW(
   {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      callback: function (box) {
         // the callback is fired every time an animation is started
         // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
   }
);
wow.init();