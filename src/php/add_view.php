<?php


include("./connection.php");

$con = mysqli_init();
$success = mysqli_real_connect($con, '45.13.252.52', $database_user, $database_pasw, $database_name, $database_port);


if($success)
{

    $id = $_POST["id"];
    
    // obtenemos nuestra ID
    $sql = mysqli_query($con, "SELECT * FROM photowhere_places WHERE idPlace = $id");
    $row = mysqli_fetch_row($sql);
    $views = $row[11];

    $views += 1;

    $sentencia = "UPDATE photowhere_places SET viewsPlace = $views WHERE idPlace = $id ";

    $con->query($sentencia);

    $con->close();

}

?>