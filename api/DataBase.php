<?php

class DataBase {

     // change before gitpush
    public $host = '45.13.252.52';
    public $username = 'u254792697_photowhere';
    public $password = 'PhotowhereContra06.';
    // public $host = 'localhost';
    // public $username = 'root';
    // public $password = '';
    public $name = 'u254792697_photowhere';
    public $conexion = null;

    public function __construct() {

        $this->conexion = new mysqli($this->host, $this->username, $this->password, $this->name);

        /* comprobar la conexión */
        if ($this->conexion->connect_errno) {
            printf("Falló la conexión: %s\n", $this->conexion->connect_error);
            exit();
        }
        
        $this->conexion->set_charset("utf8");


    }

    public function getConexion() {

        return $this->conexion;

    }
 

}