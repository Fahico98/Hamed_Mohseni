$(document).ready(() =>{
    

    $('#frmRegistro').submit((event) => {
        event.preventDefault();

        let nombre = $('#nombre').val();
        let correo = $('#correo').val();
        let contrasegnia = $('#contrasegnia').val();
        let cedula = $('#cedula').val();
        let celular = $('#celular').val();
        let fechaNacimiento = $('#fechaNacimiento').val();
        let genero = $('#genero').val();
        let eps = $('#eps').val();
        
        let registro = {
            nombre: nombre,
            correo: correo,
            contrasegnia: contrasegnia,
            cedula: cedula,
            celular: celular,
            fechaNacimiento: fechaNacimiento,
            genero: genero,
            eps: eps
        };

        let listaRegistros = new Lista();
        listaRegistros.insertar(registro);

        $.ajax({
            url: 'backend/crear_registro.php',
            type: 'post',
            data: listaRegistros.buscarPorIndice(0).dato
        }).done((data) => {
            console.log(data);
        }).fail((data) => {
            console.log('fail', data);
        })
    });
});


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
