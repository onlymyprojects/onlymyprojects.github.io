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
	    });
});
