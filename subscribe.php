<?php 
$to = "akran.iphone@yandex.ru";
$tema = "subscribe me";
$message .= "" .$_POST['submail']."<br/>";
$message .= "subscribe me!"."<br/>";
$headers .= 'MIME-Version: 1.0'."\r\n";
$headers = 'Content-type: text/html; charset=utf-8'."\r\n";
mail($to, $tema, $message, $headers);
?>