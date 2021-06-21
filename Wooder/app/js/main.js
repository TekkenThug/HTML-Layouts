$(function(){
    new WOW().init();
    // Header slider
    $('.header__slider-wrapper').slick({
        slidesToShow: 1,
        fade: true,
        speed: 900,
        arrows: false,
        dots: true,
        appendDots: $('.header__slider-nav'),
    });
    //

    // Menu btn
    $('.menu-btn').on('click',function(){
        $('.menu__hidden').addClass('active');
    })

    $('.menu-btn-close').on('click', function(){
        $('.menu__hidden').removeClass('active');
    })
    //

    // Slick dots
    $('.slick-dots li').on('click', function(){
        var number = $(this).find('button').html();
        $('#dots-number').html('0'+number);
    });
    //

    //To top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 320)
           $('#toTop').fadeIn(200);
        else
           $('#toTop').fadeOut(200);
     });
     $('#toTop').click(function () {
        $('body, html').animate({
           scrollTop: 0
        }, 600);
     });
     //


     // Top menu scroll
     $("#menu-top").on("click","a", function (event) {
		event.preventDefault(); //опустошим стандартную обработку
		var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
			top = $(id).offset().top; //определим высоту от начала страницы до якоря
	    $('body,html').animate({scrollTop: top}, 600); //сделаем прокрутку за 1 с
	});
    //


})