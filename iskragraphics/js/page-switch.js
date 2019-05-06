$(document).ready(function() {
	$('.b1').click(function(){
		$('.b2, .b3, .b4, .b5, .b6, .b7, .b8').css({'opacity': '0', 'transition': '0.5s'});
		$('.bb1').css({'padding-bottom': '20px', 'margin-top': '-20px'});
		setTimeout(function(){
			$('.b1').css({'opacity': '0', 'transition': '0.5s'});
	    }, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block1.html');
	    }, 1000);
    });
    $('.b2').click(function(){
		$('.b1, .b3, .b4, .b5, .b6, .b7, .b8').css({'opacity': '0', 'transition': '0.5s'});
		$('.bb2').css({'padding-bottom': '20px', 'margin-top': '-20px'});
		setTimeout(function(){
			$('.b2').css({'opacity': '0', 'transition': '0.5s'});
	    }, 500);
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block1.html');
	    }, 1000);
    });
});