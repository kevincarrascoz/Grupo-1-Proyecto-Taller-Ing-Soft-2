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
      $sql = $dbConn->prepare("SELECT * FROM oficio where id_oficio=:id_oficio");
      $sql->bindValue(':id_oficio', $_GET['id_oficio']);
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetch(PDO::FETCH_ASSOC)  );
      exit();
	  }
    else {
      //Mostrar lista de post
      $sql = $dbConn->prepare("SELECT * FROM oficio");
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode( $sql->fetchAll(PDO::FETCH_ASSOC)  );
      exit();
	}
}


?>
      