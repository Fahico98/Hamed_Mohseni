<?php

require_once 'conexion.php';

$cnx = conectar();

$sql = "SELECT * FROM concierto";
$personas = $cnx->query($sql)->fetch_all(MYSQLI_ASSOC);

foreach($personas as $key => $value){
    $nombre = $value["Nombre"];
    $fecha = $value["fecha"];
    $hora = $value["hora"];
    echo "<option value=\"{$nombre}\">{$nombre} ({$fecha} - {$hora})</option>";
}
