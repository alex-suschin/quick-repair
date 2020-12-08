Number.isNaN = Number.isNaN || function(value) {
    return typeof value === 'number' && isNaN(value);
}

$(function() {

    jQuery("a.scroll").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 120;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });

    var swiper = new Swiper('.brands-slider', {
        slidesPerView: 4,
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
        breakpoints: {
            992: {
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
            }
        }
    });

    var swiperworks = new Swiper('.works-slider', {
        slidesPerColumn: 1,
        spaceBetween: 70,
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

    $('.services-item').hover(function() {
        $('.services-icons').find('img').hide();
        $('#' + $(this).data('bug')).show();
    });
    $('.services-item').mouseleave(function() {
        $('.services-icons').find('img').hide();
    });
    $(window).scroll(function() {
        if ($(window).width() > '991') {
            if ($(this).scrollTop() > 115) {
                $('.header').addClass('fixed');
                $('body').css('padding-top', '90px');
            } else if ($(this).scrollTop() < 115) {
                $('.header').removeClass('fixed');
                $('body').css('padding-top', '0');
            }
        }
    });
})