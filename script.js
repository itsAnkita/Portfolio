$(document).ready(function () {
    $(".line1 span").addClass("animation1");
    $(".line2 span").addClass("animation2");
    $(".line3 span").addClass("animation3");
    $(".line4 span").addClass("animation4");
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 559) {
            $(".header").addClass("active");
        } else {
            if ($(".header").hasClass("active")) {
                $(".header").removeClass("active");
            }
        }
        if ($(window).scrollTop() >= 559) {
            $(".slice-left").addClass("slice-left-animation");
            $(".slice-right").addClass("slice-right-animation");
        }
        if ($(window).scrollTop() >= 1750) {
            $(".gmail").addClass("gmail-animation");
            $(".linkedin").addClass("linkedin-animation");
            $(".github").addClass("github-animation");
            $(".skype").addClass("skype-animation");
        }
    });
    if ($(window).scrollTop() >= 590) {
        if(!$(".header").hasClass("active")){
        $(".header").addClass("active");
        }
        if (!$(".slice-left").hasClass("slice-left-animation")){
           $(".slice-left").addClass("slice-left-animation"); 
           $(".slice-right").addClass("slice-right-animation");
        }
    }
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});