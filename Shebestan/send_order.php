<?php

// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = trim($_POST['customer_name']);
$phone_cust = trim($_POST['customer_phone']);
$address = trim($_POST['customer_address_delivery']);
$product = $_POST['customer_product'];
$volume = trim($_POST['customer_order_volume']);
$units = $_POST['units'];
$comment = $_POST['customer_comment'];

if (empty($phone_cust) || empty($name)) {
	echo "Пустая форма.";
	exit();
}


// DATABASE
$hostname = "localhost";
$username = "id13016060_vadimignatov";
$password = "Polegcheparol>>1337";
$db_name = "id13016060_customers";

date_default_timezone_set('europe/moscow');
$date = date("Y-m-d H:i:s");


$connect = mysqli_connect($hostname, $username, $password, $db_name);
/*if (!$connect) {
      die("Connection failed: " . mysqli_connect_error());
}
 
echo "Connected successfully";*/
$query = "INSERT INTO customerz (name, phonenumber, address, product, volume, comment, date) VALUES ('$name', '$phone_cust', '$address', '$product', '$volume $units', '$comment', '$date')";

mysqli_query($connect, $query);
mysqli_close($connect);


// Create Body Message
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера GMAIL
    $mail->Username   = 'ignatov0131@yandex.ru'; // Логин на почте
    $mail->Password   = 'ghbphfr60'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('ignatov0131@yandex.ru', 'Вадим Игнатов'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('ignatov0131@gmail.com');  
    //$mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен


        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
        $mail->Subject = 'Shebestan'; // Заголовок письма
        $mail->Body    = "Имя заказчика - $name <br> Телефон - $phone_cust <br> Заказал - $product <br> Объем - $volume $units <br>  Комментарий - $comment";


// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

?>