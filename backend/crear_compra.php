<?php

require_once 'conexion.php';

$cnx = conectar();

$cedula = $_POST['cedula'];
$cantidad = $_POST['cantidad'];
$concierto = $_POST['concierto'];
$zona = $_POST['zona'];
$reservado = $_POST['reservado'];
$precio = $_POST['precio'];


$sql = "SELECT cupos FROM zona WHERE numero = {$zona} AND cupos >= {$cantidad}";

$resultado = $cnx->query($sql)->fetch_all(MYSQLI_ASSOC);

if (count($resultado) > 0){

    $sql = "SELECT SUM(cantidad) AS total FROM persona_has_concierto WHERE zona_numero = {$zona}";

    $resultado_suma = $cnx->query($sql)->fetch_all(MYSQLI_ASSOC);

    $total = $resultado[0]["cupos"] - $cantidad - $resultado_suma[0]["total"];

    if ($total >= 0){

        $sql = "INSERT INTO persona_has_concierto VALUES ({$cedula}, '{$concierto}', {$cantidad}, {$reservado}, {$zona}, {$precio})";

        echo $cnx->query($sql) == TRUE;
    } else {
        echo "NO_HAY_CUPOS";
    }
} else {
    echo "CAPACIDAD_INSUFICIENTE";
}


