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
	});
});
