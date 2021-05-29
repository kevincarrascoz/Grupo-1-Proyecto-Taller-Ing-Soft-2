<?php
    require("conexion.php");
    $codigo_region = $_POST['codigo_region'];
    $nombre_region = $_POST['nombre_region'];
    $update = "UPDATE region SET nombre_region = '$nombre_region' WHERE codigo_region = '$codigo_region'";
    $resultado = mysqli_query($conexion, $update);
    header("Location: /region/region.php");
?>