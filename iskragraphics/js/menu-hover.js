$(document).ready(function() {
	$('#button1').hover(function() {
		$('#menu-line').removeClass('menu-line');
		$('#menu-line').addClass('menu-line2');
	});
	$('#button1').mouseout(function() {
		$('#menu-line').removeClass('menu-line2');
		$('#menu-line').addClass('menu-line');
	});


	$('.instagram').hover(function() {
		$(this).attr("src", "img/instagram2.png");
	});
	$('.instagram').mouseout(function() {
		$(this).attr("src", "img/instagram.png");
	});

	$('.facebook').hover(function() {
		$(this).attr("src", "img/facebook2.png");
	});
	$('.facebook').mouseout(function() {
		$(this).attr("src", "img/facebook.png");
	});

	$('.Dribble').hover(function() {
		$(this).attr("src", "img/Dribble2.png");
	});
	$('.Dribble').mouseout(function() {
		$(this).attr("src", "img/Dribble.png");
	});

	$('.Behance').hover(function() {
		$(this).attr("src", "img/Behance2.png");
	});
	$('.Behance').mouseout(function() {
		$(this).attr("src", "img/Behance.png");
	});



	$('.close-contact').hover(function() {
		$(this).attr("src", "img/Close2.svg");
	});
	$('.close-contact').mouseout(function() {
		$(this).attr("src", "img/Close.png");
	});
});