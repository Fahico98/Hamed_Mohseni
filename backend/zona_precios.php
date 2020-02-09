<?php

require_once 'conexion.php';

$cnx = conectar();

$sql = "SELECT * FROM zona WHERE numero = " . $_GET['numero'];
$precios = $cnx->query($sql)->fetch_all(MYSQLI_ASSOC);

echo json_encode($precios[0]);
