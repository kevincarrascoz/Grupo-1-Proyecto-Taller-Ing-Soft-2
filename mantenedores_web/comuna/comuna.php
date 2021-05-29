<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <title>Mantenedor de Comunas</title>
</head>
<body>
    <div>
        <label for="nombre_comuna">Nombre Comuna: </label>
        <input type="text" placeholder="Ejem: Chillán" id='nombre_comuna'>
        <button onclick="ingresar_comuna()">Guardar Datos</button>
    </div>
    <hr>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Nombre Comuna</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    require("conexion.php");
                    $consulta = "SELECT * FROM comuna";
                    $resultado = mysqli_query($conexion, $consulta);
                    while($row=mysqli_fetch_array($resultado)){
                        $codigo_comuna = $row['codigo_comuna'];
                        $nombre_comuna = $row['nombre_comuna'];
                        echo "<tr>
                                <td>".$nombre_comuna."</td>
                                <td>
                                    <input type='hidden' id='codigo_comuna' value='".$codigo_comuna."'>
                                    <button onclick='eliminar_comuna(".$codigo_comuna.")'>Eliminar</button>
                                </td>
                                <td>
                                    <button><a href='/comuna/editar.php?codigo_comuna=".$codigo_comuna."'>Editar</a></button>
                                </td>
                              </tr>";
                    }
                ?>
            </tbody>
        </table>
    </div>
    <script>
        function ingresar_comuna(){
            var datos = {
                "nombre_comuna": $("#nombre_comuna").val(),
            };
            $.ajax({
                data: datos,
                url: '/comuna/ingresar.php',
                type: 'POST',
                success: function(){
                    console.log(datos);
                    location.reload();
                }
            });
        }

        function eliminar_comuna(codigo_comuna){
            var datos = {
                "codigo_comuna": codigo_comuna,
            };
            $.ajax({
                data: datos,
                url: '/comuna/eliminar.php',
                type: 'POST',
                success: function(){
                    console.log(datos);
                    location.reload();
                }
            });
        }
    </script>
</body>
</html>