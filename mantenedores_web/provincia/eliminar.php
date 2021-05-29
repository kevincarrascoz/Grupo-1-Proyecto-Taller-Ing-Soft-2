<?php
    require("conexion.php");
    $codigo_provincia = $_POST['codigo_provincia'];
    $delete = "DELETE FROM provincia WHERE codigo_provincia = '$codigo_provincia'";
    $resultado = mysqli_query($conexion, $delete);
    header("Location: /provincia/provincia.php");
?>