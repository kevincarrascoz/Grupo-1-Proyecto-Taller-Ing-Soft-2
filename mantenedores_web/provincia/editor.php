<?php
    require("conexion.php");
    $codigo_provincia = $_POST['codigo_provincia'];
    $nombre_provincia = $_POST['nombre_provincia'];
    $update = "UPDATE provincia SET nombre_provincia = '$nombre_provincia' WHERE codigo_provincia = '$codigo_provincia'";
    $resultado = mysqli_query($conexion, $update);
    header("Location: /provincia/provincia.php");
?>