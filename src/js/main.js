$(document).ready(function() {

//home page
    //show hide schedule popup
    var schedulePopup = $('.schedule');
    $('.schedule-btn').on('click', function(){
        $(schedulePopup).toggle();
    });

    //close btn closes its parent
    $('.close').on('click', function () {
        $(this).parent().hide();
    });

    //show-hide tel-popup
    var telArrow = $('.tel__arrow'),
        telPopup = $('.tel__popup'),
        telMain = $('.tel__main');

    $(telMain).on('click', function () {
        $(telArrow).toggleClass('is-active');
        $(telPopup).toggle()
    });

    //show-hide callback popup
    var callbackTrigger = $('.tel__callback');
    var callbackPopup = $('.callback');
    //var callbackClose = $('.callback__close');

    $(callbackTrigger).on('click', function(){
        $(callbackPopup).show();
    });
    //$(callbackClose).on('click', function(){
    //    $(callbackPopup).hide();
    //});

    //show-hide dropdown
    $('.menu__trigger_technic').on('click', function () {
        $(this).toggleClass('js-opened');
        $('.dropdown').toggle();
    });
    //initializing slider
    $('.slider__content').slick({
        dots: true,
        arrows: false

    });


    //
    var sliderNext = $('.slider__next');
    var sliderPrev = $('.slider__prev');
    $(sliderNext).on('click', function(){
        $('.slider__content').slick('slickNext') //add navigation behavior
    });
    $(sliderPrev).on('click', function(){
        $('.slider__content').slick('slickPrev') //add navigation behavior
    });


    //initializing brands slider
    $('.brands__content').slick({
        arrows: false,
        slidesToShow: 7
    });
    var brandsNext = $('.brands .next');
    var brandsPrev = $('.brands .prev');
    $(brandsNext).on('click', function(){
        $('.brands__content').slick('slickNext') //add navigation behavior
    });
    $(brandsPrev).on('click', function(){
        $('.brands__content').slick('slickPrev') //add navigation behavior
    });

    //initializing discounts slider
    $('.discounts__content').slick({
        arrows: false,
        slidesToShow: 5

    });
    var discountsNext = $('.discounts .next');
    var discountsPrev = $('.discounts .prev');
    $(discountsNext).on('click', function(){
        $('.discounts__content').slick('slickNext') //add navigation behavior
    });
    $(discountsPrev).on('click', function(){
        $('.discounts__content').slick('slickPrev') //add navigation behavior
    });

    //initializing recomends slider

    $('.recomends__content').slick({
        arrows: false,
        slidesToShow: 5
    });
    var recomendsNext = $('.recomends .next');
    var recomendsPrev = $('.recomends .prev');
    $(recomendsNext).on('click', function(){
        $('.recomends__content').slick('slickNext') //add navigation behavior
    });
    $(recomendsPrev).on('click', function(){
        $('.recomends__content').slick('slickPrev') //add navigation behavior
    });

//result page
    $('.recently__content').slick({
        arrows: false,
        slidesToShow: 5
    });
    var recentlyNext = $('.recently__next');
    var recentlyPrev = $('.recently__prev');
    $(recentlyNext).on('click', function(){
        $('.recently__content').slick('slickNext') //add navigation behavior
    });
    $(recentlyPrev).on('click', function(){
        $('.recently__content').slick('slickPrev') //add navigation behavior
    });


//also
    $('.also-slider__content').slick({
        arrows: false,
        slidesToShow: 5
    });
    
    var alsoNext = $('.also-slider__next');
    var alsoPrev = $('.also-slider__prev');
    $(alsoNext).on('click', function(){
        $('.also-slider__content').slick('slickNext') //add navigation behavior
    });
    $(alsoPrev).on('click', function(){
        $('.also-slider__content').slick('slickPrev') //add navigation behavior
    });

//photo
    $('.photo__slider-content').slick({
        arrows: false,
        slidesToShow: 1
    });

    var photoNext = $('.photo__next');
    var photoPrev = $('.photo__prev');
    $(photoNext).on('click', function(){
        $('.photo__slider-content').slick('slickNext') //add navigation behavior
    });
    $(photoPrev).on('click', function(){
        $('.photo__slider-content').slick('slickPrev') //add navigation behavior
    });

//.main one-click show-hide popup
    $('.box__one-click').on('click', function () {
        $('.one-click').show()
    });
    $('.one-click__submit').on('click', function () {
        $('.one-click__first-step').hide();
        $('.one-click__sec-step').show();
    });

//main source-descr show-hide popup
    $('.box__source-link').on('click', function () {
        $('.source-info').show()
    });







// compare page
    $('.sort-btn').on('click', function () {
        $(this).siblings().removeClass('is-active').end().addClass('is-active')
    });


//toggling tabs

    $('.cashback-trig').on('click', function(){
        $('.cashback').siblings().hide().end().show()
    });

    $('.personal-trig').on('click', function(){
        $('.personal').siblings().hide().end().show()
    });

    $('.history-trig').on('click', function(){
        $('.history').siblings().hide().end().show()
    });

    $('.wishlist-trig').on('click', function(){
        $('.wishlist').siblings().hide().end().show()
    });

    $('.bank-trig').on('click', function(){
        $('.bank').siblings().hide().end().show()
    });
    //prod tabs
    $('.main-trig').on('click', function(){
        $('.main').siblings().hide().end().show()
    });
    $('.item-chars-trig').on('click', function(){
        $('.item-chars').siblings().hide().end().show()
    });
    $('.descr-trig').on('click', function(){
        $('.descr').siblings().hide().end().show()
    });
    $('.recalls-trig').on('click', function(){
        $('.recalls').siblings().hide().end().show()
    });
    $('.all-trig').on('click', function(){
        $('.all').siblings().hide().end().show()
    });
    $('.also-trig').on('click', function(){
        $('.also').siblings().hide().end().show()
    });







//customizing select
$('.bank__month-select').change(function(){
    var selectedText = $('.bank__month-select option:selected').text();
    $('.bank__month-wrap .js-text').text(selectedText);
});

$('.bank__year-select').change(function(){
    var selectedText = $('.bank__year-select option:selected').text();
    $('.bank__year-wrap .js-text').text(selectedText);
});



//toggling history items
    $('.history__head').on('click', function(){
        $(this).find('.history__toggler').toggleClass('is-opened');
       $(this).find('.history__intro').toggleClass('is-active');
        $(this).siblings('.history__item-body').slideToggle().toggleClass('is-visible')
    });



//initializing item-slider
    $('.item-slider__content').slick({
        arrows: false,
        slidesToShow: 4,
        variableWidth: true
    });
    var isNext = $('.item-slider .next-medium');
    var isPrev = $('.item-slider .prev-medium');
    $(isNext).on('click', function(){
        $('.item-slider__content').slick('slickNext') //add navigation behavior
    });
    $(isPrev).on('click', function(){
        $('.item-slider__content').slick('slickPrev') //add navigation behavior
    });



//choose page
    $( "#range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#range" ).slider( "values", 0 ) +
        " - $" + $( "#range" ).slider( "values", 1 ) );







//contacts page
    //init google map
    function initMap() {
        var myLatLng = {lat: 39.6570100, lng: 19.8421400};

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: myLatLng,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            }
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Office'
        });
    }
    initMap();




});