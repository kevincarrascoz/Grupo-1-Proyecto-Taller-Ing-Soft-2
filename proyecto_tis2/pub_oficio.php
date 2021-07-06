<?php
include "config.php";
include "utils.php";


$dbConn =  connect($db);

/*
  listar todos los posts o solo uno
 */
if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
    if (isset($_GET['id_oficio']))
    {
      //Mostrar un post
      $sql = $dbConn->prepare("SELECT pub.id_publicacion, pub.descripcion, pub.fecha_publicacion, u.nombre, u.apellido, of.nombre_oficio, co.nombre_comuna 
                               FROM publicacion pub, usuario u, oficio of, comuna co
                               where of.id_oficio=:id_oficio 
                               and u.correo=pub.correo 
                               and of.id_oficio=pub.id_oficio 
                               and u.codigo_comuna = co.codigo_comuna");
      $sql->bindValue(':id_oficio', $_GET['id_oficio']);
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetchAll(PDO::FETCH_ASSOC)  );
      exit();
	}
}


?>