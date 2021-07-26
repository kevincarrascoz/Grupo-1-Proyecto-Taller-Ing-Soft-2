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
      $sql = $dbConn->prepare("SELECT pub.id_publicacion, pub.descripcion, pub.fecha_publicacion, pub.visitas, u.nombre, u.apellido, of.nombre_oficio, co.nombre_comuna, reg.nombre_region 
                               FROM publicacion pub, usuario u, oficio of, comuna co, provincia pr, region reg
                               where of.id_oficio=:id_oficio 
                               and u.correo=pub.correo 
                               and of.id_oficio=pub.id_oficio 
                               and u.codigo_comuna = co.codigo_comuna
                               and co.codigo_provincia = pr.codigo_provincia
                               and pr.codigo_region = reg.codigo_region");
      $sql->bindValue(':id_oficio', $_GET['id_oficio']);
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetchAll(PDO::FETCH_ASSOC)  );
      exit();
	}
}


?>