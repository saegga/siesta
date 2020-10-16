$(document).ready(function () {

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
        asNavFor: '.about_facts-img',
        appendArrows: $('.slider_facts-arrow'),
        prevArrow: '<button id="prev" type="button" class="left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
    });

    $('.about_facts-img').slick({
        asNavFor: '.about_facts-slider',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // dots: false
    })

});