$(document).ready(function() {
	$('.m-lm1').click(function() {
		setTimeout(function() {
			$('.m-lm1').removeClass('hideee');
			$('.b1, .b2, .b3, .b4, .m-lm1').addClass('hidee');
			$('.b5, .b6, .b7, .b8, .m-lm2, .m-lm1-1').removeClass('hidee').removeClass('hide');
		}, 100);
	});
	$('.m-lm2').click(function() {
		setTimeout(function() {
			$('.b5, .b6, .b7, .b8, .m-lm2, .m-lm1-1').addClass('hidee');
			$('.b1, .b2, .b3, .b4, .m-lm1').removeClass('hidee').removeClass('hide');
		}, 100);
	});
	$('.m-lm1-1').click(function() {
		setTimeout(function() {
			$('.b5, .b6, .b7, .b8, .m-lm2, .m-lm1-1').addClass('hidee');
			$('.b9, .b10, .b11, .b12, .m-lm3, .m-lm2-2').removeClass('hidee').removeClass('hide');
		}, 100);
	});
	$('.m-lm3').click(function() {
		setTimeout(function() {
			$('.b9, .b10, .b11, .b12, .m-lm3, .m-lm2-2').addClass('hidee');
			$('.b5, .b6, .b7, .b8, .m-lm2, .m-lm1-1').removeClass('hidee').removeClass('hide');
		}, 100);
	});
	$('.m-lm2-2').click(function() {
		setTimeout(function() {
			$('.b9, .b10, .b11, .b12, .m-lm3, .m-lm2-2').addClass('hidee');
			$('.b13, .b14, .b15, .b16, .m-lm4').removeClass('hidee').removeClass('hide');
		}, 100);
	});
	$('.m-lm4').click(function() {
		setTimeout(function() {
			$('.b9, .b10, .b11, .b12, .m-lm3, .m-lm2-2').removeClass('hidee').removeClass('hide');
			$('.b13, .b14, .b15, .b16, .m-lm4').addClass('hidee');
		}, 100);
	});
});