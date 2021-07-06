<?php
include "config.php";
include "utils.php";


$dbConn =  connect($db);

/*
  listar todos los posts o solo uno
 */
if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
    if (isset($_GET['id_publicacion']))
    {
      //Mostrar un post
      $sql = $dbConn->prepare("SELECT  c.id_comentario, c.comentario, c.fecha_comentario,c.id_publicacion, u.nombre, u.apellido
                               FROM  comentario c, usuario u
                               where c.id_publicacion =:id_publicacion
                               and u.correo=c.correo");
      $sql->bindValue(':id_publicacion', $_GET['id_publicacion']);
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetchAll(PDO::FETCH_ASSOC)  );
      exit();
	  }
}


?>