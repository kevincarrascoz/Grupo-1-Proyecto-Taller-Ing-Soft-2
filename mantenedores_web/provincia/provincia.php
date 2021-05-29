<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <title>Mantenedor de Provincias</title>
</head>
<body>
    <div>
        <input type="text" placeholder="Ejem: Provincia del Bio Bio" id="nombre_provincia">
        <button onclick="ingresar_prov()">Guardar Datos</button>
    </div>
    <hr>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Nombre Provincia</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    require("conexion.php");
                    $consulta = "SELECT * FROM provincia";
                    $resultado = mysqli_query($conexion, $consulta);
                    while($row=mysqli_fetch_assoc($resultado)){
                        $cod_provincia = $row['codigo_provincia'];
                        $nombre_provincia = $row['nombre_provincia'];
                        echo "<tr>";
                        echo "<td>".$nombre_provincia."</td>";
                        echo "<td>
                                <input type='hidden' id='codigo_provincia' value='".$codigo_provincia."'>
                                <button onclick='eliminar_prov(".$codigo_provincia.")'>Eliminar</button>
                              </td>";
                        echo "<td>
                                <button><a href='/provincia/provincia.php?codigo_provincia=".$codigo_provincia."'>Editar</a></button>
                              </td>";
                        echo "</tr>";
                    }
                ?>
            </tbody>
        </table>
    </div>
    <script>
        function ingresar_prov(){
            var datos = {
                "nombre_provincia": $("#nombre_provincia").val(),
            };

            $.ajax({
                data: datos,
                url: '/provincia/ingresar.php',
                type: 'POST',
                success: function(){
                    console.log(datos);
                    location.reload();
                }
            })
        }

        function eliminar_prov(codigo_provincia){
            var datos = {
                "codigo_provincia": codigo_provincia,
            };
            $.ajax({
                data: datos,
                url: '/provincia/eliminar.php',
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