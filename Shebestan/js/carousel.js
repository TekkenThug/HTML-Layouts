$(function(){
	$('.slider__wrapper').slick({
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 4300,
		nextArrow: '<img class="slider-arrow arrow-right" src="img/icons/arrowRight.png">',
		prevArrow: '<img class="slider-arrow" src="img/icons/arrowLeft.png">',
	});
})