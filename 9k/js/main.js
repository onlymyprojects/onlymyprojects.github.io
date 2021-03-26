x = 0

$('.menu').click(function () {
    if (x == 0) {
        $('body').css({ 'overflow-y': 'hidden' })
        $('.navbar').css({ 'background': '#282532', 'transition': "0.3s" })
        $("#navbarNav").show(300)
        x = 1
    }
    else {
        $('body').css({ 'overflow-y': 'initial' })
        $('.navbar').css({ 'background': '#6A6282', 'transition': "0.3s" })
        $("#navbarNav").hide(300)
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

    $('.popup-close').click(function (e) {
        $('.popup-wrap').fadeOut(500);
        $('.popup-box').removeClass('transform-in').addClass('transform-out');

        e.preventDefault();
    });
});