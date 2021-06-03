<?php
/*
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
		$descripcion = $request->descripcion;
		$horario = $request->horario;
		$precio = $request->precio;
		$categoria = $request->categoria;
        $certificado = $request->certificado;     
 
	}





//$sql = "INSERT INTO publicacion (descripcion, horario, precio, categoria, certificado)
//VALUES ('$descripcion', '$horario', '$precio', '$categoria', '$certificado')";



if ($con->query($sql) === TRUE) {
	$response= "Registration successfull";
   
} else {
   $response= "Error: " . $sql . "<br>" . $db->error;
}
 
  
	echo json_encode( $response);

 */
?>
