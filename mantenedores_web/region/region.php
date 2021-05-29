<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <title>Mantenedor de Regiones</title>
</head>
<body>
    <div>
        <input type="text" placeholder="Ejem: Ñuble" id="nombre_region">
        <button onclick="ingresar_region()">Guardar Datos</button>
    </div>
    <div>
        <table>
            <thead>
                <th>Región</th>
                <th>Opciones</th>
            </thead>
            <tbody>
                <?php
                    require("conexion.php");
                    $consulta = "SELECT * FROM region";
                    $resultado = mysqli_query($conexion, $consulta);
                    while($row=mysqli_fetch_assoc($resultado)){
                        $codigo_region = $row['codigo_region'];
                        $nombre_region = $row['nombre_region'];
                        echo "<tr>
                                <td>".$nombre_region."</td>
                                <td><input type='hidden' id='codigo_region' value=".$codigo_region."></td>
                                <td><button onclick='eliminar_region(".$codigo_region.")'>Eliminar</button></td>
                                <td><button><a href='/region/editar.php?codigo_region=".$codigo_region."'>Editar</a></button></td>
                              <tr>";
                    }
                ?>
            </tbody>
        </table>
    </div>
    <script>
        function ingresar_region(){
            var datos = {
                "nombre_region": $("#nombre_region").val(),
            };
            $.ajax({
                data: datos,
                url: '/region/ingresar.php',
                type: 'POST',
                success: function(){
                    console.log(datos);
                    location.reload();
                }
            });
        }
        function eliminar_region(codigo_region){
            var datos = {
                "codigo_region": codigo_region,
            };
            $.ajax({
                data: datos,
                url: '/region/eliminar.php',
                type: 'POST',
                success: function(){
                    console.log(datos);
                    location.reload();
                }
            })
        }
    </script>
</body>
</html>