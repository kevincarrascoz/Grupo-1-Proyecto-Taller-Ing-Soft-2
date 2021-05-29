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
            $codigo_comuna = $_GET['codigo_comuna'];
            $consulta = "SELECT * FROM comuna WHERE codigo_comuna = '$codigo_comuna'";
            $resultado = mysqli_query($conexion, $consulta);
            while($row=mysqli_fetch_assoc($resultado)){
                $nombre_comuna = $row['nombre_comuna'];
                echo "<input type='hidden' id='codigo_comuna' value='".$codigo_comuna."'>";
                echo "<input type='text' placeholder='Ejem: Los Angeles' id='nombre_comuna'>";
            }
        ?>
        <button onclick="editar_comuna()">Guardar Cambios</button>
    </div>
    <script>
        function editar_comuna(){
            var datos = {
                "codigo_comuna": $("#codigo_comuna").val(),
                "nombre_comuna": $("#nombre_comuna").val(),
            };

            $.ajax({
                data: datos,
                url: '/comuna/editor.php',
                type: 'POST',
                success: function(){
                    console.log(datos);
                    location.assign("/comuna/comuna.php");
                }
            });
        }
    </script>
</body>
</html>