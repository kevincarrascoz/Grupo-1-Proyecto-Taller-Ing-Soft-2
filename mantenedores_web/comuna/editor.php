<?php
    require("conexion.php");
    $codigo_comuna = $_POST['codigo_comuna'];
    $nombre_comuna = $_POST['nombre_comuna'];
    $update = "UPDATE comuna SET nombre_comuna = '$nombre_comuna' WHERE codigo_comuna = '$codigo_comuna'";
    $resultado = mysqli_query($conexion, $update);
    header("Location: /comuna/comuna.php");
?>