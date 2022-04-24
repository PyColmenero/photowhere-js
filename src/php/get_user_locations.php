<?php


include("./connection.php");

$con = mysqli_init();
$success = mysqli_real_connect($con, '45.13.252.52', $database_user, $database_pasw, $database_name, $database_port);

$dis = 0.2;

if ($success) {

    $id = $_POST["id"];
    $sentencia = "SELECT * FROM photowhere_places WHERE idUserFK = $id ORDER BY idPlace DESC";

 
    // echo $sentencia;

    if (!$result = $con->query($sentencia)) {
        echo "No reults";
        exit;
    }

    $res = array();
    while ($row = $result->fetch_assoc()) {
        array_push($res, $row);
    }

    $con->close();

    echo json_encode($res);
}

?>