<?php

require_once ('connect.php');
require_once ('msgbody.php');

date_default_timezone_set('UTC+3');

$name = htmlspecialchars(trim($_POST['name']));
$phone = htmlspecialchars(trim($_POST['phone']));
$offerText = urldecode(htmlspecialchars(trim($_POST['text'])));
$currentDate = date(DATE_RFC822);

function response($string) {
  return $response = [
    'answer' => $string
  ];
}

if (empty($phone)) {
  echo json_encode(response('Введите номер телефона'));
  exit();
}

$query = mysqli_query($connect, "INSERT INTO `customers` VALUES (NULL, '$name', '$phone', '$offerText', '$currentDate')");

if (!$query) {
  echo json_encode(response('Ошибка добавления в базу'));

  mysqli_close($connect);
  exit();
} else {
  mysqli_close($connect);
}

$to = "ignatov0131@gmail.com";
$subject = "Заявка с сайта MasterBel31";
$headers = "From: SiteMasterBel31@host.ru\r\n"
."Content-type: text/html; charset=utf-8\r\n"
."X-Mailer: PHP mail script";

if (mail($to, $subject, returnMsg($name, $phone, $offerText), $headers)) {
  echo json_encode(response('Заявку успешно отправлена!'));
} else {
  echo json_encode(response('Ошибка при отправке заявки'));
}
?>