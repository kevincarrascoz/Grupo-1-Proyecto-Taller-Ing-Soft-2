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
		$correo = $request->correo;
		$descripcion = $request->descripcion;
		$horario = $request->horario;
		$precio = $request->precio;
        $oficio = $request->oficio;
        $edad = $request->edad;
	}

    date_default_timezone_set('America/Santiago');
    $fecha_actual = date("Y-m-d H:i:s");

$sql = "INSERT INTO publicacion (id_publicacion, correo, foto, certificado_oficio, descripcion, horario, precio, edad_usuario, id_oficio, fecha_publicacion, estado, visitas)
VALUES ('', '$correo', NULL, NULL, '$descripcion', '$horario', '$precio' , '$edad', '$oficio', '$fecha_actual', 'Activa', 0)";


if ($con->query($sql) === TRUE) {
    $response= $con->insert_id;
    $sql2 = "INSERT INTO puntuacion_pub (id_puntuacion_pub, id_publicacion, estrellas_cinco, estrellas_cuatro, estrellas_tres, estrellas_dos, estrellas_uno)
    VALUES ('', '$response', 0, 0, 0, 0, 0)";
    if($con->query($sql2) === TRUE){
        $response= "Public successfull";
    }else {
        $response= "Public successfull";
     }
   
} else {
   $response= "Public successfull";
}
 
  
	echo json_encode( $response);

 
?>
