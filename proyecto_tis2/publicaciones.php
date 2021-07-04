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
      $sql = $dbConn->prepare("SELECT * FROM publicacion, usuario, oficio, comuna where id_publicacion=:id_publicacion and usuario.correo=publicacion.correo and oficio.id_oficio=publicacion.id_oficio and usuario.codigo_comuna = comuna.codigo_comuna");
      $sql->bindValue(':id_publicacion', $_GET['id_publicacion']);
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetch(PDO::FETCH_ASSOC)  );
      exit();
	  }
    else {
      //Mostrar lista de post
      $sql = $dbConn->prepare("SELECT * FROM publicacion,usuario,oficio,comuna where usuario.correo=publicacion.correo and oficio.id_oficio=publicacion.id_oficio and usuario.codigo_comuna = comuna.codigo_comuna");
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode( $sql->fetchAll()  );
      exit();
	}
}


?>