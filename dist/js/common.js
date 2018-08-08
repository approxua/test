$(function () {
    $('.product-slider1').slick({
        slidesToShow: 5,
        prevArrow: '<i class="icon-left-open arrow">',
        nextArrow: '<i class="icon-right-open arrow">'
    });
    $('.other-goods-slider').slick({
        slidesToShow: 5,
        prevArrow: '<i class="icon-left-open arrow">',
        nextArrow: '<i class="icon-right-open arrow">'
    });
    $('.desc-body').readmore({
        speed: 75,
        lessLink: '<a href="#">Read less</a>'
    });
});
