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
  
    $data11 = file_get_contents("php://input");
    if (isset($data11)) {
        $request = json_decode($data11);
		$id_publicacion = $request->id_publicacion;
        $correo = $request->correo;
        $nota = $request->nota;
	}
    
  
$consulta = "SELECT * FROM puntuacion WHERE id_publicacion='$id_publicacion' AND correo='$correo'";
$resultado = mysqli_query($con, $consulta);
if(mysqli_num_rows($resultado)>0){
    $response= "Valorar exitoso";
}else{
    $sql = "INSERT INTO puntuacion (id_puntuacion, id_publicacion, correo, estrellas)
    VALUES ('', '$id_publicacion','$correo','$nota')";

    if ($con->query($sql) === TRUE) {
        $response= "Valorar exitoso";
    
    } else {
    $response= "Error: " . $sql . "<br>" . $db->error;
    }   
        if($nota==1){
            $sql = "UPDATE puntuacion_pub SET estrellas_uno=(SELECT estrellas_uno FROM puntuacion_pub WHERE id_publicacion='$id_publicacion')+1 WHERE id_publicacion='$id_publicacion'";
            if ($con->query($sql) === TRUE) {
                $response= "Valorar exitoso";
            
            } else {
            $response= "Error: " . $sql . "<br>" . $db->error;
            } 
        }
        elseif($nota==2){
            $sql = "UPDATE puntuacion_pub SET estrellas_dos=(SELECT estrellas_dos FROM puntuacion_pub WHERE id_publicacion='$id_publicacion')+1 WHERE id_publicacion='$id_publicacion'";
            if ($con->query($sql) === TRUE) {
                $response= "Valorar exitoso";
            
            } else {
            $response= "Error: " . $sql . "<br>" . $db->error;
            } 
        }
        elseif($nota==3){
            $sql = "UPDATE puntuacion_pub SET estrellas_tres=(SELECT estrellas_tres FROM puntuacion_pub WHERE id_publicacion='$id_publicacion')+1 WHERE id_publicacion='$id_publicacion'";
            if ($con->query($sql) === TRUE) {
                $response= "Valorar exitoso";
            
            } else {
            $response= "Error: " . $sql . "<br>" . $db->error;
            } 
        }
        elseif($nota==4){
            $sql = "UPDATE puntuacion_pub SET estrellas_cuatro=(SELECT estrellas_cuatro FROM puntuacion_pub WHERE id_publicacion='$id_publicacion')+1 WHERE id_publicacion='$id_publicacion'";
            if ($con->query($sql) === TRUE) {
                $response= "Valorar exitoso";
            
            } else {
            $response= "Error: " . $sql . "<br>" . $db->error;
            } 
        }
        elseif($nota==5){
            $sql = "UPDATE puntuacion_pub SET estrellas_cinco=(SELECT estrellas_cinco FROM puntuacion_pub WHERE id_publicacion='$id_publicacion')+1 WHERE id_publicacion='$id_publicacion'";
            if ($con->query($sql) === TRUE) {
                $response= "Valorar exitoso";
            
            } else {
            $response= "Error: " . $sql . "<br>" . $db->error;
            } 
        }
}
        
    echo json_encode($response);

?>
