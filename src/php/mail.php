<?php

include("./connection.php");
$con = mysqli_connect('45.13.252.52', $database_user, $database_pasw);
mysqli_select_db($con, $database_name);

$name = $_POST["name"];
$desc = $_POST["desc"];
$lat = $_POST["lat"];
$lng = $_POST["lng"];

$sentencia = "INSERT INTO contributions VALUES(NULL, '$name', '$desc', $lat, $lng);";

if (mysqli_query($con, $sentencia)) {

    echo false;

} else {

    $output = "-Error occurred: " . mysqli_error($con);
    echo $output;

}


?>