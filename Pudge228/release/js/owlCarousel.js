function selfRandom(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  	mouseDrag: false,
  	touchDrag: false,
  	items: 5,
    startPosition: selfRandom(1,13),
  	loop:true,
  	autoplay: true, // Автоматически переходить к следующему кадру
    autoplayTimeout: 2000, // Через какое время переходить к следующему слайду
    autoplaySpeed: 2000, // Как долго длится переход к следующему слайду
    slideTransition: 'linear', // Чтобы переход был ровным
  	responsive: {
  		0: {
  			items: 1
  		},

  		480: {
  			items: 2
  		},

  		600: {
  			items: 3
  		},

  		1024: {
  			items: 4
  		},

  		1600: {
  			items: 5
  		}
  	}
  	// autoplaySpeed:1000
  });
});