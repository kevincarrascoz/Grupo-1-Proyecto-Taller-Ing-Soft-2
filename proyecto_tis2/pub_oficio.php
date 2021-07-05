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
      $sql = $dbConn->prepare("SELECT * FROM publicacion, usuario, oficio, comuna where oficio.id_oficio=:id_oficio and usuario.correo=publicacion.correo and oficio.id_oficio=publicacion.id_oficio and usuario.codigo_comuna = comuna.codigo_comuna");
      $sql->bindValue(':id_oficio', $_GET['id_oficio']);
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetchAll()  );
      exit();
	}
}


?>