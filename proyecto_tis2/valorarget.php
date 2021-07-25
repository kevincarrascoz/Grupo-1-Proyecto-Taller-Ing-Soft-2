<?php
    include 'config.php';
    include 'utils.php';

    $dbConn =  connect($db);
    if($_SERVER['REQUEST_METHOD']=='GET'){
        if(isset($_GET['id_publicacion'])){
            $sql = $dbConn->prepare("SELECT *
                                    FROM puntuacion_pub
                                    WHERE id_publicacion =:id_publicacion");
            $sql->bindValue(':id_publicacion', $_GET['id_publicacion']);
            $sql->execute();
            header("HTTP/1.1 200 OK");
            echo json_encode(  $sql->fetch(PDO::FETCH_ASSOC)  );
            exit();
        }
    }
?>