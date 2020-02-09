
var hash;

$(document).ready(function(){

   hash = new HashTableLinear(0);

   var formButtons = [
      $("#btn-confirmar"),
      $("#btn-agregarVip"),
      $("#btn-agregarArtist")
   ];

   $(document).on("submit", "#buscarConcierto", function(event){
      event.preventDefault();
      cargarConciertos();
      var nombreConcierto = $("#nombreConcierto").val();
      var buffer = hash.get(nombreConcierto);
      if(buffer != undefined){
         formButtons.forEach(function(button){
            button.attr("disabled", false);
         });
         $("#textoModal")
            .css("color", "black")
            .text("Concierto " + nombreConcierto + " seleccionado exitosamente...!");
         $("#myBtn").trigger("click");
      }else{
         formButtons.forEach(function(button){
            button.attr("disabled", true);
         });
         $("#textoModal")
            .css("color", "red")
            .text("Cocierto no existente...!");
         $("#myBtn").trigger("click");
      }
   });
    
   $('#frmAgregarConcierto').submit((event) => {
      event.preventDefault();

      let nombre = $('#nombre').val();
      let lugar = $('#lugar').val();
      let fecha = $('#fecha').val();
      let hora = $('#hora').val();
      
      let concierto = {
         nombre: nombre,
         lugar: lugar,
         fecha: fecha,
         hora: hora
      };

      let listaConciertos = new Lista();
      listaConciertos.insertar(concierto);

      $.ajax({
         url: 'backend/crear_concierto.php',
         type: 'post',
         data: listaConciertos.buscarPorIndice(0).dato
      }).done((data) => {
         console.log(data);
      }).fail((data) => {
         console.log('fail', data);
      })
   });

   $("#myBtn").click(function(){
      $("#myModal").css("display", "block");
   });

   $(".close").click(function(){
      $("#myModal").css("display", "none");
   });

   $(window).click(function(event){
      if(event.target == "#myModal"){
         $("#myModal").css("display", "none");
      }
   });
});

function cargarConciertos(){
   if(hash.table.length == 0){
      $.ajax({
         url: "backend/obtener_conciertos_admin.php",
         type: "GET",
         dataType: "JSON",
         processData: false,
         success: function(conciertos){
            hash = new HashTableLinear(2 * conciertos.length);
            conciertos.forEach(function(concierto){
               hash.put(concierto.Nombre, concierto);
            });
         },
         async: false
      });
   }
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
