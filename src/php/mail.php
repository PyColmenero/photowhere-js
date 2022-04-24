<?php

$name = $_POST["name"];
$desc = $_POST["desc"];
$imgs = $_POST["imgs"];

$to = "pycolmenero@gmail.com";
$subject = "NUEVA CONTRIBUCIÓN";

$message = $name.": " .$desc. " \r\n";
for($x = 0; $x < count($imgs); $x++){
    $message .= "@@@@@@@@@@@@@@@@@@@". $imgs[$x] . "@@@@@@@@@@@@@@@@@@@";
}

$header = "From:pycolmenero@acolmenero.site \r\n";
$header .= "Cc:pycolmenero@acolmenero.site \r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text\r\n";

// echo $message;

$retval = mail($to, $subject, $message, $header);

if ($retval == true) {
    echo "Message sent successfully...";
} else {
    echo "Message could not be sent...";
}
?>