Number.isNaN = Number.isNaN || function(value) {
    return typeof value === 'number' && isNaN(value);
}

$(function() {

    jQuery("a.anchor").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });

    var swiper = new Swiper('.brands-slider', {
        slidesPerView: 6,
        slidesPerColumn: 2,
        spaceBetween: 25,
        pagination: {
            el: '.swiper-pagination-brands',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-brands-next',
            prevEl: '.swiper-button-brands-prev',
        },
    });

    var swiperworks = new Swiper('.works-slider', {
        slidesPerColumn: 1,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination-works',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-works-next',
            prevEl: '.swiper-button-works-prev',
        },
    });

    $('.price-btns a').click(function() {
        $('.price-btns').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.elems-bug').find('.elem-bug').hide();
        $('#' + $(this).data('switch')).show();
    });
})