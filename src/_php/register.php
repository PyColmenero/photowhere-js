<?php
    
    include("connection.php");

    $con = mysqli_connect('45.13.252.52', $database_user, $database_pasw);
    mysqli_select_db($con, $database_name);

    $name = $_POST['username'];
    $pass = $_POST['password']; 

    $s = "SELECT * FROM $usertable WHERE nameUser = '$name'";
    $result = mysqli_query($con, $s);
    $num = mysqli_num_rows($result);
    
    $output = "2";

    if($num != 0)
    {
        $output = "Username is taken";
        echo $output;
    }
    else
    {

        $sentencia = "INSERT $usertable VALUES(NULL, '$name', '$pass', NULL, NOW());";

        if (mysqli_query($con, $sentencia)) {

            include("login.php");
            $output = "0". $name;
            login($name, $pass);

        } else {

            $output = "-Error occurred: " . mysqli_error($con);
            echo $output;
        }
    }
?>
    