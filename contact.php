<?php 
$to = "akran.iphone@yandex.ru";
$tema = "contact me";
$message .= "".$_POST['mail']."<br/>";
$message .= "".$_POST['code'];
$message .= "".$_POST['phone']."<br/>";

$message .= "".$_POST['message']."<br/>";
$headers = 'MIME-Version: 1.0'."\r\n";
$headers .= 'Content-type: text/html; charset=utf-8'."\r\n";
mail($to, $tema, $message, $headers);
?>