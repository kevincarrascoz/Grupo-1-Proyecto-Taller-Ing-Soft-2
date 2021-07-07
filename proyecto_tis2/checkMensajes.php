<?php
include "config.php";
include "utils.php";


$dbConn =  connect($db);
$data = file_get_contents("php://input");
    if (isset($data)) {
        $request = json_decode($data);
        $correo = $request->correo;
	}
/*
  listar todos los posts o solo uno
 */
    
      //Mostrar un post
      $sql = $dbConn->prepare("SELECT publicacion.correo as correo_publicacion, publicacion.id_publicacion, chat.id_chat, usuario.nombre, usuario.apellido FROM chatea, chat, publicacion, usuario where chatea.correo='$correo' and chatea.id_chat=chat.id_chat and chat.id_publicacion=publicacion.id_publicacion and usuario.correo=publicacion.correo");
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetchAll(PDO::FETCH_ASSOC)  );
      exit();



?>