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
    $('.character-body').readmore({
        speed: 75,
        moreLink: '<a href="#" class="character-other"><i class="icon-down-open"></i>Показать все характеристики</a>',
        lessLink: '<a href="#" class="character-other"><i class="icon-up-open"></i>Показать все характеристики</a>',
        collapsedHeight: 400
    });
    $('.desc-body').readmore({
        speed: 75,
        moreLink: '<a href="#" class="character-other"><i class="icon-down-open"></i>Подробние</a>',
        lessLink: '<a href="#" class="character-other"><i class="icon-up-open"></i>Подробние</a>',
        collapsedHeight: 165
    });
    $('.feedback-body').readmore({
        speed: 75,
        moreLink: '<a href="#" class="character-other"><i class="icon-down-open"></i>Показать все отзывы</a>',
        lessLink: '<a href="#" class="character-other"><i class="icon-up-open"></i>Показать все отзывы</a>',
        collapsedHeight: 823
    });
});
