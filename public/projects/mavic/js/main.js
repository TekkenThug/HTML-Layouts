$(function(){

    $('.products__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L9 9L1 1"/></svg></button>',
        infinite: false,
    });

    $('.question__item-title').on('click', function(){
        $('.question__item').removeClass('question__item_active');
        $(this).parent().addClass('question__item_active');
    });

    $('#fullpage').fullpage({
		autoScrolling:true,
        scrollHorizontally: true,
        sectionSelector: '.page-section',
        scrollOverflow: true,
        anchors: ['top', 'products', 'features', 'specification', 'questions', 'contacts'],
        menu: '#header-nav'
    });
    
    $('.menu__btn').on('click', function(){
        $(this).toggleClass('menu__btn_active');
        $('.menu__list').toggleClass('menu__list_active');
    });

    $('.menu__list-link').on('click', function(){
        $('.menu__btn').removeClass('menu__btn_active');
        $('.menu__list').removeClass('menu__list_active');
    });

})