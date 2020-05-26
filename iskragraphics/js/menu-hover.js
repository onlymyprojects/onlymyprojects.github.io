$(document).ready(function() {
	$('#button1').hover(function() {
		$('#menu-line').removeClass('menu-line');
		$('#menu-line').addClass('menu-line2');
	});
	$('#button1').mouseout(function() {
		$('#menu-line').removeClass('menu-line2');
		$('#menu-line').addClass('menu-line');
	});

	$('#mobile-menu-disappear').click(function() {
		$(this).css({'opacity': '0'});
	});
	$('.back').click(function() {
		$('#mobile-menu-disappear').css({'opacity': '1'});
	});


	$('.instagram').hover(function() {
		$(this).attr("src", "img/instagram2.svg");
	});
	$('.instagram').mouseout(function() {
		$(this).attr("src", "img/instagram.svg");
	});

	$('.facebook').hover(function() {
		$(this).attr("src", "img/facebook2.svg");
	});
	$('.facebook').mouseout(function() {
		$(this).attr("src", "img/facebook.svg");
	});

	$('.Dribble').hover(function() {
		$(this).attr("src", "img/Dribble2.svg");
	});
	$('.Dribble').mouseout(function() {
		$(this).attr("src", "img/Dribble.svg");
	});

	$('.Behance').hover(function() {
		$(this).attr("src", "img/Behance2.svg");
	});
	$('.Behance').mouseout(function() {
		$(this).attr("src", "img/Behance.svg");
	});



	$('.close-contact').hover(function() {
		$(this).attr("src", "img/Close2.svg");
	});
	$('.close-contact').mouseout(function() {
		$(this).attr("src", "img/Close.svg");
	});
});