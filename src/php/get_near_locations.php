<?php


include("./connection.php");

$con = mysqli_init();
$success = mysqli_real_connect($con, '45.13.252.52', $database_user, $database_pasw, $database_name, $database_port);

$dis = 0.2;

if ($success) {

    $sentencia = "SELECT * FROM photowhere_places WHERE idPlace > 0 ";

    $lat = $_POST["lat"];
    $lng = $_POST["lng"];


    $sentencia .= "AND (latitudePlace-$lat ) < $dis AND (latitudePlace-$lat) > -$dis AND (longitudePlace-$lng) < $dis AND (longitudePlace-$lng) > -$dis ORDER BY viewsPlace DESC";
    

    if (isset($_POST["max"]) && $_POST["max"] != null) {
        $max = $_POST["max"];
        $sentencia .= " LIMIT $max";
    }   

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