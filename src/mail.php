<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/SMTP.php';


$title = "Заказ";

$admin_email = array();
foreach ( $_POST["admin_email"] as $key => $value ) {
	array_push($admin_email, $value);
}

$c = true;
// Формирование самого письма
$title = "Заголовок письма";
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$body = "<table style='width: 100%;'>$body</table>";

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->isSMTP();




$mail->Host = 'ssl://smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'npolozov0@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'pnbgmwzuigyvthaz'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; 


$mail->setFrom('npolozov0@gmail.com'); // от кого будет уходить письмо?

foreach ( $admin_email as $key => $value ) {
	$mail->addAddress($value);
}

$mail->IsHTML(true);
// $mail->Subject = 'Заявка';
// $mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email. '<br>Сообщение этого пользователя: ' .$message;
// $mail->AltBody = '';
$mail->Subject = $title;
$mail->Body = $body;
$mail->send();

?>