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
    $telefono_nuevo = $request->telefono_nuevo;
}

$sql = "UPDATE usuario SET telefono = '$telefono_nuevo' WHERE correo = '$correo'";


if ($con->query($sql) === TRUE) {
$response= "Changes successfull";

} else {
$response= "Error: " . $sql . "<br>" . $db->error;
}


echo json_encode( $response);


?>