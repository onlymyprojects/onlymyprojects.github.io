$(document).ready(function() {
	setTimeout(function(){ 
		$('.block').css({'opacity': '1', 'transition': '1s'});
	}, 1000);
	setTimeout(function(){ 
		$('.max').css({'opacity': '1', 'transition': '1s'});
		$('.button').css({'opacity': '1', 'transition': '1s'});
		$('.social').css({'opacity': '1', 'transition': '1s'});
		$('.copyright').css({'opacity': '1', 'transition': '1s'});
		$('#contact').css({'opacity': '1', 'transition': '1s'});
		$('.navbar-default').css({'opacity': '1', 'transition': '1s'});
		$('.logo').css({'opacity': '1', 'transition': '1s'});
	}, 4000);
	setTimeout(function(){
		$('.button').css({'opacity': '1', 'transition': '0.5s'});
		$('.social').css({'opacity': '1', 'transition': '0.5s'});
		$('.copyright').css({'opacity': '1', 'transition': '0s'});
		$('#contact').css({'opacity': '1', 'transition': '0.5s'});
		$('.navbar-default').css({'opacity': '1', 'transition': '0.5s'});
	}, 4500);
});