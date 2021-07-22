<?php
  include 'config.php';
  include 'utils.php';
  require 'dbconnect.php';

  $dbConn = connect($db);
  if($_SERVER['REQUEST_METHOD'] == 'GET'){
      if(isset($_GET['correo'])){
          $sql = $dbConn->prepare("SELECT pub.id_publicacion, pub.descripcion, pub.fecha_publicacion, pub.visitas, u.nombre, u.apellido, of.nombre_oficio, co.nombre_comuna, reg.nombre_region
                                   FROM publicacion pub, usuario u, oficio of, comuna co, provincia pr, region reg
                                   WHERE pub.correo = u.correo
                                   AND pub.id_oficio = of.id_oficio
                                   AND u.codigo_comuna = co.codigo_comuna
                                   AND co.codigo_provincia = pr.codigo_provincia
                                   AND pr.codigo_region = reg.codigo_region
                                   AND u.correo =:correo
                                   ORDER BY pub.fecha_publicacion DESC");
          $sql->bindValue(':correo', $_GET['correo']);
          $sql->execute();
          header("HTTP/1.1 200 OK");
          echo json_encode($sql->fetchAll(PDO::FETCH_ASSOC));
      }
  }
?>