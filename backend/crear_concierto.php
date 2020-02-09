<?php

require_once 'conexion.php';

$cnx = conectar();

$nombre = $_POST['nombre'];
$lugar = $_POST['lugar'];
$hora = $_POST['hora'];
$fecha = $_POST['fecha'];

$sql = "INSERT INTO concierto VALUES ('{$fecha}', '{$nombre}', {$hora}, '{$lugar}')";

echo $cnx->query($sql) == TRUE;
