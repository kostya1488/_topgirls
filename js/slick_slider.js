$(document).ready(function() {
    $slick_slider = $('.advantages_slider');
    settings_slider = {
        variableWidth: true,
        infinite: false,
        focusOnSelect: true,
        arrows: false,
    }

    slick_on_mobile($slick_slider, settings_slider);
})

function slick_on_mobile(slider, settings) {
    $(window).on('load resize', function() {
        if ($(window).width() > 992) {
            if (slider.hasClass('slick-initialized')) {
                slider.slick('unslick');
            }
            return
        }
        if (!slider.hasClass('slick-initialized')) {
            return slider.slick(settings);
        }
    });
};