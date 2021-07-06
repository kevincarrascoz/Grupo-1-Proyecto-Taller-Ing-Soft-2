<?php
include "config.php";
include "utils.php";


$dbConn =  connect($db);

/*
  listar todos los posts o solo uno
 */
if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
  //Mostrar lista de post
  $sql = $dbConn->prepare("SELECT pub.id_publicacion, pub.descripcion, pub.fecha_publicacion, u.nombre, u.apellido, of.nombre_oficio, co.nombre_comuna
                           FROM publicacion pub, usuario u, oficio of, comuna co
                           WHERE pub.correo = u.correo
                           AND pub.id_oficio = of.id_oficio
                           AND u.codigo_comuna = co.codigo_comuna;
                           ORDER BY pub.fecha_publicacion DESC");
  $sql->execute();
  header("HTTP/1.1 200 OK");
  echo json_encode( $sql->fetchAll(PDO::FETCH_ASSOC)  );
  exit();
	
}


?>