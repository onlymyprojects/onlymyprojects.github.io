$(document).ready(function() {
	$('#contact').click(function(){
		$('#page-contact').removeClass('contact-animation2');
		$('#page-contact').removeClass('hide');
		$('#page-contact').addClass('contact-animation');
    });


    $('.close-contact').click(function() {
    	$('#page-contact').removeClass('contact-animation');
    	$('#page-contact').addClass('contact-animation2');
    	$('#page-contact').addClass('hide');
    });


	$('#input1').focus(function() {
		$('#input-text1').css({"opacity": "1", "transition": "0.5s"});
	});
	$('#input2').focus(function() {
		$('#input-text2').css({"opacity": "1", "transition": "0.5s"});
	});
	$('#input3').focus(function() {
		$('#input-text3').css({"opacity": "1", "transition": "0.5s"});
	});


	$('#input1').focusout(function() {
		$('#input-text1').css({"opacity": "0", "transition": "0.5s"});
	});
	$('#input2').focusout(function() {
		$('#input-text2').css({"opacity": "0", "transition": "0.5s"});
	});
	$('#input3').focusout(function() {
		$('#input-text3').css({"opacity": "0", "transition": "0.5s"});
	});


	$('#input1').change(function() {
		$('#input1').focusout(function() {
			$('#input-text1').css({"opacity": "1"});
			$('#input1').css({"border-bottom": "1px solid #C8A060"});
	    });	
	});
	$('#input2').change(function() {
		$('#input2').focusout(function() {
			$('#input-text2').css({"opacity": "1"});
			$('#input2').css({"border-bottom": "1px solid #C8A060"});
	    });		
	});
	$('#input3').change(function() {
		$('#input3').focusout(function() {
			$('#input-text3').css({"opacity": "1"});
			$('#input3').css({"border-bottom": "1px solid #C8A060"});
	    });		
	});
});