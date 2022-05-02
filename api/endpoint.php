<?php

$request = $_SERVER['REQUEST_URI'];
// $request = substr($request,12); // change before gitpush
$request = substr($request, 16);
$request = explode("/", $request);
$root    = $request[0];

switch ($root) {
    case "popular":

        get_popular_locations();

        break;
    case "map":

        get_map_locations();

        break;
    case "near":

        get_near_locations();

        break;
    case "tag":

        get_tag_locations();

        break;
    case "profile":

        get_profile_locations();

        break;
    case "login":

        login();

        break;
    default:
        echo json_encode(array("error" => "Bad Request"));
        break;
}


function login() {

    if (isset($_POST["username"]) && isset($_POST["password"])) {

        include("DataBase.php");
        
        $username = $_POST["username"];
        $password = $_POST["password"];

        $database = new DataBase();
        $conexion = $database->getConexion();

        $sentencia = "SELECT idUser, nameUser FROM users WHERE nameUser = '$username' AND passwordUser = MD5('$password');";

        if ($rows = $conexion->query($sentencia)) {

            $numrows = mysqli_num_rows(($rows));

            if($numrows == 1){
                
                $row = $rows->fetch_assoc();

                echo json_encode(array("username"=>$row["nameUser"],"id"=>$row["idUser"]));

            } else {
                echo json_encode(array("error"=>"Username and password do not match"));
            }

            

        }
        // cerrar conexion
        $conexion->close();
    }
}
function get_profile_locations() {

    if (isset($_POST["id"])) {

        include("DataBase.php");
        
        $userId = $_POST["id"];

        $database = new DataBase();
        $conexion = $database->getConexion();

        $sentencia = "SELECT idLocation, nameLocation, descriptionLocation, concat_ws(', ',cityLocation,countryLocation) address, latitudeLocation, longitudeLocation, googlemapsUrlLocation, creditsLocation,
                        (SELECT GROUP_CONCAT(nameTag SEPARATOR ', ') nameTag FROM location_tags JOIN tags ON idTag = idTagFK WHERE idLocation = idLocationFK ) tags,
                        (SELECT GROUP_CONCAT(urlPhoto SEPARATOR ', ') urlPhoto FROM photos WHERE idLocation = idLocationFK ) photos
                    FROM locations
                    WHERE idUserPostedFK = $userId
                    LIMIT 100";

        if ($rows = $conexion->query($sentencia)) {

            $response = build_response_array($rows);

            echo json_encode($response);

        }
        // cerrar conexion
        $conexion->close();
    }
}
function get_map_locations() {


    include("DataBase.php");

    $database = new DataBase();
    $conexion = $database->getConexion();

    $sentencia = "SELECT idLocation, nameLocation, descriptionLocation, concat_ws(', ',cityLocation,countryLocation) address, latitudeLocation, longitudeLocation, googlemapsUrlLocation, creditsLocation, idUserPostedFK,
                    (SELECT GROUP_CONCAT(nameTag SEPARATOR ', ') nameTag FROM location_tags JOIN tags ON idTag = idTagFK WHERE idLocation = idLocationFK ) tags,
                    (SELECT GROUP_CONCAT(urlPhoto SEPARATOR ', ') urlPhoto FROM photos WHERE idLocation = idLocationFK ) photos
                FROM locations;";

    if ($rows = $conexion->query($sentencia)) {

        $response = build_response_array($rows);

        echo json_encode($response);

    }
    // cerrar conexion
    $conexion->close();


}
function get_tag_locations() {

    if (isset($_POST["tag"])) {

        include("DataBase.php");

        $database = new DataBase();
        $conexion = $database->getConexion();

        $limit = (isset($_POST["limit"])) ? intval($_POST["limit"]) : 25;
        $tag = $_POST["tag"];

        $sentencia = "SELECT idLocation, nameLocation, descriptionLocation, concat_ws(', ',cityLocation,countryLocation) address, latitudeLocation, longitudeLocation, googlemapsUrlLocation,
                    (SELECT GROUP_CONCAT(nameTag SEPARATOR ', ') nameTag FROM location_tags JOIN tags ON idTag = idTagFK WHERE idLocation = idLocationFK ) as 'tags',
                    (SELECT GROUP_CONCAT(urlPhoto SEPARATOR ', ') urlPhoto FROM photos WHERE idLocation = idLocationFK ) photos
                FROM locations 
                WHERE (SELECT GROUP_CONCAT(nameTag SEPARATOR ', ') nameTag FROM location_tags JOIN tags ON idTag = idTagFK WHERE idLocation = idLocationFK ) LIKE '%$tag%'
                ORDER BY viewsLocation DESC 
                LIMIT $limit;";

        if ($rows = $conexion->query($sentencia)) {

            $response = build_response_array($rows);

            echo json_encode($response);

        }
        // cerrar conexion
        $conexion->close();
    } else {
        echo json_encode(array("error" => "No parameters"));
    }

}
function get_popular_locations() {

    include("DataBase.php");

    $database = new DataBase();
    $conexion = $database->getConexion();

    $limit = (isset($_POST["limit"])) ? intval($_POST["limit"]) : 25;

    $sentencia = "SELECT idLocation, nameLocation, descriptionLocation, concat_ws(', ',cityLocation,countryLocation) address, latitudeLocation, longitudeLocation, googlemapsUrlLocation,
                    (SELECT GROUP_CONCAT(nameTag SEPARATOR ', ') nameTag FROM location_tags JOIN tags ON idTag = idTagFK WHERE idLocation = idLocationFK ) tags,
                    (SELECT GROUP_CONCAT(urlPhoto SEPARATOR ', ') urlPhoto FROM photos WHERE idLocation = idLocationFK ) photos
                FROM locations ORDER BY viewsLocation DESC LIMIT $limit;";

    if ($rows = $conexion->query($sentencia)) {

        $response = build_response_array($rows);

        echo json_encode($response);

    }
    // cerrar conexion
    $conexion->close();
}
function get_near_locations() {

    include("DataBase.php");

    if (isset($_POST["lat"]) && isset($_POST["lng"])) {

        $limit = (isset($_POST["limit"])) ? intval($_POST["limit"]) : 25;
        $lat = $_POST["lat"];
        $lng = $_POST["lng"];
        $dis = 0.2;

        $database = new DataBase();
        $conexion = $database->getConexion();

        $sentencia = "SELECT idLocation, nameLocation, descriptionLocation, concat_ws(', ',cityLocation,countryLocation) address, latitudeLocation, longitudeLocation, googlemapsUrlLocation,
                        (SELECT GROUP_CONCAT(nameTag SEPARATOR ', ') nameTag FROM location_tags JOIN tags ON idTag = idTagFK WHERE idLocation = idLocationFK ) tags,
                        (SELECT GROUP_CONCAT(urlPhoto SEPARATOR ', ') urlPhoto FROM photos WHERE idLocation = idLocationFK ) photos
                      FROM locations 
                      WHERE (latitudeLocation-$lat ) < $dis AND (latitudeLocation-$lat) > -$dis AND (longitudeLocation-$lng) < $dis AND (longitudeLocation-$lng) > -$dis
                      ORDER BY viewsLocation DESC 
                      LIMIT $limit;";

        if ($rows = $conexion->query($sentencia)) {

            $response = build_response_array($rows);

            echo json_encode($response);

        }
        // cerrar conexion
        $conexion->close();
    } else {
        echo json_encode(array("error" => "No parameters"));
    }
}


function build_response_array($rows){
    $response = array();
    foreach ($rows as $key => $row) {
        $tags = $row["tags"];
        $row["tags"] = explode(", ",$tags);

        $photos = $row["photos"];
        $row["photos"] = explode(", ",$photos);

        array_push($response, $row);
    }
    return $response;
}