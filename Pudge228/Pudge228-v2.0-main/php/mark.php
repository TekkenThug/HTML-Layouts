<?php

date_default_timezone_set('europe/moscow');

$ip   = $_SERVER['REMOTE_ADDR'];
$mark = $_POST['mark'];
$date = date("Y-m-d H:i:s");

if ($mark == 0) {
	$result = array(
    	'answer' => 'Забыл поставить :)',
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
	exit();
};


$hostname = "localhost";
$username = "u1030536_default";
$password = "_!Hfp9VB";
$db_name = "u1030536_default";


$connect = mysqli_connect($hostname, $username, $password, $db_name);
/*if (!$connect) {
      die("Connection failed: " . mysqli_connect_error());
}
 
echo "Connected successfully";
echo $ip, $mark, $date;
*/
$compare = "SELECT Ip FROM Marks WHERE Ip = '$ip'";
$require_compare = mysqli_query($connect, $compare);

/*if ($require_compare) {
       echo "Compare is send";
}	else {
	echo "Error Pizdec";
}*/

$result_compare = mysqli_fetch_assoc($require_compare);

if ($result_compare) {
	$result_2 = array(
    	'answer' => 'Вы уже голосовали',
    );

	echo json_encode($result_2);
	exit();
}	


$query = "INSERT INTO Marks (Ip, Mark, Date) VALUES ('$ip', '$mark', '$date')";


/*if (mysqli_query($connect, $query)) {
      echo "New record created successfully";
} else {
       echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}*/

mysqli_query($connect, $query);
mysqli_close($connect);

$result_3 = array(
    	'answer' => 'Спасибо за твой фидбэк',
    );

echo json_encode($result_3);


?>