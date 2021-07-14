$(".popup").hide()

$(".butt2").click(function() {
    $(".popup").show()
})

$(".popup, #close").click(function() {
    $(".popup").hide()
})

$('.content-popup').click(function(){return false;});

$('.burger').click(function() {
    $('.mobile-menu-fadeIn-fadeOut').fadeIn()
})

$('#mobile-close').click(function() {
    $('.mobile-menu-fadeIn-fadeOut').fadeOut()
})