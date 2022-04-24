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

            // SOLO UN POST
            if (isset($filter["id"])) {
                $id = $filter["id"];
                $sentencia = "SELECT * FROM photowhere_places WHERE idPlace = $id ";
            } else {
                // TODOS LOS POSTS DE UN USUARIO
                if (isset($filter["userID"])) {
                    $id = $filter["userID"];
                    $sentencia = "SELECT * FROM photowhere_places WHERE idUserFK = $id ORDER BY idPlace DESC";
                } else {
                    // LOS POSTS MAS CERCANOS
                    if (isset($filter["near"])) {
                        $near_filter = $filter["near"];
                        $max = $filter["max"];

                        if ($near_filter == "true") {
                            $lat = $filter["lat"];
                            $lng = $filter["lng"];
                            $sentencia .= "AND (latitudePlace-$lat ) < $dis AND (latitudePlace-$lat) > -$dis AND (longitudePlace-$lng) < $dis AND (longitudePlace-$lng) > -$dis ORDER BY viewsPlace DESC LIMIT $max";
                        }
                    } else {
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