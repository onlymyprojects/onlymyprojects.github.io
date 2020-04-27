$('#input1').focus(function() {
	$('#input-text1').css({"opacity": "1"});
	$('#input1').css({"border-bottom": "1px solid #C8A060"});
});
$('#input2').focus(function() {
	$('#input-text2').css({"opacity": "1"});
	$('#input2').css({"border-bottom": "1px solid #C8A060"});
});
$('#input3').focus(function() {
	$('#input-text3').css({"opacity": "1"});
	$('#input3').css({"border-bottom": "1px solid #C8A060"});
});


$('#input1').focusout(function() {
	$('#input-text1').css({"opacity": "0"});
	$('#input1').css({"border-bottom": "1px solid #8C8C8C"});
});
$('#input2').focusout(function() {
	$('#input-text2').css({"opacity": "0"});
	$('#input2').css({"border-bottom": "1px solid #8C8C8C"});
});
$('#input3').focusout(function() {
	$('#input-text3').css({"opacity": "0"});
	$('#input3').css({"border-bottom": "1px solid #8C8C8C"});
});


$("#input1").on('change', function() {
	if (this.value=="")  {
		$('#input1').focusout(function() {
			$('#input-text1').css({"opacity": "0"});
			$('#input1').css({"border-bottom": "1px solid #8C8C8C"});
		});
	}else{
		$('#input1').focusout(function() {
			$('#input-text1').css({"opacity": "1"});
			$('#input1').css({"border-bottom": "1px solid #C8A060"});
		});
	}
});
$("#input2").on('change', function() {
	if (this.value=="")  {
		$('#input2').focusout(function() {
			$('#input-text2').css({"opacity": "0"});
			$('#input2').css({"border-bottom": "1px solid #8C8C8C"});
		});
	}else{
		$('#input2').focusout(function() {
			$('#input-text2').css({"opacity": "1"});
			$('#input2').css({"border-bottom": "1px solid #C8A060"});
		});
	}
});
$("#input3").on('change', function() {
	if (this.value=="")  {
		$('#input3').focusout(function() {
			$('#input-text3').css({"opacity": "0"});
			$('#input3').css({"border-bottom": "1px solid #8C8C8C"});
		});
	}else{
		$('#input3').focusout(function() {
			$('#input-text3').css({"opacity": "1"});
			$('#input3').css({"border-bottom": "1px solid #C8A060"});
		});
	}
});