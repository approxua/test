$(function () {
    $('.product-slider1').slick({
        slidesToShow: 5,
        prevArrow: '<i class="icon-left-open arrow">',
        nextArrow: '<i class="icon-right-open arrow">',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    $('.other-goods-slider').slick({
        slidesToShow: 5,
        prevArrow: '<i class="icon-left-open arrow">',
        nextArrow: '<i class="icon-right-open arrow">',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    $('.article-slider').slick({
        slidesToShow: 1,
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
        collapsedHeight: 766
    });
    $("#desc").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 60;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $('.feedback-buttonns div').on('click', 'a', function (e) {
        e.preventDefault();
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')
            .closest('div.feedback-wrapper')
            .find('div.feedback-body')
            .removeClass('active')
            .readmore('destroy')
            .eq($(this).index())
            .addClass('active')
            .readmore({
                speed: 75,
                moreLink: '<a href="#" class="character-other"><i class="icon-down-open"></i>Показать все отзывы</a>',
                lessLink: '<a href="#" class="character-other"><i class="icon-up-open"></i>Показать все отзывы</a>',
                collapsedHeight: 766
            });
    });
    $('.also-buy').on('click', 'a', function (e) {
        e.preventDefault();
    });
});

