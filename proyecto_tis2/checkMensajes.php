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
      $sql = $dbConn->prepare("SELECT usuario.nombre, usuario.apellido, usuario.correo, chatea.id_chat, chat.id_publicacion FROM usuario, chatea, chat where chatea.id_chat IN (SELECT id_chat FROM chatea WHERE chatea.correo='$correo') and chatea.correo!='$correo' and chatea.correo=usuario.correo and chat.id_chat=chatea.id_chat");
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetchAll(PDO::FETCH_ASSOC)  );
      exit();



?>