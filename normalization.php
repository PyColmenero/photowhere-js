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


// $res = array();
// while ($row = $result->fetch_assoc()) {
//     $idPlace = $row["idPlace"];
//     $tags = $row["typePlace"];
//     $tags = explode("@",$tags);

//     for ($x=0; $x < count($tags); $x++) { 
//         $tag = $tags[$x];
//         $tag_id = array_search(strtolower($tag), $tags_list);
//         if(strlen($tag_id)==0){
            
//             if($tag=="Agua"){
//                 $tag_id=1;
//             } else if($tag=="Acantilados"){
//                 $tag_id=0;
//             } else if($tag=="Roca"){
//                 $tag_id=27;
//             } else if($tag=="Jardin"){
//                 $tag_id=14;
//             } else if($tag=="Animales"){
//                 $tag_id=48;
//             } else {
//                 echo $idPlace."</br>";
//             }
//         }
//         $tag_id++;
//         echo "INSERT INTO location_tags VALUES(NULL, $tag_id , $idPlace );</br>";
//     }
// }

$creditos = array(
    array('idPlace' => '11','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '12','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '13','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '14','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '15','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '16','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '19','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '20','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '21','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '22','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '23','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '24','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '25','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '26','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '27','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '29','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '30','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '31','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '32','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '33','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '34','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '35','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '36','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '37','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '38','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '39','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '40','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '44','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '45','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '46','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '47','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '50','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '51','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '52','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '53','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '54','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '55','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '56','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '57','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '58','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '59','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '60','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '61','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '62','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '63','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '64','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '65','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '66','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '67','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '68','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '69','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '70','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '71','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '72','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '73','socialMediaUserPlace' => 'i@edita_tu_realidad'),
    array('idPlace' => '75','socialMediaUserPlace' => 'i@cande_atinn'),
    array('idPlace' => '80','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '81','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '82','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '83','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '84','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '85','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '87','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '89','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '92','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '93','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '94','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '95','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '97','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '98','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '100','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '101','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '104','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '106','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '107','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '108','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '109','socialMediaUserPlace' => 'i@loic'),
    array('idPlace' => '110','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '111','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '112','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '113','socialMediaUserPlace' => 'tk@gianfribul'),
    array('idPlace' => '114','socialMediaUserPlace' => 'i@artthuro87'),
    array('idPlace' => '115','socialMediaUserPlace' => 'i@veg_mar'),
    array('idPlace' => '116','socialMediaUserPlace' => 'i@joanlluiscollfoto '),
    array('idPlace' => '117','socialMediaUserPlace' => 'i@toniant67'),
    array('idPlace' => '118','socialMediaUserPlace' => 'i@elmundoenmicamara'),
    array('idPlace' => '119','socialMediaUserPlace' => 'i@aniefer88'),
    array('idPlace' => '120','socialMediaUserPlace' => 'i@spain'),
    array('idPlace' => '121','socialMediaUserPlace' => 'i@eluniversofotografico '),
    array('idPlace' => '122','socialMediaUserPlace' => 'i@giovanni_giuseppe_sa'),
    array('idPlace' => '123','socialMediaUserPlace' => 'i@sterxel'),
    array('idPlace' => '124','socialMediaUserPlace' => 'i@placidofrancesca'),
    array('idPlace' => '125','socialMediaUserPlace' => 'i@la.maleta.de.juno'),
    array('idPlace' => '126','socialMediaUserPlace' => 'i@joseba.pamplona'),
    array('idPlace' => '127','socialMediaUserPlace' => 'i@conchipal'),
    array('idPlace' => '128','socialMediaUserPlace' => 'i@fred_rick_g'),
    array('idPlace' => '129','socialMediaUserPlace' => 'i@spain'),
    array('idPlace' => '130','socialMediaUserPlace' => 'i@viatgera_fotitos'),
    array('idPlace' => '131','socialMediaUserPlace' => 'i@viajaentusofa'),
    array('idPlace' => '132','socialMediaUserPlace' => 'i@anarodriguezvalle'),
    array('idPlace' => '134','socialMediaUserPlace' => 'i@marcmoraa'),
    array('idPlace' => '135','socialMediaUserPlace' => 'i@marcelinodiazzabala'),
    array('idPlace' => '136','socialMediaUserPlace' => 'i@vlcdiferente'),
    array('idPlace' => '137','socialMediaUserPlace' => 'i@rocioguijo'),
    array('idPlace' => '138','socialMediaUserPlace' => 'i@sergiotxekio'),
    array('idPlace' => '139','socialMediaUserPlace' => 'i@visitsalamanca'),
    array('idPlace' => '140','socialMediaUserPlace' => 'i@rastinvng'),
    array('idPlace' => '142','socialMediaUserPlace' => 'i@dianamiaus'),
    array('idPlace' => '143','socialMediaUserPlace' => 'i@viagens_de_mota'),
    array('idPlace' => '144','socialMediaUserPlace' => 'i@dimi.weber'),
    array('idPlace' => '145','socialMediaUserPlace' => 'i@visiedojv'),
    array('idPlace' => '146','socialMediaUserPlace' => 'i@dehnyse'),
    array('idPlace' => '149','socialMediaUserPlace' => 'i@spain'),
    array('idPlace' => '164','socialMediaUserPlace' => 'i@impressions5000'),
    array('idPlace' => '165','socialMediaUserPlace' => 'i@gabriella_rozsa'),
    array('idPlace' => '166','socialMediaUserPlace' => 'i@culiito_inquieto'),
    array('idPlace' => '167','socialMediaUserPlace' => 'i@engaliciamorate'),
    array('idPlace' => '168','socialMediaUserPlace' => 'i@javiermartinezqueralt'),
    array('idPlace' => '169','socialMediaUserPlace' => 'i@marinacano'),
    array('idPlace' => '170','socialMediaUserPlace' => 'i@cosmin'),
    array('idPlace' => '171','socialMediaUserPlace' => 'i@ortizmatobella'),
    array('idPlace' => '172','socialMediaUserPlace' => 'i@cylesvida'),
    array('idPlace' => '173','socialMediaUserPlace' => 'i@lariojaturismo'),
    array('idPlace' => '174','socialMediaUserPlace' => 'i@lau_foggtravel'),
    array('idPlace' => '175','socialMediaUserPlace' => 'i@thegingerwanderlust'),
    array('idPlace' => '176','socialMediaUserPlace' => 'i@yu_minchu'),
    array('idPlace' => '177','socialMediaUserPlace' => 'i@lucafroehlingsdorf'),
    array('idPlace' => '178','socialMediaUserPlace' => 'i@sterxel'),
    array('idPlace' => '179','socialMediaUserPlace' => 'i@christian'),
    array('idPlace' => '180','socialMediaUserPlace' => 'i@santiagormolina'),
    array('idPlace' => '181','socialMediaUserPlace' => 'i@joshuamellin'),
    array('idPlace' => '182','socialMediaUserPlace' => 'i@extremadura_tur'),
    array('idPlace' => '183','socialMediaUserPlace' => 'i@juditrh'),
    array('idPlace' => '184','socialMediaUserPlace' => 'i@norytravels'),
    array('idPlace' => '185','socialMediaUserPlace' => 'i@gonzaloaranao'),
    array('idPlace' => '186','socialMediaUserPlace' => 'i@islascanariasoficial'),
    array('idPlace' => '187','socialMediaUserPlace' => 'i@mimafons'),
    array('idPlace' => '188','socialMediaUserPlace' => 'i@mar_de_rinlo'),
    array('idPlace' => '189','socialMediaUserPlace' => 'i@betravelermyfriend'),
    array('idPlace' => '190','socialMediaUserPlace' => 'i@javiittc'),
    array('idPlace' => '191','socialMediaUserPlace' => 'i@andaluciaconexion'),
    array('idPlace' => '192','socialMediaUserPlace' => 'i@justcreative'),
    array('idPlace' => '193','socialMediaUserPlace' => 'i@arka_r'),
    array('idPlace' => '194','socialMediaUserPlace' => 'i@cristiandelgadofdez'),
    array('idPlace' => '195','socialMediaUserPlace' => 'i@borjapardoch'),
    array('idPlace' => '196','socialMediaUserPlace' => 'i@wkcalle'),
    array('idPlace' => '197','socialMediaUserPlace' => 'i@urbannizer'),
    array('idPlace' => '198','socialMediaUserPlace' => 'i@pabloprietoslife'),
    array('idPlace' => '199','socialMediaUserPlace' => 'i@flo_roundtheworld'),
    array('idPlace' => '200','socialMediaUserPlace' => 'i@fez1111'),
    array('idPlace' => '201','socialMediaUserPlace' => 'i@josebair'),
    array('idPlace' => '202','socialMediaUserPlace' => 'i@fran'),
    array('idPlace' => '203','socialMediaUserPlace' => 'i@dancaufield'),
    array('idPlace' => '204','socialMediaUserPlace' => 'i@joshuamellin'),
    array('idPlace' => '205','socialMediaUserPlace' => 'i@piliriuss'),
    array('idPlace' => '206','socialMediaUserPlace' => 'i@momentsofgregory'),
    array('idPlace' => '207','socialMediaUserPlace' => 'i@visitnavarra'),
    array('idPlace' => '208','socialMediaUserPlace' => 'i@pics__lu'),
    array('idPlace' => '209','socialMediaUserPlace' => 'i@joanlluiscollfoto'),
    array('idPlace' => '210','socialMediaUserPlace' => 'i@oscarharophotography'),
    array('idPlace' => '211','socialMediaUserPlace' => 'i@lariojaturismo'),
    array('idPlace' => '212','socialMediaUserPlace' => 'i@jeffreyherrero'),
    array('idPlace' => '213','socialMediaUserPlace' => 'i@javiergonzalez'),
    array('idPlace' => '214','socialMediaUserPlace' => 'i@megustanestoslugares'),
    array('idPlace' => '215','socialMediaUserPlace' => 'i@eiderdprado'),
    array('idPlace' => '216','socialMediaUserPlace' => 'i@comunitat_valenciana'),
    array('idPlace' => '217','socialMediaUserPlace' => 'i@erasmusinternship'),
    array('idPlace' => '218','socialMediaUserPlace' => 'i@gloriadama02'),
    array('idPlace' => '219','socialMediaUserPlace' => 'i@petiscosgalegos'),
    array('idPlace' => '220','socialMediaUserPlace' => 'i@lauhga'),
    array('idPlace' => '221','socialMediaUserPlace' => 'i@el_cielo_de_canarias'),
    array('idPlace' => '222','socialMediaUserPlace' => 'i@lafotoderober'),
    array('idPlace' => '223','socialMediaUserPlace' => 'i@arri'),
    array('idPlace' => '224','socialMediaUserPlace' => 'i@alexgarciaba'),
    array('idPlace' => '225','socialMediaUserPlace' => 'i@ontheshoots'),
    array('idPlace' => '226','socialMediaUserPlace' => 'i@diegoescobar1979'),
    array('idPlace' => '227','socialMediaUserPlace' => 'i@andonijaen'),
    array('idPlace' => '228','socialMediaUserPlace' => 'i@luanagazzara'),
    array('idPlace' => '229','socialMediaUserPlace' => 'i@franciscdegea'),
    array('idPlace' => '230','socialMediaUserPlace' => 'i@bubywan'),
    array('idPlace' => '231','socialMediaUserPlace' => 'i@ariadnaarbona'),
    array('idPlace' => '232','socialMediaUserPlace' => 'i@bribios'),
    array('idPlace' => '233','socialMediaUserPlace' => 'i@isastoy'),
    array('idPlace' => '234','socialMediaUserPlace' => 'i@muyociososvalladolid'),
    array('idPlace' => '235','socialMediaUserPlace' => 'i@ivanfle'),
    array('idPlace' => '236','socialMediaUserPlace' => 'i@betofrank'),
    array('idPlace' => '237','socialMediaUserPlace' => 'i@daniiribarzarra'),
    array('idPlace' => '238','socialMediaUserPlace' => 'i@bravebeartravels'),
    array('idPlace' => '239','socialMediaUserPlace' => 'i@aurore_alifanti'),
    array('idPlace' => '240','socialMediaUserPlace' => 'i@tommiiib'),
    array('idPlace' => '241','socialMediaUserPlace' => 'i@kikimagtravel'),
    array('idPlace' => '244','socialMediaUserPlace' => 'i@byannafabo'),
    array('idPlace' => '245','socialMediaUserPlace' => 'i@barcelonaarchitecture_'),
    array('idPlace' => '246','socialMediaUserPlace' => 'i@unafotoenmimaleta'),
    array('idPlace' => '247','socialMediaUserPlace' => 'i@raulalonso'),
    array('idPlace' => '248','socialMediaUserPlace' => 'i@frequena18'),
    array('idPlace' => '249','socialMediaUserPlace' => 'i@palmanostijeras'),
    array('idPlace' => '250','socialMediaUserPlace' => 'i@katethetraveller___'),
    array('idPlace' => '251','socialMediaUserPlace' => 'i@garsejuan'),
    array('idPlace' => '252','socialMediaUserPlace' => 'i@viajareselplan'),
    array('idPlace' => '253','socialMediaUserPlace' => 'i@islascanariasoficial'),
    array('idPlace' => '254','socialMediaUserPlace' => 'i@faby_top'),
    array('idPlace' => '255','socialMediaUserPlace' => 'i@francescoview'),
    array('idPlace' => '256','socialMediaUserPlace' => 'i@erika'),
    array('idPlace' => '257','socialMediaUserPlace' => 'i@nanasmind'),
    array('idPlace' => '258','socialMediaUserPlace' => 'i@mymalaga'),
    array('idPlace' => '259','socialMediaUserPlace' => 'i@cact_lanzarote'),
    array('idPlace' => '260','socialMediaUserPlace' => 'i@huescalamagia'),
    array('idPlace' => '261','socialMediaUserPlace' => 'i@montseferre'),
    array('idPlace' => '262','socialMediaUserPlace' => 'i@saulsantosfotografia'),
    array('idPlace' => '263','socialMediaUserPlace' => 'i@alvavilla_'),
    array('idPlace' => '265','socialMediaUserPlace' => 'i@antoniocarrillophoto'),
    array('idPlace' => '266','socialMediaUserPlace' => 'i@montseferre'),
    array('idPlace' => '267','socialMediaUserPlace' => 'i@rosa'),
    array('idPlace' => '268','socialMediaUserPlace' => 'i@shootwithjuan'),
    array('idPlace' => '269','socialMediaUserPlace' => 'i@nextination'),
    array('idPlace' => '270','socialMediaUserPlace' => 'i@sitiosdeespana'),
    array('idPlace' => '271','socialMediaUserPlace' => 'i@bertrandlanneau'),
    array('idPlace' => '272','socialMediaUserPlace' => 'i@yesica'),
    array('idPlace' => '273','socialMediaUserPlace' => 'i@turismosanfernando'),
    array('idPlace' => '274','socialMediaUserPlace' => 'i@chete78'),
    array('idPlace' => '275','socialMediaUserPlace' => 'i@chriswillan'),
    array('idPlace' => '276','socialMediaUserPlace' => 'i@olmg2010'),
    array('idPlace' => '277','socialMediaUserPlace' => 'i@06pepe69'),
    array('idPlace' => '278','socialMediaUserPlace' => 'i@rebeca_viajeros30'),
    array('idPlace' => '279','socialMediaUserPlace' => 'i@ego8284'),
    array('idPlace' => '280','socialMediaUserPlace' => 'i@_patxi_perez'),
    array('idPlace' => '281','socialMediaUserPlace' => 'i@fotografiando_el_eden'),
    array('idPlace' => '282','socialMediaUserPlace' => 'i@chefsolar'),
    array('idPlace' => '283','socialMediaUserPlace' => 'i@linodasilvaphotography'),
    array('idPlace' => '284','socialMediaUserPlace' => 'i@ricardortizph'),
    array('idPlace' => '285','socialMediaUserPlace' => 'i@ricardortizph'),
    array('idPlace' => '286','socialMediaUserPlace' => 'i@valdaran'),
    array('idPlace' => '287','socialMediaUserPlace' => 'i@zappa_'),
    array('idPlace' => '288','socialMediaUserPlace' => 'i@zeworld'),
    array('idPlace' => '289','socialMediaUserPlace' => 'i@manuelo_bo'),
    array('idPlace' => '290','socialMediaUserPlace' => 'i@viveandalucia'),
    array('idPlace' => '291','socialMediaUserPlace' => 'i@world_walkerz'),
    array('idPlace' => '292','socialMediaUserPlace' => 'i@dimi'),
    array('idPlace' => '293','socialMediaUserPlace' => 'i@sergioluquelopez'),
    array('idPlace' => '294','socialMediaUserPlace' => 'i@cristiandelgadofdez'),
    array('idPlace' => '295','socialMediaUserPlace' => 'i@travel__educates'),
    array('idPlace' => '296','socialMediaUserPlace' => 'i@gvaturisme'),
    array('idPlace' => '297','socialMediaUserPlace' => 'i@javito_yo'),
    array('idPlace' => '298','socialMediaUserPlace' => 'i@aldoori'),
    array('idPlace' => '299','socialMediaUserPlace' => 'i@francisgonsa'),
    array('idPlace' => '300','socialMediaUserPlace' => 'i@_antonio'),
    array('idPlace' => '301','socialMediaUserPlace' => 'i@xopet1969'),
    array('idPlace' => '302','socialMediaUserPlace' => 'i@bokehm0n'),
    array('idPlace' => '303','socialMediaUserPlace' => 'i@arqpatrimonial')
);


foreach ($creditos as $key => $credito) {
    $id = $credito["idPlace"];
    $social = $credito["socialMediaUserPlace"];
    echo "UPDATE locations SET creditsLocation = '$social' WHERE idLocation = $id;</br>";
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