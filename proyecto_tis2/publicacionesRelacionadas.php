<?php
include "config.php";
include "utils.php";


$dbConn =  connect($db);
$data7 = file_get_contents("php://input");
    if (isset($data7)) {
        $request = json_decode($data7);
        $id_publicacion = $request->id_publicacion_relacion;
        $id_oficio = $request->id_oficio1;
        $codigo_comuna = $request->codigo_comuna1;
	}

/*
  listar todos los posts o solo uno
 */
  //Mostrar lista de post
  $sql = $dbConn->prepare("SELECT pub.id_publicacion, pub.descripcion, pub.fecha_publicacion, pub.visitas, u.nombre, u.apellido, of.nombre_oficio, co.nombre_comuna, reg.nombre_region
  FROM publicacion pub, usuario u, oficio of, comuna co, provincia pr, region reg
  WHERE pub.correo = u.correo
  AND pub.id_oficio = '$id_oficio'
  AND of.id_oficio = '$id_oficio'
  AND u.codigo_comuna = '$codigo_comuna'
  AND co.codigo_comuna = '$codigo_comuna'
  AND co.codigo_provincia = pr.codigo_provincia
  AND pr.codigo_region = reg.codigo_region
  AND pub.id_publicacion != '$id_publicacion'
  ORDER BY pub.fecha_publicacion DESC");
  $sql->execute();
  header("HTTP/1.1 200 OK");
  echo json_encode( $sql->fetchAll(PDO::FETCH_ASSOC)  );
  exit();
	



?>