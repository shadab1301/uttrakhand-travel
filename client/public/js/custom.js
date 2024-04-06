jQuery(document).ready(function($) {
    $('.loop').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        slideSpeed : 4000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    });
    $('.nonloop').owlCarousel({
        center: true,
        items: 3,
        loop: false,
        margin: 10,
        responsive: {
            600: {
                items: 3
            }
        }
    });
});
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })
})
$(document).ready(function() {
    $('.loop').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    })
})
var btt = document.getElementById('back-to-top'),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos;

window.addEventListener('scroll', function(event) {
    scrollPos = body.scrollTop || docElem.scrollTop;

    btt.className = (scrollPos > offset) ? 'visible' : '';
});
$(".filter-icon").click(function() {
    $(".filter-sec").show();
});

$(".cancel-btn").click(function() {
    $(".filter-sec").hide();
})

$(window).scroll(function() {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 500) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

$(function() {
    $(".tab-btns li, .view-detail-modal li, .home-tab-btns li").on("click", function(e) { // See here, i have our selector set to "li", so this jQuery object will grab all li tags on the page
        $(this).addClass("active").siblings().removeClass("active");
    });
})
$(document).ready(function() {
    new WOW().init();
});
$(document).ready(function(){
    $("#hotel_travller_search, #travller_search").on("click", function(){
        $(".room_boxcls").toggle()
    });

});
$(document).ready(function(){
    $('.down_count-cls1').click(function(e){
        var button_classes, value = +$('.counter1').val();
        button_classes = $(e.currentTarget).prop('class');
        if(button_classes.indexOf('up_count') !== -1){
            value = (value) + 1;
        } else {
            value = (value) - 1;
        }
        value = value < 0 ? 0 : value;
        $('.counter1').val(value);
    });
    $('.counter1, .counter2, .counter3').click(function(){
        $(this).focus().select();
    });
});
$(document).ready(function(){
    $('.down_count-cls2').click(function(e){
        var button_classes, value = +$('.counter2').val();
        button_classes = $(e.currentTarget).prop('class');
        if(button_classes.indexOf('up_count') !== -1){
            value = (value) + 1;
        } else {
            value = (value) - 1;
        }
        value = value < 0 ? 0 : value;
        $('.counter2').val(value);
    });
    $('.counter2').click(function(){
        $(this).focus().select();
    });
});
$(document).ready(function(){
    $('.down_count-cls3').click(function(e){
        var button_classes, value = +$('.counter3').val();
        button_classes = $(e.currentTarget).prop('class');
        if(button_classes.indexOf('up_count') !== -1){
            value = (value) + 1;
        } else {
            value = (value) - 1;
        }
        value = value < 0 ? 0 : value;
        $('.counter3').val(value);
    });
    $('.counter3').click(function(){
        $(this).focus().select();
    });
});
$( function() {
    $( "#datepicker, #datepicker_return, #StartDate, #Start_DOB, #Start-Date, #Start_Date," +
    " #enquiry-dob, #Departure-Date, #Departure_dob, #enquire_date-list, #leave-date, #dt-enquire_date, #travel_date" ).datepicker();
} );

$(window).scroll(function() {
    var sticky = $('.sticky-form'),
        scroll = $(window).scrollTop();

    if (scroll >= 500) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

