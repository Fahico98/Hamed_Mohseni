<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Boletas</title>
    <link rel="icon" href="imagenes/ticket.png">
    <link rel="stylesheet" media="all" type="text/css" href="css/general.css">
    <link rel="stylesheet" media="all" type="text/css" href="css/plataforma-admin.css">
    <link rel="stylesheet" media="all" type="text/css" href="css/modal-window.css">
    <!-- link rel="stylesheet" media="all" type="text/css" href="css/banner.css" -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
        integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI=" crossorigin="anonymous" />
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
    
    <sec class="cambio-precios">
       
        <h2>MODIFICAR COSTOS</h2>
        
        <form action="#" class="ingre-concert" id="buscarConcierto">
            <p>Ingrese el nombre del concierto: </p>
            <input type="text" placeholder="Nombre del concierto" id="nombreConcierto">
            <input type="submit" name="Seleccionar-concierto" value="Seleccionar" id="btn-selecConcert">
        </form>
        
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
                <il><img src="imagenes/opc-rosado.png">$$$$$$</il>
                <il><img src="imagenes/opc-morado.png">$$$$$$</il>
                <il><img src="imagenes/opc-azul.png">$$$$$$</il>
                <il><img src="imagenes/pal-rojo.png">$$$$$$</il>
                <il><img src="imagenes/pal-dorado.png">$$$$$$</il>
                <il><img src="imagenes/pal-verde.png">$$$$$$</il>
                </ul>
            </div>
        </sec>
        
        <sec class="form-cambioPrecio">
            <form action="">
                <p style="color:white; margin-left:10%;">Seleccione la zona</p>
                <select name="Genero">
                    <option>305-315</option>
                    <option>303-304/316-317</option>
                    <option>301-302/318-319</option>
                    <option>206-209/211-214</option>
                    <option>202-205/215-218</option>
                    <option>201/209</option>
                    <option>Palco plata</option>
                    <option>Palco Oro</option>
                    <option>Palco Diamante</option>
                </select> <p>Disponibles: XX</p><!--funcion php con la base de datos que indique el dato-->
                <p>Ingrese el nuevo costo: </p>
                <input type="text" placeholder="Nuevo precio" name="nuevo-precio">
                <input type="submit" name="Confirmar" value="Confirmar" id="btn-confirmar" disabled>
            </form>
        </sec>
    </sec>
    
    <sec class="agregar-vip">
        <h2>AGREGAR USUARIO VIP</h2>
        <form action="" class="form-agregar-vip">
            <p>Ingrese el nombre del usuario: </p>
            <input type="text" placeholder="Usuario" name="usuario-vip">
            <input type="submit" name="Seleccionar-concierto" value="Agregar" id="btn-agregarVip" disabled>
        </form>
    </sec>
    
    <sec class="agregar-concierto">
        <h2>AGREGAR CONCIERTO</h2>
        
        <form class="form-datos-concierto" id="frmAgregarConcierto" method="POST">
            <p>Nombre del concierto:</p>
            <input type="text" placeholder="Nombre concierto" name="Nom_Concert" id="nombre">
            <p>Fecha:</p>
            <input type="date" placeholder="Fecha del concierto" name="fecha_Concierto" id="fecha">
            <p>Hora (Formato Militar):</p>
            <input type="number" placeholder="HH:MM" name="Hora-concierto" min="1" max="24" id="hora">
            <p>Nombre del lugar del concierto:</p>
            <input type="text" placeholder="Lugar" name="lugar-concert" id="lugar">

            <input type="submit" name="Agregar-newConcert" value="Agregar" id="btn-Agre-NewConcert">
        </form>
        
        <form action="" class="form-agregarArtista">
            <p>Seleccione el nombre del concierto: </p>
            <input type="text" placeholder="Concierto" name="nuevo-Concert">
            <p>Ingrese el nombre del artista: </p>
            <input type="text" placeholder="Nombre artista" name="nuevo-Concert">
            <input type="submit" name="btn-Agregar-Artista" value="Agregar" id="btn-agregarArtist" disabled>
        </form>
    </sec>

    <button id="myBtn" hidden>Open Modal</button>
    <div id="myModal" class="modal">
        <div class="modal-content">
        <span class="close">&times;</span>
            <p id="textoModal" style="color: black;">Numero de cedula o contraseña incorrectas...!</p>
        </div>
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js/concierto.js"></script>
    <script src="js/hash.js"></script>

</body>
</html>