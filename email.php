<?php

	if($_POST){
	$name=$_POST['name'];
	$email=$_POST['email'];
	$text= "Referrer: " + $_POST['referrer'] + "/n/n" + $_POST['text'];
	
	//send email
	
	mail("info@manyhatsdesign.com", "Message from Website",    $text, "From:" . $email); }
	
?>