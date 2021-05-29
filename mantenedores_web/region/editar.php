<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <title>Editor</title>
</head>
<body>
    <div>
        <?php
            require("conexion.php");
            $cod_region = $_GET['codigo_region'];
            $consulta = "SELECT * FROM region WHERE codigo_region = '$codigo_region'";
            $resultado = mysqli_query($conexion, $consulta);
            while($row=mysqli_fetch_assoc($resultado)){
                $nombre_region = $row['nombre_region'];
                echo "<input type='hidden' id='codigo_region' value='".$codigo_region."'>";
                echo "<input type='text' placeholder='Ejem: Bio Bio' id='nombre_region'>";
            }
        ?>
        <button onclick="editar_region()">Guardar Cambios</button>
    </div>
    <script>
        function editar_region(){
            var datos = {
                "codigo_region": $("#codigo_region").val(),
                "nombre_region": $("#nombre_region").val(),
            };
            $.ajax({
                data: datos,
                url: '/region/editor.php',
                type: 'POST',
                success: function(){
                    console.log(datos);
                    location.assign("/region/region.php");
                }
            })
        }
    </script>
</body>
</html>