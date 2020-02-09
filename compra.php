<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Boletas</title>
    <link rel="icon" href="imagenes/ticket.png">
    <link rel="stylesheet" media="all" type="text/css" href="css/general.css">
    <link rel="stylesheet" media="all" type="text/css" href="css/compra.css">
    <!-- link rel="stylesheet" media="all" type="text/css" href="css/banner.css" -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
        integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI=" crossorigin="anonymous" />

    <script src="js/cookies.js"></script>
    <script type="text/javascript">
        /*
        let inicioSesion = getCookie('inicio');
        
        if(!inicioSesion){
            window.location.href = "ingre-usu.html";
        }
        */
    </script>
</head>
<body>
    <header>
        <div class="logo"><img src="imagenes/ticket.png"></div>
        <div class="menu">
            <ul><a  href="index.html">inicio</a></ul>
            <ul><a>conciertos</a></ul>
            <ul><a>contactenos</a></ul>
            <ul><a href="regis.html">registrate</a></ul>
            <ul><a href="ingreso.html">ingreso</a></ul>
        </div>
    </header>
    
    <sec class="compra">
        <sec class="escenario">
           
            <div id="img-escenario">
            <img src="imagenes/escenario.png">
            </div>
            
            <!--LOS PRECIOS SE PONEN DE LA BASE DE DATOS-->
            <div id="precios">
                <ul>
                <il><img src="imagenes/opc-naranja.png">$$$$$$</il>
                <il><img src="imagenes/opc-ama.png">$$$$$$</il>
                <il><img src="imagenes/opc-verde.png">$$$$$$</il>
                </ul>
                
                <ul>
                <il><img src="imagenes/opc-rosado.png">$$$$$$</il>
                <il><img src="imagenes/opc-morado.png">$$$$$$</il>
                <il><img src="imagenes/opc-azul.png">$$$$$$</il>
                </ul>
                
                <ul>
                <il><img src="imagenes/pal-rojo.png">$$$$$$</il>
                <il><img src="imagenes/pal-dorado.png">$$$$$$</il>
                <il><img src="imagenes/pal-verde.png">$$$$$$</il>
                </ul>
            </div>
        </sec>
        
        <sec class="form-compra">
            <form id="frmComprar" method="post"> 
                <select name="nombre" id="nombre" style="width: 300px;">
                <?php
                    require_once 'backend/obtener_conciertos.php';
                ?>
                </select>
                <p>Lugar: </p><!--DE LA BASE DE DATOS-->
                <p style="color:white; margin-left:10%;">Seleccione su lugar y la cantidad de boletas que desea</p>
                <select name="zona" id="zona">
                    <option value="1">305-315</option>
                    <option value="2">303-304/316-317</option>
                    <option value="3">301-302/318-319</option>
                    <option value="4">206-209/211-214</option>
                    <option value="5">202-205/215-218</option>
                    <option value="6">201/209</option>
                    <option value="7">Palco plata</option>
                    <option value="8">Palco Oro</option>
                    <option value="9">Palco Diamante</option>
                </select> <p>Disponibles: <span id="disponibles"></span></p>
                <input type="number" placeholder="Cantidad" name="cantidad" id="cantidad" required>
                <p>Precio reserva: </p><span id="precioReserva"></span>
                <p>Precio de compra: </p><span id="precioCompra"></span>
                <div id="acomodar-btn">
                <input type="submit" name="Reservar" value="Reservar" id="btnReserva">
                <input type="submit" name="Comprar" value="Comprar" id="btnCompra">
                </div>
            </form>
        </sec>
    </sec>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js/compra.js"></script>
</body>
</html>