$(document).ready(function(){$(".specmenu_slider").slick({slidesToShow:3,slidesToScroll:3,infinite:!0,variableWidth:!0,appendArrows:$(".specmenu_slider-arrows"),prevArrow:'<button id="prev" type="button" class="left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',nextArrow:'<button id="next" type="button" class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'}),$(".about_facts-slider").slick({slidesToScroll:1,slidesToShow:1,asNavFor:".about_facts-photos",appendArrows:$(".slider_facts-arrow"),prevArrow:'<button id="prev" type="button" class="left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',nextArrow:'<button id="next" type="button" class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'}),$(".about_facts-photos").slick({slidesToShow:1,arrows:!1}),$(".news_slider").slick({variableWidth:!0,slidesToShow:4,slidesToScroll:4,dots:!0,arrows:!1,customPaging:function(t,r){return'<button class="tab"></button>'}}),$(".reviews_slider").slick({prevArrow:'<button id="prev" type="button" class="left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',nextArrow:'<button id="next" type="button" class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'})});