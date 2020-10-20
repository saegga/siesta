$(document).ready(function () {

    $('.mmenu_btn').on('click', function () {

        if(!$(this).hasClass("open")){
           $(this).addClass("open");
       }else{
           $(this).removeClass("open");
       }

        if(!$(".m_whatsup").hasClass("open")){
            $(".m_whatsup").addClass("open");
        }else{
            $(".m_whatsup").removeClass("open");
        }

        if(!$(".mmenu_layer").hasClass("open")){
            $(".mmenu_layer").addClass("open");
            $(".mmenu_layer").css({'height' : $('.mmenu_call_us').offset().top + $('.mmenu_call_us').height() + 45 + 'px'});
        }else{
            $(".mmenu_layer").removeClass("open");
            $(".mmenu_layer").css({'height' : '0px'});
        }
    });

    $('.specmenu_current ').on('click', function () {
        if(!$(this).parent(".specmenu_items").hasClass("open")){
            $(this).parent(".specmenu_items").addClass("open");
        }else{
            $(this).parent(".specmenu_items").removeClass("open");
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
        nextArrow: '<button id="next" type="button" class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    variableWidth: true,
                    slidesToScroll: 1,
                    slidesToShow: 3,
                }
            }
        ]
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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    variableWidth: true,
                    slidesToScroll: 1,
                    slidesToShow: 3,
                }
            }
        ]
    });

    var reviewSlider =  $('.reviews_slider');

    if(reviewSlider.length){
        var currentSlideReview;
        var slidesCountReview;

        var sliderCountReview = function(slick, currentIndex) {
            currentSlideReview = slick.slickCurrentSlide() + 1;
            slidesCountReview = slick.slideCount;

            // $(sliderCounter).text(currentSlide + '/' +slidesCount)
        };

        reviewSlider.on('init', function (event, slick) {
            sliderCountReview(slick);
        });

        reviewSlider.on('afterChange', function(event, slick, currentSlide) {
            sliderCountReview(slick, currentSlide);
        });
    }

    reviewSlider.slick({
        appendArrows: $('.slider_reviews-arrow'),
        prevArrow: '<button id="prev" type="button" class="left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
    });

    $(window).on('resize load', function () {

        var w = $('.instagram_item').width();
        $('.instagram_item').css({'height' : w});

        var w1 = $('.mob_open_insta').width();
        $('.mob_open_insta').css({'height' : w1});
    });
});