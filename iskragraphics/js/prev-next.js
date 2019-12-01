$(document).ready(function() {
	$('.prev').click(function() {
		$('.content').animate({'opacity': '0'}, 250);
	});
	$('.next').click(function() {
		$('.content').animate({'opacity': '0'}, 250);
	});

	$('.next1').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'rmetre');
			setTimeout(function(){
				$('.work-number').removeClass('animated');
			}, 400);
		}, 500);
	});


	$('.prev2').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'ecoride');
		}, 500);
	});
	$('.next2').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'yetikids');
		}, 500);
	});


	$('.prev3').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'rmetre');
		}, 500);
	});
	$('.next3').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'restavrator');
		}, 500);
	});


	$('.prev4').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'yetikids');
		}, 500);
	});
	$('.next4').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'odyssey');
		}, 500);
	});


	$('.prev5').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'restavrator');
		}, 500);
	});
	$('.next5').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'avigo');
		}, 500);
	});


	$('.prev6').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'odyssey');
		}, 500);
	});
	$('.next6').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'sivart');
		}, 500);
	});


	$('.prev7').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'avigo');
		}, 500);
	});
	$('.next7').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'planar');
		}, 500);
	});


	$('.prev8').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'sivart');
		}, 500);
	});
	$('.next8').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'porteryard');
		}, 500);
	});


	$('.prev9').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'planar');
		}, 500);
	});
	$('.next9').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'magiccorn');
		}, 500);
	});


	$('.prev10').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'porteryard');
		}, 500);
	});
	$('.next10').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'hive');
		}, 500);
	});


	$('.prev11').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'magiccorn');
		}, 500);
	});
	$('.next11').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'whaleberry');
		}, 500);
	});


	$('.prev12').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'hive');
		}, 500);
	});
	$('.next12').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'everest');
		}, 500);
	});


	$('.prev13').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'whaleberry');
		}, 500);
	});
	$('.next13').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'adelun');
		}, 500);
	});


	$('.prev14').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'everest');
		}, 500);
	});
	$('.next14').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'tennosushi');
		}, 500);
	});


	$('.prev15').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'adelun');
		}, 500);
	});
	$('.next15').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'vitamins');
		}, 500);
	});


	$('.prev16').click(function() {
		setTimeout(function(){
			$(location).attr('href', 'tennosushi');
		}, 500);
	});
});