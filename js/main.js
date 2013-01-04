$(document).ready(function(){

	$('#submit').click(function() {
		
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		var referrer = document.referrer;
	
		var dataString = 'name='+ name + '&email=' + email + '&message=' + message + '&ref=' + referrer;
	
		$("#submit").attr('disabled', 'disabled');
		$("input, textarea").addClass("disabled");
		
		$.ajax({
			type: "POST",
			url: "/email.php",
			data: dataString,
			success: function(){
				$('#wrapper').fadeOut('fast');
				$('#wrapper-thanks').fadeIn('slow');
			}
		});
		
		return false;
	});
	
	
});