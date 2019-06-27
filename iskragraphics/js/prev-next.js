$(document).ready(function() {
	$('.prev').click(function() {
		$('.content').animate({'opacity': '0'}, 250);
	});
	$('.next').click(function() {
		$('.content').animate({'opacity': '0'}, 250);
	});


	$('.next1').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block2.html');
		}, 500);
	});


	$('.prev2').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block1.html');
		}, 500);
	});
	$('.next2').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block3.html');
		}, 500);
	});


	$('.prev3').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block2.html');
		}, 500);
	});
	$('.next3').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block4.html');
		}, 500);
	});


	$('.prev4').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block3.html');
		}, 500);
	});
	$('.next4').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block5.html');
		}, 500);
	});


	$('.prev5').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block4.html');
		}, 500);
	});
	$('.next5').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block6.html');
		}, 500);
	});


	$('.prev6').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block5.html');
		}, 500);
	});
	$('.next6').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block7.html');
		}, 500);
	});


	$('.prev7').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block6.html');
		}, 500);
	});
	$('.next7').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block8.html');
		}, 500);
	});


	$('.prev8').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block7.html');
		}, 500);
	});
});