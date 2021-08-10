$('#content2,#content3,#content4,#content5,#content6').hide()

$(document).on('click', '#1', function () {
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtons')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonBegin')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonEnd')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonMiddleEnd')

    $('#2').addClass('otherButtons')
    $('#2').addClass('otherButtonBegin')

    $('#3').addClass('otherButtons')

    $('#4').addClass('otherButtons')
    $('#5').addClass('otherButtons')

    $('#6').addClass('otherButtons')
    $('#6').addClass('otherButtonEnd')

    $('#content1').show()
    $('#content2,#content3,#content4,#content5,#content6').hide()
    console.log('lalala')
})

$(document).on('click', '#2', function () {
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtons')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonBegin')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonEnd')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonMiddleEnd')

    $('#1').addClass('otherButtons')
    $('#1').addClass('otherButtonBegin')
    $('#1').addClass('otherButtonEnd')
    $('#1').addClass('otherButtonMiddleEnd')

    $('#3').addClass('otherButtons')
    $('#3').addClass('otherButtonBegin')

    $('#4').addClass('otherButtons')
    $('#5').addClass('otherButtons')

    $('#6').addClass('otherButtons')
    $('#6').addClass('otherButtonEnd')

    $('#content2').show()
    $('#content1,#content3,#content4,#content5,#content6').hide()
    console.log('lalala')
})

$(document).on('click', '#3', function () {
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtons')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonBegin')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonEnd')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonMiddleEnd')

    $('#1').addClass('otherButtons')
    $('#1').addClass('otherButtonBegin')

    $('#2').addClass('otherButtonEnd')
    $('#2').addClass('otherButtonMiddleEnd')
    $('#2').addClass('otherButtons')

    $('#4').addClass('otherButtons')
    $('#4').addClass('otherButtonBegin')

    $('#5').addClass('otherButtons')

    $('#6').addClass('otherButtons')
    $('#6').addClass('otherButtonEnd')

    $('#content3').show()
    $('#content1,#content2,#content4,#content5,#content6').hide()
    console.log('lalala')
})

$(document).on('click', '#4', function () {
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtons')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonBegin')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonEnd')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonMiddleEnd')

    $('#1').addClass('otherButtons')
    $('#1').addClass('otherButtonBegin')

    $('#2').addClass('otherButtons')

    $('#3').addClass('otherButtonEnd')
    $('#3').addClass('otherButtonMiddleEnd')
    $('#3').addClass('otherButtons')

    $('#5').addClass('otherButtons')
    $('#5').addClass('otherButtonBegin')

    $('#6').addClass('otherButtons')
    $('#6').addClass('otherButtonEnd')

    $('#content4').show()
    $('#content1,#content2,#content3,#content5,#content6').hide()
})

$(document).on('click', '#5', function () {
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtons')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonBegin')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonEnd')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonMiddleEnd')

    $('#1').addClass('otherButtons')
    $('#1').addClass('otherButtonBegin')

    $('#2').addClass('otherButtons')

    $('#3').addClass('otherButtons')

    $('#4').addClass('otherButtonEnd')
    $('#4').addClass('otherButtonMiddleEnd')
    $('#4').addClass('otherButtons')

    $('#6').addClass('otherButtonBegin')
    $('#6').addClass('otherButtons')
    $('#6').addClass('otherButtonEnd')

    $('#content5').show()
    $('#content1,#content2,#content3,#content4,#content6').hide()
})

$(document).on('click', '#6', function () {
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtons')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonBegin')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonEnd')
    $('#1,#2,#3,#4,#5,#6').removeClass('otherButtonMiddleEnd')

    $('#1').addClass('otherButtons')
    $('#1').addClass('otherButtonBegin')

    $('#2').addClass('otherButtons')

    $('#3').addClass('otherButtons')

    $('#4').addClass('otherButtons')

    $('#5').addClass('otherButtonEnd')
    $('#5').addClass('otherButtonMiddleEnd')
    $('#5').addClass('otherButtons')

    $('#content6').show()
    $('#content1,#content2,#content3,#content4,#content5').hide()
})