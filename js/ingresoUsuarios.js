
var hash;

$(document).ready(function(){

   hash = new HashTableLinear(0);

   $(document).on("submit", "#frmIniciarSesionUsuario", function(event){
      cargarUsurios();
      var noCedula = $("#cedula").val();
      var buffer = hash.get(noCedula);
      if(buffer != undefined){
         var pass = buffer.contrasegnia;
         if(pass != $("#contrasegnia").val()){
            event.preventDefault();
            $("#myBtn").trigger("click");
         }
      }else{
         $("#myBtn").trigger("click");
      }
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

function cargarUsurios(){
   if(hash.table.length === 0){
      $.ajax({
         url: "backend/obtener_usuarios.php",
         type: "GET",
         dataType: "JSON",
         processData: false,
         success: function(usuarios){
            hash = new HashTableLinear(2 * usuarios.length);
            usuarios.forEach(function(usuario){
               hash.put(usuario.cedula, usuario);
            });
         },
         async: false
      });
   }
}