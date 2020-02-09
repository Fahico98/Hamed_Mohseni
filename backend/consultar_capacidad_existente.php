<?php

require_once 'conexion.php';

$cnx = conectar();

$zona = $_GET["zona"];
$concierto = $_GET["nombreConcierto"];

$sql = "SELECT (Z.cupos - SUM(P.cantidad)) AS capacidad_existente FROM zona Z INNER JOIN persona_has_concierto P ON Z.numero = P.zona_numero WHERE Z.numero = {$zona} AND P.concierto = '{$concierto}'";

$resultado = $cnx->query($sql)->fetch_all(MYSQLI_ASSOC);



if($resultado[0]["capacidad_existente"] && count($resultado) > 0){
    echo $resultado[0]["capacidad_existente"];
} else {
    $sql = "SELECT cupos FROM zona WHERE numero = {$zona}";

    echo $cnx->query($sql)->fetch_all(MYSQLI_ASSOC)[0]["cupos"];
}
