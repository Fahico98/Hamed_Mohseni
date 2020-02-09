<?php

require_once 'conexion.php';

$cnx = conectar();

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$contrasegnia = $_POST['contrasegnia'];
$cedula = $_POST['cedula'];
$celular = $_POST['celular'];
$fechaNacimiento = date("Y-m-d", strtotime($_POST['fechaNacimiento']));
$genero = $_POST['genero'];
$eps = $_POST['eps'];

$sql = "INSERT INTO persona VALUES ({$cedula}, '{$nombre}', '{$correo}', '{$contrasegnia}', {$celular},1, '{$fechaNacimiento}', '{$genero}', '{$eps}')";

echo $cnx->query($sql) == TRUE;

