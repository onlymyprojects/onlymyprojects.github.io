$(document).ready(function() {
	$('.i1').click(function(){
		$('.i2, .i3, .i4, .i5, .i6, .i7, .i8').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		$('.i1').css({'margin-top': '-20px', 'box-shadow': '0 25px 25px -30px black'});
		setTimeout(function(){
			$('.i1').removeClass('visibility').animate({'opacity': '0'}, 150);
	    }, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block1.html');
		}, 1000);
		$('.i1').mouseout(function() {
			$('.i1').attr('src', 'img/ecoride-hover.png');
		});
		$('.load-more').hide(200);
    });


	$('.i2').click(function(){
		$('.i1, .i3, .i4, .i5, .i6, .i7, .i8').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		$('.i2').css({'margin-top': '-20px', 'box-shadow': '0 25px 25px -30px black'});
		setTimeout(function(){
			$('.i2').removeClass('visibility').animate({'opacity': '0'}, 150);
		}, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block2.html');
		}, 1000);
		$('.i2').mouseout(function() {
			$('.i2').attr('src', 'img/rmetre-hover.png');
		});
		$('.load-more').hide(200);
	});


	$('.i3').click(function(){
		$('.i1, .i2, .i4, .i5, .i6, .i7, .i8').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		$('.i3').css({'margin-top': '-20px', 'box-shadow': '0 25px 25px -30px black'});
		setTimeout(function(){
			$('.i3').removeClass('visibility2').animate({'opacity': '0'}, 150);
		}, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block3.html');
		}, 1000);
		$('.i3').mouseout(function() {
			$('.i3').attr('src', 'img/yetikids-hover.png');
		});
		$('.load-more').hide(200);
	});


	$('.i4').click(function(){
		$('.i1, .i2, .i3, .i5, .i6, .i7, .i8').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		$('.i4').css({'margin-top': '-20px', 'box-shadow': '0 25px 25px -30px black'});
		setTimeout(function(){
			$('.i4').removeClass('visibility2').animate({'opacity': '0'}, 150);
		}, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block4.html');
		}, 1000);
		$('.i4').mouseout(function() {
			$('.i4').attr('src', 'img/restavrator-hover.png');
		});
		$('.load-more').hide(200);
	});


	$('.i5').click(function(){
		$('.i1, .i2, .i3, .i4, .i6, .i7, .i8').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		$('.i5').css({'margin-top': '-20px', 'box-shadow': '0 25px 25px -30px black'});
		setTimeout(function(){
			$('.i5').removeClass('visibility2').animate({'opacity': '0'}, 150);
		}, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block5.html');
		}, 1000);
		$('.i5').mouseout(function() {
			$('.i5').attr('src', 'img/odyssey-hover.png');
		});
		$('.load-more').hide(200);
	});


	$('.i6').click(function(){
		$('.i1, .i2, .i3, .i4, .i5, .i7, .i8').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		$('.i6').css({'margin-top': '-20px', 'box-shadow': '0 25px 25px -30px black'});
		setTimeout(function(){
			$('.i6').removeClass('visibility2').animate({'opacity': '0'}, 150);
		}, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block6.html');
		}, 1000);
		$('.i6').mouseout(function() {
			$('.i6').attr('src', 'img/avigo-hover.png');
		});
		$('.load-more').hide(200);
	});


	$('.i7').click(function(){
		$('.i1, .i2, .i3, .i4, .i5, .i6, .i8').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		$('.i7').css({'margin-top': '-20px', 'box-shadow': '0 25px 25px -30px black'});
		setTimeout(function(){
			$('.i7').removeClass('visibility').animate({'opacity': '0'}, 150);
		}, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block7.html');
		}, 1000);
		$('.i7').mouseout(function() {
			$('.i7').attr('src', 'img/sivart-hover.png');
		});
		$('.load-more').hide(200);
	});


	$('.i8').click(function(){
		$('.i1, .i2, .i3, .i4, .i5, .i6, .i7').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		$('.i8').css({'margin-top': '-20px', 'box-shadow': '0 25px 25px -30px black'});
		setTimeout(function(){
			$('.i8').removeClass('visibility').animate({'opacity': '0'}, 150);
		}, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block8.html');
		}, 1000);
		$('.i8').mouseout(function() {
			$('.i8').attr('src', 'img/planar-hover.png');
		});
		$('.load-more').hide(200);
	});


	$('.i9').click(function(){
		$('.i10, .i11, .i12, .i13, .i14, .i15, .i16').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		$('.i9').css({'margin-top': '-20px', 'box-shadow': '0 25px 25px -30px black'});
		setTimeout(function(){
			$('.i9').removeClass('visibility').animate({'opacity': '0'}, 150);
	    }, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block9.html');
		}, 1000);
		$('.i9').mouseout(function() {
			$('.i9').attr('src', 'img/porter-hover.png');
		});
		$('.load-more').hide(200);
    });


	$('.i10').click(function(){
		$('.i9, .i11, .i12, .i13, .i14, .i15, .i16').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		$('.i10').css({'margin-top': '-20px', 'box-shadow': '0 25px 25px -30px black'});
		setTimeout(function(){
			$('.i10').removeClass('visibility').animate({'opacity': '0'}, 150);
		}, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block10.html');
		}, 1000);
		$('.i10').mouseout(function() {
			$('.i10').attr('src', 'img/magic-hover.png');
		});
		$('.load-more').hide(200);
	});


	$('.i11').click(function(){
		$('.i9, .i10, .i12, .i13, .i14, .i15, .i16').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		$('.i11').css({'margin-top': '-20px', 'box-shadow': '0 25px 25px -30px black'});
		setTimeout(function(){
			$('.i11').removeClass('visibility2').animate({'opacity': '0'}, 150);
		}, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block11.html');
		}, 1000);
		$('.i11').mouseout(function() {
			$('.i11').attr('src', 'img/hive-hover.png');
		});
		$('.load-more').hide(200);
	});


	$('.i12').click(function(){
		$('.i9, .i10, .i11, .i13, .i14, .i15, .i16').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		$('.i12').css({'margin-top': '-20px', 'box-shadow': '0 25px 25px -30px black'});
		setTimeout(function(){
			$('.i12').removeClass('visibility2').animate({'opacity': '0'}, 150);
		}, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block12.html');
		}, 1000);
		$('.i12').mouseout(function() {
			$('.i12').attr('src', 'img/whaleberry-hover.png');
		});
		$('.load-more').hide(200);
	});


	$('.i13').click(function(){
		$('.i9, .i10, .i11, .i12, .i14, .i15, .i16').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		$('.i13').css({'margin-top': '-20px', 'box-shadow': '0 25px 25px -30px black'});
		setTimeout(function(){
			$('.i13').removeClass('visibility2').animate({'opacity': '0'}, 150);
		}, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block13.html');
		}, 1000);
		$('.i13').mouseout(function() {
			$('.i13').attr('src', 'img/everest-hover.png');
		});
		$('.load-more').hide(200);
	});


	$('.i14').click(function(){
		$('.i9, .i10, .i11, .i12, .i13, .i15, .i16').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		$('.i14').css({'margin-top': '-20px', 'box-shadow': '0 25px 25px -30px black'});
		setTimeout(function(){
			$('.i14').removeClass('visibility2').animate({'opacity': '0'}, 150);
		}, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block14.html');
		}, 1000);
		$('.i14').mouseout(function() {
			$('.i14').attr('src', 'img/adelun-hover.png');
		});
		$('.load-more').hide(200);
	});


	$('.i15').click(function(){
		$('.i9, .i10, .i11, .i12, .i13, .i14, .i16').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		$('.i15').css({'margin-top': '-20px', 'box-shadow': '0 25px 25px -30px black'});
		setTimeout(function(){
			$('.i15').removeClass('visibility').animate({'opacity': '0'}, 150);
		}, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block15.html');
		}, 1000);
		$('.i15').mouseout(function() {
			$('.i15').attr('src', 'img/tenno-hover.png');
		});
		$('.load-more').hide(200);
	});


	$('.i16').click(function(){
		$('.i9, .i10, .i11, .i12, .i13, .i14, .i15').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		$('.i16').css({'margin-top': '-20px', 'box-shadow': '0 25px 25px -30px black'});
		setTimeout(function(){
			$('.i16').removeClass('visibility').animate({'opacity': '0'}, 150);
		}, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block16.html');
		}, 1000);
		$('.i16').mouseout(function() {
			$('.i16').attr('src', 'img/vitamins-hover.png');
		});
		$('.load-more').hide(200);
	});



	$('.lm1').click(function() {
		$('.i1, .i2, .i3, .i4, .i5, .i6, .i7, .i8').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		setTimeout(function(){
			$(location).attr('href', 'portfolio2.html');
		}, 500);
	});

	$('.lm2').click(function() {
		$('.i9, .i10, .i11, .i12, .i13, .i14, .i15, .i16').removeClass('visibility').removeClass('visibility2').animate({'opacity': '0'}, 150);
		setTimeout(function(){
			$(location).attr('href', 'portfolio.html');
		}, 500);
	});
});
