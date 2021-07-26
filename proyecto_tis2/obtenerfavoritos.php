<?php
include "config.php";
include "utils.php";


$dbConn =  connect($db);
$data = file_get_contents("php://input");
    if (isset($data)) {
        $request = json_decode($data);
	}
  
      //Mostrar un post
      $sql = $dbConn->prepare("SELECT fav.id_publicacion, fav.correo  
                              FROM favoritos fav, publicacion pub, usuario u 
                              where fav.correo=u.correo 
                              and fav.id_publicacion=pub.id_publicacion");
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetchAll(PDO::FETCH_ASSOC)  );
      exit();



?>