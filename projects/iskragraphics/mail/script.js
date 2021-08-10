$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.blur').removeClass('hidden');
			$('.email-sent').removeClass('hidden');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			});
		});
		return false;
	});

	$('.email-sent-button').click(function() {
		$(location).attr('href', 'https://iskragraphics.com/');
	});

});