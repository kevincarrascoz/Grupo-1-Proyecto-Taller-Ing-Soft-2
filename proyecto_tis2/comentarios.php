<?php
include "config.php";
include "utils.php";


$dbConn =  connect($db);

/*
  listar todos los posts o solo uno
 */
if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
    if (isset($_GET['id_comentario']))
    {
      //Mostrar un post
      $sql = $dbConn->prepare("SELECT * FROM  comentario, usuario,publicacion where id_comentario=:id_comentario and usuario.correo=comentario.correo and comentario.id_publicacion=publicacion.id_publicacion");
      $sql->bindValue(':id_comentario', $_GET['id_comentario']);
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetch(PDO::FETCH_ASSOC)  );
      exit();
	  }
    else {
      //Mostrar lista de post
      $sql = $dbConn->prepare("SELECT * FROM comentario,usuario,publicacion where usuario.correo=comentario.correo and comentario.id_publicacion=publicacion.id_publicacion");
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode( $sql->fetchAll()  );
      exit();
	}
}


?>