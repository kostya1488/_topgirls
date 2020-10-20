$(document).ready(function() {
    $("#ajax_form_1").submit(
        function() {
            sendAjaxForm('ajax_form_1', 'php/formhandler_1.php');
            return false;
        }
    );
    $("#ajax_form_2").submit(
        function() {
            sendAjaxForm('ajax_form_2', 'php/formhandler_2.php');
            return false;
        }
    );
});

function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: $("#" + ajax_form).serialize(),
        success: function(response) {
            result = $.parseJSON(response);
            $('.' + ajax_form + '_wrap').toggleClass('form_send');
        },
        error: function(response) {
            $('.form_response').html('Ошибка!<br>Форма не отправлена');
            $('.' + ajax_form + '_wrap').toggleClass('form_send');
        }
    });

}