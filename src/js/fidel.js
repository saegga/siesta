$(document).ready(function () {

    $('.mmenu_btn').on('click', function () {
       if(!$(this).hasClass("open")){
           $(this).addClass("open");
       }else{
           $(this).removeClass("open");
       }
    });

    $('.down_arr').on('click', function () {
        $('body, html').animate({
            scrollTop: $('.menu_section').offset().top
        }, 600)
    });

    $('.specmenu_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        variableWidth: true,
        appendArrows: $('.specmenu_slider-arrows'),
        prevArrow: '<button id="prev" type="button" class="left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
    });

    $('.about_facts-slider').slick({
        // variableWidth: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        asNavFor: '.about_facts-photos',
        appendArrows: $('.slider_facts-arrow'),
        prevArrow: '<button id="prev" type="button" class="left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
    });

    $('.about_facts-photos').slick({
        slidesToShow: 1,
        arrows: false,
    });
    $('.news_slider').slick({
        // infinite: true,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
        customPaging : function(slider, i) {
            return '<button class="tab"></button>';
        },
    });

    $('.reviews_slider').slick({
        prevArrow: '<button id="prev" type="button" class="left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
    });
});