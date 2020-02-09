
<?php

   require_once 'conexion.php';

   $cnx = conectar();

   $sql = "SELECT * FROM concierto";
   $conciertos = $cnx->query($sql)->fetch_all(MYSQLI_ASSOC);

   echo json_encode($conciertos);

?>