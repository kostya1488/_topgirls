$(document).ready(function() {

    // btnUp = $('#button_up_link')

    // // smooth scrolling
    // $(".nav_link").on("click", function(e) {
    //     e.preventDefault();
    //     let id = $(this).attr('href');
    //     let top = $(id).offset().top;
    //     $('body,html').animate({ scrollTop: top }, 900);
    // });

    // toggle class menu_active
    $('.toggle_button').click(function(e) {
        e.preventDefault();
        $('.toggle_button').toggleClass('menu_active')
    });

});