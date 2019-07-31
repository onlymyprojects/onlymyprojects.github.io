$(document).ready(function() {
	$('#contact').click(function(){
		$('#page-contact').removeClass('hide');
		$('.block').hide().removeClass('animated');
		$('.button').removeClass('animated');
		$('.copyright').removeClass('animated');
		$('.copyright').css({"opacity": "0", "transition": "0s"});
		$('#page-contact').addClass('contact-animation');
		$('.all-blocks').hide();
		$('.max').hide().removeClass('animated');
		$('.portfolio-block').hide();
		setTimeout(function(){	    
    	    $('.copyright').css({"left": "13.2%", "bottom": "3.6%"});
    	    $('.cp').removeClass('copyright-block');
        }, 1000);
		setTimeout(function(){	    
    	    $('.copyright').css({"opacity": "1", "transition": "1s"});
        }, 3000);
    });


    $('.close-contact').click(function() {
    	$('.copyright').css({"opacity": "0", "transition": "0s"});
    	$('#page-contact').removeClass('contact-animation');
    	$('.block').show();
    	setTimeout(function(){
		    $('.cp').addClass('copyright-block');
		    $('.copyright').css({"left": "5%", "bottom": "40%"});   
        }, 1000);
		setTimeout(function(){
		    $('.cp').addClass('copyright-block');  
    	    $('.copyright').css({"opacity": "1", "transition": "1s"});
        }, 1500);
    	$('#page-contact').addClass('hide');
    	$('.all-blocks').show();
    	$('.max').show();
		$('.portfolio-block').show();
		$('.contact-menu').css({'opacity': '0'});
		$('.close-contact').css({'opacity': '0'});
		$('.form').css({'opacity': '0'});
    });


	$('#input1').focus(function() {
		$('#input-text1').css({"opacity": "1"});
		$('#input1').css({"border-bottom": "1px solid #C8A060"});
	});
	$('#input2').focus(function() {
		$('#input-text2').css({"opacity": "1"});
		$('#input2').css({"border-bottom": "1px solid #C8A060"});
	});
	$('#input3').focus(function() {
		$('#input-text3').css({"opacity": "1"});
		$('#input3').css({"border-bottom": "1px solid #C8A060"});
	});


	$('#input1').focusout(function() {
		$('#input-text1').css({"opacity": "0"});
		$('#input1').css({"border-bottom": "1px solid #8C8C8C"});
	});
	$('#input2').focusout(function() {
		$('#input-text2').css({"opacity": "0"});
		$('#input2').css({"border-bottom": "1px solid #8C8C8C"});
	});
	$('#input3').focusout(function() {
		$('#input-text3').css({"opacity": "0"});
		$('#input3').css({"border-bottom": "1px solid #8C8C8C"});
	});


    $("#input1").on('change', function() {
        if (this.value=="")  {
        	$('#input1').focusout(function() {
			    $('#input-text1').css({"opacity": "0"});
			    $('#input1').css({"border-bottom": "1px solid #8C8C8C"});
	        });
        }else{
        	$('#input1').focusout(function() {
			    $('#input-text1').css({"opacity": "1"});
			    $('#input1').css({"border-bottom": "1px solid #C8A060"});
	        });
        }
    });
	$("#input2").on('change', function() {
        if (this.value=="")  {
        	$('#input2').focusout(function() {
			    $('#input-text2').css({"opacity": "0"});
			    $('#input2').css({"border-bottom": "1px solid #8C8C8C"});
	        });
        }else{
        	$('#input2').focusout(function() {
			    $('#input-text2').css({"opacity": "1"});
			    $('#input2').css({"border-bottom": "1px solid #C8A060"});
	        });
        }
    });
    $("#input3").on('change', function() {
        if (this.value=="")  {
        	$('#input3').focusout(function() {
			    $('#input-text3').css({"opacity": "0"});
			    $('#input3').css({"border-bottom": "1px solid #8C8C8C"});
	        });
        }else{
        	$('#input3').focusout(function() {
			    $('#input-text3').css({"opacity": "1"});
			    $('#input3').css({"border-bottom": "1px solid #C8A060"});
	        });
        }
	});
	



	$('#contact').click(function() {
		setTimeout(function(){ 
			$('.contact-menu').css({'opacity': '1', 'transition': '1s'});
		}, 3000);

		setTimeout(function(){ 
			$('.close-contact').css({'opacity': '1', 'transition': '1s'});
		}, 2000);

		setTimeout(function(){ 
			$('.form').css({'opacity': '1', 'transition': '1s'});
		}, 2000);
	});
});