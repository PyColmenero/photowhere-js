<?php

$request = $_SERVER['REQUEST_URI'];
$request = substr($request,12);
// $request = substr($request,16);
$request = explode("/",$request);
$root    = $request[1];

switch($root){
    case "popular":
        
        get_popular_locations();

        break;
    case "map":
        
        get_map_locations();

        break;
    case "near":
        
        get_near_locations();

        break;
    default:
        echo json_encode(array("error"=>"Bad Request"));
        break;
}


function get_map_locations(){

    include("DataBase.php");

    $database = new DataBase();
    $conexion = $database->getConexion();

    $sentencia = "SELECT idLocation, nameLocation, descriptionLocation, concat_ws(', ',cityLocation,countryLocation) address, latitudeLocation, longitudeLocation, googlemapsUrlLocation, creditsLocation,
                    (SELECT GROUP_CONCAT(nameTag SEPARATOR ', ') nameTag FROM location_tags JOIN tags ON idTag = idTagFK WHERE idLocation = idLocationFK ) tags,
                    (SELECT GROUP_CONCAT(urlPhoto SEPARATOR ', ') urlPhoto FROM photos WHERE idLocation = idLocationFK ) photos
                FROM locations";
            
    if ($rows = $conexion->query($sentencia)) {
        
        $response = array();
        foreach ($rows as $key => $row) {
            $id =  $row["idLocation"];
            $response[$id] = $row;
        }

        // send
        echo json_encode($response);

        // cerrar conexion
        $conexion->close();
    }

}
function get_popular_locations(){

    include("DataBase.php");

    $database = new DataBase();
    $conexion = $database->getConexion();

    $limit = (isset($_POST["limit"])) ? intval($_POST["limit"]) : 25;
    
    $sentencia = "SELECT idLocation, nameLocation, descriptionLocation, concat_ws(', ',cityLocation,countryLocation) address, latitudeLocation, longitudeLocation, googlemapsUrlLocation,
                    (SELECT GROUP_CONCAT(nameTag SEPARATOR ', ') nameTag FROM location_tags JOIN tags ON idTag = idTagFK WHERE idLocation = idLocationFK ) tags,
                    (SELECT GROUP_CONCAT(urlPhoto SEPARATOR ', ') urlPhoto FROM photos WHERE idLocation = idLocationFK ) photos
                FROM locations ORDER BY viewsLocation DESC LIMIT $limit;";
            
    if ($rows = $conexion->query($sentencia)) {
        
        $response = array();
        foreach ($rows as $key => $row) {
            $id =  $row["idLocation"];
            $response[$id] = $row;
        }

        echo json_encode($response);

        // cerrar conexion
        $conexion->close();
    }

}
function get_near_locations(){

    include("DataBase.php");
    
    if(isset($_POST["lat"]) && isset($_POST["lng"])){

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
            
            $response = array();
            foreach ($rows as $key => $row) {
                $id =  $row["idLocation"];
                $response[$id] = $row;
            }

            echo json_encode($response);

            // cerrar conexion
            $conexion->close();
        }

    } else {
        echo json_encode(array("error"=>"No parameters"));
    }

}