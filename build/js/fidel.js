$(document).ready(function(){$(".mmenu_btn").on("click",function(){$(this).hasClass("open")?$(this).removeClass("open"):$(this).addClass("open"),$(".m_whatsup").hasClass("open")?$(".m_whatsup").removeClass("open"):$(".m_whatsup").addClass("open"),$(".mmenu_layer").hasClass("open")?($(".mmenu_layer").removeClass("open"),$(".mmenu_layer").css({height:"0px"})):($(".mmenu_layer").addClass("open"),$(".mmenu_layer").css({height:$(".mmenu_call_us").offset().top+$(".mmenu_call_us").height()+45+"px"}))}),$(".horiz_menu_current").on("click",function(){var e,t;$(this).parent(".horiz_menu").hasClass("open")?(e=this,setTimeout(function(){$(e).parent(".horiz_menu").removeClass("open")},450),t=$(".horiz_menu").find("ul"),$(t).animate({height:"0"},50),$(t).css({"padding-top":"0"})):(e=this,setTimeout(function(){$(e).parent(".horiz_menu").addClass("open")},50),function(){var e=$(".horiz_menu").find("ul");$(e).css({height:"auto"});var t=$(e).outerHeight();$(e).css({height:"0"}),$(e).css({"padding-top":"10px"}),$(e).animate({height:t},50)}())}),$(".specmenu_current ").on("click",function(){$(this).parent(".specmenu_items").hasClass("open")?$(this).parent(".specmenu_items").removeClass("open"):$(this).parent(".specmenu_items").addClass("open")}),$(".down_arr").on("click",function(){$("body, html").animate({scrollTop:$(".menu_section").offset().top+50},300)}),$(".vacancy_item").on("click",function(){var e;$this=this,$($this).hasClass("open")?(setTimeout(function(){$($this).removeClass("open")},250),$($this).find(".vacancy_text").animate({height:"0"})):($($this).addClass("open"),$($this).find(".vacancy_text").css({height:"100%"}),e=$($this).find(".vacancy_text").outerHeight(),$($this).find(".vacancy_text").css({height:"0"}),$($this).find(".vacancy_text").animate({height:e}))});var s,i,n,e=$(".specmenu_slider");e.length&&(n=function(e,t){s=e.slickCurrentSlide()+1,i=e.slideCount,$(".count_specmenu_slider").text(s+" / "+i)},e.on("init",function(e,t){$(".specmenu_slider-arrows .left-arrow").after("<div class='count_specmenu_slider'></div>"),n(t)}),e.on("afterChange",function(e,t,s){n(t)})),e.slick({slidesToShow:3,slidesToScroll:3,infinite:!0,variableWidth:!0,appendArrows:$(".specmenu_slider-arrows"),prevArrow:'<button id="prev" type="button" class="left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',nextArrow:'<button id="next" type="button" class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',responsive:[{breakpoint:768,settings:{infinite:!0,variableWidth:!0,slidesToScroll:1,slidesToShow:3}}]}),$(".about_facts-slider").slick({slidesToScroll:1,slidesToShow:1,asNavFor:".about_facts-photos",appendArrows:$(".slider_facts-arrow"),prevArrow:'<button id="prev" type="button" class="left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',nextArrow:'<button id="next" type="button" class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'}),$(".about_facts-photos").slick({slidesToShow:1,arrows:!1}),$(".news_slider").slick({variableWidth:!0,slidesToShow:4,slidesToScroll:4,dots:!0,arrows:!1,customPaging:function(e,t){return'<button class="tab"></button>'},responsive:[{breakpoint:768,settings:{infinite:!0,variableWidth:!0,slidesToScroll:1,slidesToShow:3}},{breakpoint:1024,settings:{infinite:!0,variableWidth:!0,slidesToScroll:1,slidesToShow:2}}]});var o,a,r,e=$(".reviews_slider");e.length&&(r=function(e,t){o=e.slickCurrentSlide()+1,a=e.slideCount,$(".count_review_slider").text(o+" / "+a)},e.on("init",function(e,t){$(".slider_reviews-arrow .left-arrow").after("<div class='count_review_slider'></div>"),r(t)}),e.on("afterChange",function(e,t,s){r(t)})),e.slick({appendArrows:$(".slider_reviews-arrow"),prevArrow:'<button id="prev" type="button" class="left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',nextArrow:'<button id="next" type="button" class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'}),$(window).on("resize load",function(){var e=$(".instagram_item").width();$(".instagram_item").css({height:e});e=$(".mob_open_insta").width();$(".mob_open_insta").css({height:e})})});