$(document).ready(function() {

    // toggle class menu_active
    $('.toggle_button').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('menu_active')
    });

    $(".nav_link").on("click", function(e) {
        e.preventDefault();
        $(".nav_link").removeClass('active');
        $(this).addClass('active');

        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 900);

        $('body').removeClass('menu_active');
    });


});