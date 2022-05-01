<?php


$database_user = 'u254792697_coopolarway';
$database_pasw = 'ColmeHost06.';
$database_name = 'u254792697_mydaytoday';
$usertable = 'usertable_photowhere';

$database_port = '3306';

$con = mysqli_init();
$success = mysqli_real_connect($con, '45.13.252.52', $database_user, $database_pasw, $database_name, $database_port);

$sentencia = "SELECT idPlace, typePlace FROM photowhere_places;";
// $sentencia = "SELECT idPlace, namePlace, descriptionPlace, cityPlace, countryPlace, latitudePlace, longitudePlace, googleMapsURL, viewsPlace, datePostedPlace, idUserFK FROM photowhere_places;";

if (!$result = $con->query($sentencia)) {
    echo "No reults";
    exit;
}
$con->close();


$tags_list = [
    "acantilado",
    "mar",
    "abandonado",
    "bar",
    "basico",
    "castillo",
    "carretera",
    "color",
    "cascada",
    "estátua",
    "faro",
    "graffiti",
    "historico",
    "jardines",
    "local",
    "lujo",
    "monumentos",
    "montaña",
    "molinos",
    "naturaleza",
    "nieve",
    "playa",
    "puentes",
    "primaveral",
    "plaza",
    "pueblo",
    "rocas",
    "rural",
    "nolight",
    "urbano",
    "vistas",
    "vanguardia",
    "desierto",
    "tunel",
    "arboles",
    "museo",
    "rio",
    "azotea",
    "básico",
    "puente",
    "mirador",
    "embalse",
    "isla",
    "bosque",
    "teatro",
    "rascacielos",
    "escultura",
    "zoo",
    "ciudad",
    "sponsor"
];
// array_search('element', $array)


$res = array();
while ($row = $result->fetch_assoc()) {
    $idPlace = $row["idPlace"];
    $tags = $row["typePlace"];
    $tags = explode("@",$tags);

    for ($x=0; $x < count($tags); $x++) { 
        $tag = $tags[$x];
        $tag_id = array_search(strtolower($tag), $tags_list);
        if(strlen($tag_id)==0){
            
            if($tag=="Agua"){
                $tag_id=1;
            } else if($tag=="Acantilados"){
                $tag_id=0;
            } else if($tag=="Roca"){
                $tag_id=27;
            } else if($tag=="Jardin"){
                $tag_id=14;
            } else if($tag=="Animales"){
                $tag_id=48;
            } else {
                echo $idPlace."</br>";
            }
        }
        $tag_id++;
        echo "INSERT INTO location_tags VALUES(NULL, $tag_id , $idPlace );</br>";
    }
}

// $res = array();
// while ($row = $result->fetch_assoc()) {
//     $idPlace = $row["idPlace"];
//     $photos = $row["typePlace"];
//     $photos = explode("@",$photos);

//     for ($x=0; $x < count($photos); $x++) { 
//         $photo = $photos[$x];
//         echo "INSERT INTO photos VALUES(NULL, '$photo' , $idPlace );</br>";
//     }
// }

// $res = array();
// while ($row = $result->fetch_assoc()) {

//     $idPlace = $row["idPlace"];
//     $nameplace = $row["namePlace"];
//     $descriptionPlace = $row["descriptionPlace"];
//     $cityPlace = $row["cityPlace"];
//     $countryPlace = $row["countryPlace"];
//     $latitudePlace = $row["latitudePlace"];
//     $longitudePlace = $row["longitudePlace"];
//     $googleMapsURL = $row["googleMapsURL"];
//     $viewsPlace = $row["viewsPlace"];
//     $datePostedPlace = $row["datePostedPlace"];
//     $idUserFK = $row["idUserFK"];

//     $nameplace = str_replace("'","\'",$nameplace);
//     $descriptionPlace = str_replace("'","\'",$descriptionPlace);
//     $googleMapsURL = str_replace("'","\'",$googleMapsURL);

//     echo "INSERT INTO locations VALUES($idPlace, '$nameplace', '$descriptionPlace', '$cityPlace', '$countryPlace', $latitudePlace, $longitudePlace, '$googleMapsURL', $viewsPlace, '$datePostedPlace', 1 );</>";
// }


/*

SELECT * FROM locations WHERE idLocation = 94;
TAGS
SELECT idLocation, nameTag FROM locations JOIN location_tags ON idLocationFK = idLocation JOIN tags ON idTag = idTagFK WHERE idLocation = 94;
PHOTOS
SELECT idLocation, urlPhoto FROM locations JOIN photos ON idLocationFK = idLocation WHERE idLocation = 94;


SELECT canciones.idCancion, tituloCancion, (SELECT GROUP_CONCAT(nombreArtista SEPARATOR ', ')
 nombreArtista FROM cancionartista JOIN artistas ON idArtistaFK = idArtista JOIN canciones as canc ON idCancionFK = canc.idCancion WHERE canc.idCancion = canciones.idCancion ) a FROM canciones;
*/