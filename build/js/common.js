

//toggling active state on wishlist-add-button
$('.wishlist-add').on('click', function () {
    $(this).toggleClass('is-active')
});
//closing card banner
$('.card__close').on('click', function(){
    $('.card').animate({
        left: '-100'
    });
});



//toggling active state on options-bar buttons
$('.sort-row').on('click', function () {
    $(this).siblings().removeClass('is-active').end().addClass('is-active');
});

$('.sort-list').on('click', function(){
    $(this).siblings().removeClass('is-active').end().addClass('is-active');
});




//toggling tabs
var tab = $('.tabs__tab');
$(tab).on('click', function () {
    $(tab).removeClass('is-active');
    $(this).toggleClass('is-active');
});