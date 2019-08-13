$(document).ready(function() {

	//E-mail Ajax Send
	$('.send').on('click', function() { //Change
		console.log('lolelo');
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
