x = 0

$('.menu').click(function () {
    if (x == 0) {
        $("#navbarNav").fadeIn(500)
        $('body').css({ 'overflow-y': 'hidden' })
        $('.navbar').css({ 'background': '#282532', 'transition': '0.5s' })
        x = 1
    }
    else {
        $("#navbarNav").hide(200)
        $('body').css({ 'overflow-y': 'initial' })
        $('.navbar').css({ 'background': '#6A6282', 'transition': '0.5s' })
        x = 0;
    }
})


if ($(window).width() <= 991) {
    $("#ourSolution").attr({ src: "img/ourSolution2.png" })

    y = 0
    $('#collapseContent').toggle()
    $('#collapseButton').click(function () {
        $('#collapseContent').toggle("slow")
        if (y == 0) {
            $('#collapseButtonText').text("Скрыть")
            $('#forestArrow').css({ "transform": "rotate(180deg)" })
            y = 1
        }
        else {
            $('#collapseButtonText').text("Подробнее")
            $('#forestArrow').css({ "transform": "rotate(0deg)" })
            y = 0
        }
    })
} else {
    $("#ourSolution").attr({ src: "img/ourSolution.png" })
}


$(document).ready(function () {
    $('.popup-btn0').click(function (e) {
        $('.popup-wrap0').fadeIn(500);

        e.preventDefault();
    });
    $('.popup-wrap0, .popup-close0').click(function (e) {
        $('.popup-wrap0').fadeOut(500);

        e.preventDefault();
    });
    $('.popup-box0').click(function(){return false;});

    $('.popup-btn1').click(function (e) {
        $('.popup-wrap1').fadeIn(500);
        $('.popup-box1').removeClass('transform-out').addClass('transform-in');

        e.preventDefault();
    });

    $('.popup-btn2').click(function (e) {
        $('.popup-wrap2').fadeIn(500);
        $('.popup-box2').removeClass('transform-out').addClass('transform-in');

        e.preventDefault();
    });

    $('.popup-btn3').click(function (e) {
        $('.popup-wrap3').fadeIn(500);
        $('.popup-box3').removeClass('transform-out').addClass('transform-in');

        e.preventDefault();
    });

    $('.popup-btn4').click(function (e) {
        $('.popup-wrap4').fadeIn(500);
        $('.popup-box4').removeClass('transform-out').addClass('transform-in');

        e.preventDefault();
    });

    $('.popup-btn5').click(function (e) {
        $('.popup-wrap5').fadeIn(500);
        $('.popup-box5').removeClass('transform-out').addClass('transform-in');

        e.preventDefault();
    });

    $('.popup-btn6').click(function (e) {
        $('.popup-wrap6').fadeIn(500);
        $('.popup-box6').removeClass('transform-out').addClass('transform-in');

        e.preventDefault();
    });

    $('.popup-btn7').click(function (e) {
        $('.popup-wrap7').fadeIn(500);
        $('.popup-box7').removeClass('transform-out').addClass('transform-in');

        e.preventDefault();
    });

    $('.popup-close').click(function (e) {
        $('.popup-wrap1, .popup-wrap2, .popup-wrap3, .popup-wrap4, .popup-wrap5, .popup-wrap6, .popup-wrap7').fadeOut(500);
        $('.popup-box1, .popup-box2, .popup-box3, .popup-box4, .popup-box5, .popup-box6, .popup-box7').removeClass('transform-in').addClass('transform-out');

        e.preventDefault();
    });
});