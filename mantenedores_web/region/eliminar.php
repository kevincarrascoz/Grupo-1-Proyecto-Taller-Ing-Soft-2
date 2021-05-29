<?php
    require("conexion.php");
    $cod_reg = $_POST['codigo_region'];
    $delete = "DELETE FROM region WHERE codigo_region = '$codigo_region'";
    $resultado = mysqli_query($conexion, $delete);
    header("Location: /region/region.php");
?>