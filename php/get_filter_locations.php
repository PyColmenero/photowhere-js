<?php


include("./connection.php");

$con = mysqli_init();
$success = mysqli_real_connect($con, '45.13.252.52', $database_user, $database_pasw, $database_name, $database_port);

$dis = 0.2;

if ($success) {

    $sentencia = "SELECT * FROM photowhere_places WHERE idPlace > 0 ";

    if (isset($_POST["filter"])) {
        if ($_POST["filter"] != null) {

            $filter = $_POST["filter"];


            if (isset($filter["text"])) {
                $text_filter = $filter["text"];
                if (strlen($text_filter) > 0) {
                    $sentencia .= "AND (namePlace LIKE '%$text_filter%' OR descriptionPlace LIKE '%$text_filter%' OR cityPlace LIKE '%$text_filter%')";
                }
            }
            if (isset($filter["city"])) {
                $city_filter = $filter["city"];
                if (strlen($city_filter) > 0) {
                    $sentencia .= "AND cityPlace LIKE '%$city_filter%'";
                }
            }
            if (isset($filter["type"])) {
                $type_filter = $filter["type"];
                if (strlen($type_filter) > 0) {
                    $sentencia .= "AND typePlace LIKE '%$type_filter%'";
                }
            }
            if (isset($filter["orderby"])) {
                $order_filter = $filter["orderby"];
                $orderDir_filter = $filter["orderDir"];
                if (strlen($order_filter) > 0) {
                    $sentencia .= "ORDER BY $order_filter $orderDir_filter";
                }
            } else {
                $sentencia .= "ORDER BY viewsPlace DESC";
            }
            if (isset($filter["max"])) {
                $max = $filter["max"];
                $sentencia .= " LIMIT $max";
            }   
        }
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