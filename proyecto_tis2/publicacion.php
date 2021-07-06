<?php
    include 'config.php';
    include 'utils.php';

    $dbConn =  connect($db);
    if($_SERVER['REQUEST_METHOD']=='GET'){
        if(isset($_GET['id_publicacion'])){
            $sql = $dbConn->prepare("SELECT pub.id_publicacion, pub.descripcion, pub.fecha_publicacion, pub.horario, pub.precio, pub.edad_usuario, u.correo, u.nombre, u.apellido, u.telefono, of.nombre_oficio, co.nombre_comuna
                                    FROM publicacion pub, usuario u, oficio of, comuna co
                                    WHERE pub.correo = u.correo
                                    AND pub.id_oficio = of.id_oficio
                                    AND u.codigo_comuna = co.codigo_comuna
                                    AND pub.id_publicacion =:id_publicacion");
            $sql->bindValue(':id_publicacion', $_GET['id_publicacion']);
            $sql->execute();
            header("HTTP/1.1 200 OK");
            echo json_encode(  $sql->fetch(PDO::FETCH_ASSOC)  );
            exit();
        }
    }
?>