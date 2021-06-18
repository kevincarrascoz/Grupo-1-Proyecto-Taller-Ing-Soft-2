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
		$nombre = $request->nombre;
		$apellido = $request->apellido;
		$correo = $request->correo;
		$contrasena = $request->contrasena;
        $direccion = $request->direccion;
        $fecha_nacimiento = $request->fecha_nacimiento;
        $telefono = $request->telefono;
 
	}



$sql = "INSERT INTO usuario (correo, nombre, apellido, contrasena, direccion, fecha_nacimiento, codigo_comuna, telefono)
VALUES ('$correo', '$nombre', '$apellido', '$contrasena', '$direccion', '$fecha_nacimiento', 1 , '$telefono')";


if ($con->query($sql) === TRUE) {
	$response= "Registration successfull";
   
} else {
   $response= "Error: " . $sql . "<br>" . $db->error;
}
 
  
	echo json_encode( $response);

 
?>
