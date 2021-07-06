<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
        header('Content-Type:application/json');
    }
 
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
            header('Content-Type:application/json');         
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
            header('Content-Type:application/json');
 
        exit(0);
    }
 
  require "dbconnect.php";
  
    $data = file_get_contents("php://input");
    if (isset($data)) {
        $request = json_decode($data);
		$id_publicacion = $request->id_publicacion;
        $correo = $request->correo;
        $mensaje = $request->mensaje;
	}

    date_default_timezone_set('America/Santiago');
    $fecha_actual = date("Y-m-d H:i:s");

$sql = "INSERT INTO chat (id_chat, id_publicacion, fecha)
VALUES ('', '$id_publicacion', '$fecha_actual')";


if ($con->query($sql) === TRUE) {
	$response= $con->insert_id;

    $sql2 = "INSERT INTO chatea (id, correo, id_chat)
    VALUES ('', '$correo', '$response')";
    if ($con->query($sql2) === TRUE) {
        $sql3 = "INSERT INTO mensaje (id_mensaje, correo, id_chat, mensaje, fecha_mensaje, visualizacion)
        VALUES ('', '$correo', '$response', '$mensaje', '$fecha_actual', 'No vista')";
        if ($con->query($sql3) === TRUE) {

        }else{
            $response= "Error: " . $sql . "<br>" . $db->error;
        }



    }else{
        $response= "Error: " . $sql . "<br>" . $db->error;
    }






} else {
   $response= "Error: " . $sql . "<br>" . $db->error;
}
	echo json_encode($response);

 
?>