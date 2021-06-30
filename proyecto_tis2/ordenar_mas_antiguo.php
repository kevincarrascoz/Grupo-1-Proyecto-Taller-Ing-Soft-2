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
      $sql = $dbConn->prepare("SELECT * FROM publicacion, usuario, oficio 
                               where id_publicacion=:id_publicacion 
                               and usuario.correo=publicacion.correo 
                               and oficio.id_oficio=publicacion.id_oficio
                               order by publicacion.fecha_publicacion asc");
      $sql->bindValue(':id_publicacion', $_GET['id_publicacion']);
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetch(PDO::FETCH_ASSOC)  );
      exit();
	  }
    else {
      //Mostrar lista de post
      $sql = $dbConn->prepare("SELECT * FROM publicacion,usuario,oficio 
                               where usuario.correo=publicacion.correo 
                               and oficio.id_oficio=publicacion.id_oficio
                               order by publicacion.fecha_publicacion asc");
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode( $sql->fetchAll()  );
      exit();
	}
}


?>