$(document).ready(function() {
	$('#contact').click(function(){
		$('#page-contact').fadeIn().removeClass('hide');
    });


    $('.close-contact').click(function() {
    	$('#page-contact').fadeOut().addClass('hide');
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
		if (true) {
			$('#input1').focusout(function() {
			$('#input-text1').css({"opacity": "1"});
	    });
		} 
		if (false) {
			$('#input1').blur(function() {
			$('#input-text1').css({"opacity": "0"});
	    });
		}
		
	});
});