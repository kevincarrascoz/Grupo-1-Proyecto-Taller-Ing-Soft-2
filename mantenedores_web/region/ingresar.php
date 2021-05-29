<?php
    require("conexion.php");
    $nombre_region = $_POST['nombre_region'];
    $insert = "INSERT INTO region(codigo_region, nombre_region) VALUES(NULL, '$nombre_region')";
    $resultado = mysqli_query($conexion, $insert);
    header("Location: /region/region.php");
?>