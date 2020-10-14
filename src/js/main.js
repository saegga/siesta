$(document).ready(function(){

    $('.about_facts-slider').slick({
        // variableWidth: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        appendArrows: $('.slider_facts-arrow'),
        prevArrow: '<button id="prev" type="button" class="left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
    });

    $('.gallery_pubs-slider').slick({
        infinite: true,
        variableWidth: true,
        arrows: false,
        dots: true,
        customPaging : function(slider, i) {
            return '<button class="tab"></button>';
        },
    });
    $('.reviews_slider').slick({
        prevArrow: '<button id="prev" type="button" class="left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
    });

    var topSliderActive = false;

    function checkTopSlider() {
        if($(window).width() < 768){
            if(topSliderActive === false){
                $('.bar_item_slider').slick({
                    dots: false,
                    arrows: false,
                    slidesToShow: 2,
                    infinite: true,
                    variableWidth: true
                });
                topSliderActive = true;
            }
        }else{
            if(topSliderActive === true){
                $('.bar_item_slider').slick("unslick");
                topSliderActive = false;
            }
        }
    }

    checkTopSlider();
    $(window).on('resize', function () {
        checkTopSlider()
    })
});