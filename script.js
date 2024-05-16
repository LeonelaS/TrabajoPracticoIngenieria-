// Inicializar el mapa
var map = L.map('map').setView([-34.523013308639, -58.70045616768699], 15); // Coordenadas de la Universidad Nacional de General Sarmiento

// Añadir una capa de mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 19,
}).addTo(map);

// Añadir un marcador
L.marker([-34.523013308639, -58.70045616768699]).addTo(map)
    .bindPopup('Universidad Nacional de General Sarmiento')
    .openPopup();


// $(document).ready(function() {
//   $('#normalizar').click(function() {
//     var direccion = $('#direccion').val();

//     Llamar a la función de normalización
//     normalizadorDirecciones.normalizarDireccion(direccion, function(resultado) {
//       Manejar el resultado
//       $('#direccion').html('Dirección Normalizada: ' + resultado.direccion);
//     });
//   });
// });


// // Esperar a que se cargue el contenido del DOM
// document.addEventListener("DOMContentLoaded", function () {
function normalizarDireccion() {
    // Verificar si jQuery está definido
    if (typeof jQuery !== 'undefined') {
        console.log("jQuery está definido. Cargando el script normalizadorDirecciones.min.js...");

        // Cargar el script normalizadorDirecciones.min.js de forma asíncrona
        $.getScript("http://servicios.usig.buenosaires.gob.ar/nd-js/1.4/normalizadorDirecciones.min.js", function () {
            // El script se ha cargado correctamente
            console.log("El script normalizadorDirecciones.min.js se ha cargado correctamente.");

            // Aquí puedes agregar el resto de tu código que depende del script
            $('#normalizar').click(function () {
                var direccion = $('#direccion').val();

                // Llamar a la función de normalización
                normalizadorDirecciones.normalizarDireccion(direccion, function (resultado) {
                    // Actualizar el valor del campo de entrada "direccion" con la dirección normalizada
                    $('#direccion').val(resultado.direccion);
                });
            });
        })
    } else {
        console.log("jQuery no está definido. Asegúrate de que se haya cargado correctamente antes de ejecutar este script.");
    }
};


