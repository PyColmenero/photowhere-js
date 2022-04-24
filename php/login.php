<?php
    
    session_start();
    include("connection.php");
    
    $output = "Error connection";


    $name = $_POST['username'];
    $pass = $_POST['password']; 

    $output = login($name, $pass);
    
    echo $output;

    function login($name, $pass){
        
        include("connection.php");
        $con = mysqli_init();
        mysqli_real_connect($con, '45.13.252.52', $database_user, $database_pasw, $database_name, $database_port);
    

        $sentencia = "SELECT * FROM $usertable WHERE nameUser = '$name' AND passwordUser = '$pass'";
        $result = mysqli_query($con, $sentencia);
        $num = mysqli_num_rows($result);
        
        // obtenemos nuestra ID
        $id = mysqli_fetch_row($result); 
        if( $id != null) $id = $id[0];
    
        $output = "";
    
        if($num == 0)
        {
            $output = "-Username and passwords do not match.";
        }
        else
        {

            $output = $id."'".$name;

            //if($save == "true"){
            //setcookie("data-login", $datalogin, time() + (86400)*365, "/"); // 86400 = 1 day
            //setcookie("data-username", $name, time() + (86400)*365, "/");
            /*} else {
                $_SESSION["data-login"] = $datalogin;
                $output = $datalogin;
                setcookie("data-login", "", time() - (86400), "/");
            }*/
            

        }

        $con->close();
        return $output;
    }
