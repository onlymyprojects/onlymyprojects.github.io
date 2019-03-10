$(document).ready(function() {
	$('.title').css({"display": "none"});
	setTimeout(function(){
		$('.title').css({"display": "initial"});
	}, 2000);
	$('.text').css({"display": "none"});
	setTimeout(function(){
		$('.text').css({"display": "initial"});
	}, 2000);
});