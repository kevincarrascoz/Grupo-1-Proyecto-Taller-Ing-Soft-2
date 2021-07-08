<?php
include "config.php";
include "utils.php";


$dbConn =  connect($db);
$data = file_get_contents("php://input");
    if (isset($data)) {
        $request = json_decode($data);
		$id_chat = $request->id_chat;
	}
/*
  listar todos los posts o solo uno
 */
    
      //Mostrar un post
      $sql = $dbConn->prepare("SELECT * FROM mensaje where id_chat='$id_chat'");
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetchAll(PDO::FETCH_ASSOC)  );
      exit();



?>