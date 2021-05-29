<?php
    require("conexion.php");
    $codigo_comuna = $_POST['codigo_comuna'];
    $delete = "DELETE FROM comuna WHERE codigo_comuna = '$codigo_comuna'";
    $resultado = mysqli_query($conexion, $delete);
    header("Location: /comuna/comuna.php");
?>