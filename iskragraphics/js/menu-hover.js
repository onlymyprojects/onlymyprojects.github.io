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
		$('.instagram').fadeOut(function() {
			$(this).attr("src", "img/instagram2.png").fadeIn();
		});
	});
	$('.instagram').mouseout(function() {
		$('.instagram').fadeOut(function() {
			$(this).attr("src", "img/instagram.png").fadeIn();
		});
	});

	$('.facebook').hover(function() {
		$('.facebook').fadeOut(function() {
			$(this).attr("src", "img/facebook2.png").fadeIn();
		});
	});
	$('.facebook').mouseout(function() {
		$('.facebook').fadeOut(function() {
			$(this).attr("src", "img/facebook.png").fadeIn();
		});
	});

	$('.Dribble').hover(function() {
		$('.Dribble').fadeOut(function() {
			$(this).attr("src", "img/Dribble2.png").fadeIn();
		});
	});
	$('.Dribble').mouseout(function() {
		$('.Dribble').fadeOut(function() {
			$(this).attr("src", "img/Dribble.png").fadeIn();
		});
	});

	$('.Behance').hover(function() {
		$('.Behance').fadeOut(function() {
			$(this).attr("src", "img/Behance2.png").fadeIn();
		});
	});
	$('.Behance').mouseout(function() {
		$('.Behance').fadeOut(function() {
			$(this).attr("src", "img/Behance.png").fadeIn();
		});
	});
});