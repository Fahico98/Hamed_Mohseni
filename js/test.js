
$(document).ready(function(){

   var hash = new HashTableLinear(100);

   hash.put("fahico", {
      nombre: "Fahibram",
      apellido: "Carcamo",
      edad: 27
   });

   hash.put("jose", {
      nombre: "Jose",
      apellido: "Hernandez",
      edad: 35
   });

   hash.put("rocio", {
      nombre: "Rocio",
      apellido: "Pulgarin",
      edad: 55
   });

   hash.put("carlos", {
      nombre: "Carlos",
      apellido: "Amariz",
      edad: 31
   });

   hash.put("david", {
      nombre: "Enmanuel",
      apellido: "Amariz",
      edad: 39
   });

   hash.put("david", {
      nombre: "David",
      apellido: "Contreras",
      edad: 37
   });

   hash.showDistro();

});

