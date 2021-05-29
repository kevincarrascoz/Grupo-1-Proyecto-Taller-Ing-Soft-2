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
            $codigo_provincia = $_GET['codigo_provincia'];
            $consulta = "SELECT * FROM provincia WHERE codigo_provincia = '$codigo_provincia'";
            $resultado = mysqli_query($conexion, $consulta);
            while($row=mysqli_fetch_assoc($resultado)){
                $nombre_provincia = $row['nombre_provincia'];
                echo "<input type='hidden' id='codigo_provincia' value='".$codigo_provincia."'>";
                echo "<input type='text' placeholder='Ejem: Provincia de Concepción' id='nombre_provincia'>";
            }
        ?>
        <button onclick="editar_prov()">Guardar Cambios</button>
    </div>
    <script>
        function editar_prov(){
            var datos = {
                "codigo_provincia": $("#codigo_provincia").val(),
                "nombre_provincia": $("#nombre_provincia").val(),
            };

            $.ajax({
                data: datos,
                url: '/provincia/editor.php',
                type: 'POST',
                success: function(){
                    console.log(datos),
                    location.assign("/provincia/provincia.php");
                }
            });
        }
    </script>
</body>
</html>