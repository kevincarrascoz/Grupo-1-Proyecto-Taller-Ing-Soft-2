<?php
    require("conexion.php");
    $nombre_comuna = $_POST['nombre_comuna'];
    $insert = "INSERT INTO comuna(codigo_comuna, nombre_comuna) VALUES(NULL, '$nombre_comuna')";
    $resultado = mysqli_query($conexion, $insert);
    header("Location: /comuna/comuna.php");
?>