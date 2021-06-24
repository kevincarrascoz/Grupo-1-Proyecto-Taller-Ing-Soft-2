<?php
    $conexion = mysqli_connect("localhost", "root", " ", "tis2_proyecto");
    if(mysqli_connect_errno($conexion)){
        echo "Fallo la conexión a la base de datos ".mysqli_connect_error();
    }
?>