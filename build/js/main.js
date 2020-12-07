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

    var worksThumbs = new Swiper('.works-thumbs', {
        spaceBetween: 36,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    $('.price-bnts a').click(function() {
        $('.price-bnts').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.price-box').find('.price-box-elem').hide();
        $('#' + $(this).data('switch')).show();
    });
})