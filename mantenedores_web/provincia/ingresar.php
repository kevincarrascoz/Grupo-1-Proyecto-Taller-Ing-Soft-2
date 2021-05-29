<?php
    require("conexion.php");
    $nombre_provincia = $_POST['nombre_provincia'];
    $insert = "INSERT INTO provincia(codigo_provincia, nombre_provincia) VALUES(NULL, '$nombre_provincia')";
    $resultado = mysqli_query($conexion, $insert);
    header("Location: /provincia/provincia.php");
?>