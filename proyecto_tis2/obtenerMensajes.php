<?php
include "config.php";
include "utils.php";


$dbConn =  connect($db);
$data = file_get_contents("php://input");
    if (isset($data)) {
        $request = json_decode($data);
		$id_publicacion = $request->id_publicacion;
        $correo = $request->correo;
	}
/*
  listar todos los posts o solo uno
 */
    
      //Mostrar un post
      $sql = $dbConn->prepare("SELECT * FROM chatea, chat, usuario, mensaje where chatea.correo='$correo' and chatea.id_chat=chat.id_chat and chatea.correo=usuario.correo and chat.id_publicacion='$id_publicacion' and usuario.correo=mensaje.correo and chat.id_chat=mensaje.id_chat");
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetchAll(PDO::FETCH_ASSOC)  );
      exit();



?>