<?php

session_start();

if(isset($_COOKIE["data-login"])){

    //$id = $_COOKIE["data-login"];
    echo $_COOKIE["data-login"] . "'" . $_COOKIE["data-username"];

} else {
    //setcookie("data-login", $datalogin, time() + (86400)*365, "/");
    echo 0;
}

?>