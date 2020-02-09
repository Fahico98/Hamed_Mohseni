$(document).ready(() =>{
    obtenerPrecios($('#zona').val());

    $('#zona').change(function() {
        obtenerPrecios($(this).val());
        capacidadExistente($('#nombre').val(), $('#zona').val());
    });

    $('#nombre').change(function() {
        capacidadExistente($('#nombre').val(), $('#zona').val());
    });

    capacidadExistente($('#nombre').val(), $('#zona').val());

    let which;

    $("input").click(function () {
        which = $(this).attr("id");
    });

    $('#frmComprar').submit((event) => {
        event.preventDefault();

        $cantidad = $('#cantidad').val();
        $concierto = $('#nombre').val();
        $zona = $('#zona').val();
        $precio = 0;
        $reservado = 1;
        if(which == 'btnReserva'){
            $precio = $('#precioReserva').text();
        } else {
            $precio = $('#precioCompra').text();
            $reservado = 0;
        }

        let boleta = {
            cedula: getCookie('cedula'),
            cantidad: $cantidad,
            concierto: $concierto,
            zona: $zona,
            precio: $precio,
            reservado: $reservado
        };

        let listaBoletas = new Lista();
        listaBoletas.insertar(boleta);

        $.ajax({
            url: 'backend/crear_compra.php',
            type: 'post',
            data: listaBoletas.buscarPorIndice(0).dato
        }).done((data) => {
            console.log(data);
        }).fail((data) => {
            console.log('fail', data);
        })
    });
});

function obtenerPrecios(numero){
    $.ajax({
        url: 'backend/zona_precios.php?numero=' + numero
    }).done((data) => {
        $zona = JSON.parse(data);

        $('#precioReserva').text($zona.precio_reserva);
        $('#precioCompra').text($zona.precio_compra);
    }).fail(() => {

    });
}

function capacidadExistente(nombreConcierto, zona){
    $.ajax({
        url: 'backend/consultar_capacidad_existente.php?nombreConcierto=' + nombreConcierto + "&zona=" + zona,
    }).done((data) => {
        $('#disponibles').text(data);
    }).fail((data) => {

    });
}

class NodoLista{
    constructor(dato, siguiente = null){
        this.dato = dato,
        this.siguiente = siguiente
    }
}

class Lista{
    constructor(){
        this.cabeza = null;
    }
}

Lista.prototype.insertar = function(dato){
    let nodoNuevo = new NodoLista(dato);
    
    nodoNuevo.siguiente = this.cabeza;
        
    this.cabeza = nodoNuevo;
    return this.cabeza;
}

Lista.prototype.buscarPorIndice = function(indice){
    let contador = 0;
    let nodo = this.cabeza;
    while (nodo) {
        if (contador === indice) {
           return nodo;
        }
        contador++;
        nodo = nodo.siguiente;
    }
    return null;
}
