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



// // este funciona, pero se solapa con las demas y no termina eligiendo ninguna.
// function normalizarDireccion() {
//     // Obtener la dirección ingresada por el usuario
//     var direccion = document.getElementById('direccionSinNormalizar').value;
//     console.log("direcicon base obtenida");

//     // URL de la API de normalización de direcciones de USIG
//     var apiUrl = 'http://servicios.usig.buenosaires.gob.ar/normalizar?direccion=' + encodeURIComponent(direccion);
//     console.log("URL api usig obtenida::::" + apiUrl);

//     // Realizar la solicitud HTTP a la API
//     fetch(apiUrl)
//         .then(response => {
//             console.log("entrando a realizar la solicitud http a la api");
//             if (!response.ok) {
//                 console.log("imposible realizar solicitud");
//                 throw new Error('No se pudo realizar la solicitud');
//             }
//             console.log("devolviendo respuesta de la api");
//             return response.json();
//         })
//         .then(data => {
//             console.log("procesando respuesta de la api");
//             // Procesar la respuesta de la API para obtener la dirección normalizada
//             var direccionNormalizada = data.direccion;
//             console.log("respuessta de la api obtenida");

//             // Actualizar el campo de texto con la dirección normalizada
//             document.getElementById('direccionNormalizada').value = direccionNormalizada;
//             console.log("actualizando el campo de direccion con la normalizada");
//         })
//         .catch(error => {
//             // Manejar errores de la solicitud
//             console.error('Error al normalizar la dirección:', error);
//             alert('Hubo un error al normalizar la dirección. Por favor, inténtalo de nuevo más tarde.');
//         });
// }

// este funciona, y procesa todas las opciones para pasarselas al html en un arreglo.
function normalizarDireccion() {
    // Obtener la dirección ingresada por el usuario
    var direccion = document.getElementById('direccionSinNormalizar').value;
    console.log("direcicon base obtenida");

    // URL de la API de normalización de direcciones de USIG
    var apiUrl = 'http://servicios.usig.buenosaires.gob.ar/normalizar?direccion=' + encodeURIComponent(direccion);
    console.log("URL api usig obtenida::::" + apiUrl);

    // Realizar la solicitud HTTP a la API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log("entrando a realizar la solicitud http a la api");
            // Procesar la respuesta de la API para obtener las direcciones normalizadas
            var direcciones = data.direccionesNormalizadas; // Ajusta esto según la estructura de la respuesta de la API

            if (direcciones && direcciones.length > 0) {
                var select = document.getElementById('direccionNormalizada');
                select.innerHTML = ''; // Limpiar opciones anteriores

                console.log("devolviendo respuesta de la api para elegir de las opciones");
                // Añadir una opción predeterminada
                var option = document.createElement('option');
                option.value = '';
                option.text = 'Seleccione una dirección';
                select.appendChild(option);

                console.log("añadiendo respuesta de la api al campo de seleccion");
                // Añadir todas las direcciones normalizadas al campo de selección
                direcciones.forEach(direccionObj => {
                    var option = document.createElement('option');
                    option.value = direccionObj.direccion; // Ajusta esto según el formato de las direcciones en la respuesta
                    option.text = direccionObj.direccion; // Ajusta esto según el formato de las direcciones en la respuesta
                    select.appendChild(option);
                });
            } else {
                alert('No se encontraron direcciones normalizadas.');
            }
        })
        .catch(error => {
            // Manejar errores de la solicitud
            console.error('Error al normalizar la dirección:', error);
            alert('Hubo un error al normalizar la dirección. Por favor, inténtalo de nuevo más tarde.');
        });
}

// function normalizarDireccion() {
//     var direccion = document.getElementById('direccionSinNormalizar').value;
//     var apiUrl = 'http://servicios.usig.buenosaires.gob.ar/normalizar?direccion=' + encodeURIComponent(direccion);

//     fetch(apiUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Error al normalizar la dirección');
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Limpiar resultados anteriores
//             document.getElementById('direccionesNormalizadas').innerHTML = '';

//             // Verificar si hay una propiedad en los datos que contiene la lista de direcciones
//             if (data && data.resultados && Array.isArray(data.resultados)) {
//                 // Iterar sobre la lista de direcciones normalizadas
//                 data.resultados.forEach(resultado => {
//                     var option = document.createElement('option');
//                     option.value = resultado.direccion;
//                     option.text = resultado.direccion;
//                     document.getElementById('direccionesNormalizadas').appendChild(option);
//                 });
//             } else {
//                 throw new Error('Respuesta de la API inesperada');
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('Hubo un error al normalizar la dirección. Por favor, inténtalo de nuevo más tarde.');
//         });
// }