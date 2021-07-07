$(window).on("load", function () {
    setTimeout(function () {
        $('#preloader').fadeIn('slow', function() {
            $('#preloader').css({'display': 'contents'})
        });
    }, 500)
});