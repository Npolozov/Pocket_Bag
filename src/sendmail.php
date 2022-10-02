<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer(true); 
$mail->Charset = 'UTF-8'; 
$mail->isHTML(true); 
$mail->isHTML(true); 

$mail->setFrom('npolozov0@gmail.com' , 'Привет!');
$mail->addAddress('npolozov0@gmail.com');
$mail->Subject = 'Привет Мир!';

if(!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Даные отправлены';
}

$response = ['mуssage' => $message];

header('Content-type: application/json');
echo json_encode($response);