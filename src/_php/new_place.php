<?php
    
session_start();
include("connection.php");

$con = mysqli_connect('45.13.252.52', $database_user, $database_pasw);
mysqli_select_db($con, $database_name);

$name = $_POST['namePlace'];
$description = $_POST['description']; 
$latitude = $_POST['latitude'];
$longitude = $_POST['longitude'];
$url = $_POST['url'];
$country = $_POST['countryPlace'];
$city = $_POST['cityPlace'];
$type = $_POST['types'];
$photos = $_POST['photos'];
$insta = $_POST['insta'];

// FORMAR SENTENCIA INSERT
echo $url . "<br>";
$url = str_replace('"', '%22', $url);
echo $url . "<br>";

$sentencia = 'INSERT photowhere_places VALUES(NULL,    
                                            "'.$name.'", 
                                            "'.$description.'", 
                                            "'.$latitude.'", 
                                            "'.$longitude.'", 
                                            "'.$url.'",
                                            "'.$country.'", 
                                            "'.$city.'", 
                                            "'.$type.'", 
                                            "'.$photos.'", 
                                            "'.$insta.'",
                                            10, 
                                            0, 
                                            NOW());';
echo $sentencia . "<br>";

$output = "2";

if (mysqli_query($con, $sentencia)) {

    $output = "<h1> Todo fachero </h1";

} else {

    $output = "-Error occurred: " . mysqli_error($con);

}


echo $output;

?>