<?php 

session_start();
header("Location: ../");

session_unset();

setcookie("data-login", "", time() - (3600), "/");

?>