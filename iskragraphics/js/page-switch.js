$(document).ready(function() {
	$('.b1').click(function(){
		$('.b2, .b3, .b4, .b5, .b6, .b7, .b8').css({'opacity': '0', 'transition': '0.5s'});
		$('.i1').attr('src', 'img/logo-23.png').css({'border': '1px solid #464646', 'box-shadow': 'none', 'transition': '0s'});
		$('.bb1').css({'padding-bottom': '20px', 'margin-top': '-20px'});
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block1.html');
	    }, 500);
    });
    $('.b2').click(function(){
		$('.b1, .b3, .b4, .b5, .b6, .b7, .b8').css({'opacity': '0', 'transition': '0.5s'});
		$('.i2').attr('src', 'img/logo-23.png').css({'border': '1px solid #464646', 'box-shadow': 'none', 'transition': '0s'});
		$('.bb2').css({'padding-bottom': '20px', 'margin-top': '-20px'});
		setTimeout(function(){
			$('.i2').attr('src', 'img/logo-23.png').animate({'width': '543px', 'margin-left': '-287px'}, 600).animate({'width': '250px', 'margin-left': '-287px'}, 600);
	    }, 500);
	    setTimeout(function(){
			$(location).attr('href', 'portfolio-block1.html');
	    }, 1700);
    });
});