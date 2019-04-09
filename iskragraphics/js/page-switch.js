$(document).ready(function() {
	$('.block-1-7').click(function(){
		$('.b2, .b3, .b4, .b5, .b6, .b7, .b8').css({'opacity': '0', 'transition': '0.5s'});
		$('.i1').attr('src', 'img/logo-23.png').css({'border': '1px solid #464646', 'box-shadow': 'none', 'transition': '0s'});
		$('.bb1').css({'padding-bottom': '20px', 'margin-top': '-20px'})
		setTimeout(function(){
			$(location).attr('href', 'portfolio-block1.html');
	    }, 500);
    });
});