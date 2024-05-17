function normalizarDireccion() {
    // Obtener el valor de la dirección sin normalizar
    var direccionSinNormalizar = document.getElementById("direccionSinNormalizar").value;

    // URL de la API de USIG para normalización de direcciones (este es solo un ejemplo, asegúrate de utilizar la URL correcta proporcionada por USIG)
    var apiUrl = 'http://servicios.usig.buenosaires.gob.ar/nd-js/1.4/normalizadorDirecciones.min.js' + encodeURIComponent(direccionSinNormalizar);

    // Crear una nueva solicitud XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurar la solicitud
    xhr.open('GET', apiUrl, true);

    // Configurar la función de callback para manejar la respuesta
    xhr.onreadystatechange = function () {
        // Verificar si la solicitud se ha completado y la respuesta está lista
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // Verificar si la solicitud fue exitosa (código de estado HTTP 200)
            if (xhr.status === 200) {
                // Convertir la respuesta JSON a un objeto JavaScript
                var response = JSON.parse(xhr.responseText);

                // Obtener la dirección normalizada del objeto JSON devuelto por el servicio
                var direccionNormalizada = response.direccion; // Asegúrate de que esto coincida con la estructura de la respuesta real

                // Actualizar el campo de dirección normalizada con la dirección devuelta por el servicio
                document.getElementById("direccionNormalizada").value = direccionNormalizada;
            } else {
                // Manejar errores de solicitud (código de estado HTTP no 200)
                console.error('Error al realizar la solicitud:', xhr.status);
                // También puedes mostrar un mensaje de error al usuario si lo deseas
                alert('Hubo un error al normalizar la dirección. Por favor, inténtalo de nuevo más tarde.');
            }
        }
    };
    // Enviar la solicitud
    xhr.send();
}

// function normalizarDireccion() {
//     // Obtener el valor de la dirección sin normalizar
//     var direccionSinNormalizar = $('#direccionSinNormalizar').val();

//     // URL de la API de USIG para normalización de direcciones (este es solo un ejemplo, asegúrate de utilizar la URL correcta proporcionada por USIG)
//     var apiUrl = 'http://servicios.usig.buenosaires.gob.ar/nd-js/1.4/normalizadorDirecciones.min.js' + encodeURIComponent(direccionSinNormalizar);

//     // Realizar la solicitud GET a la API de USIG utilizando jQuery
//     $.get(apiUrl, function(response) {
//         // Obtener la dirección normalizada del objeto JSON devuelto por el servicio
//         var direccionNormalizada = response.direccion; // Asegúrate de que esto coincida con la estructura de la respuesta real

//         // Actualizar el campo de dirección normalizada con la dirección devuelta por el servicio
//         $('#direccionNormalizada').val(direccionNormalizada);
//     })
//     .fail(function() {
//         // Manejar errores de solicitud
//         console.error('Error al realizar la solicitud.');
//         // También puedes mostrar un mensaje de error al usuario si lo deseas
//         alert('Hubo un error al normalizar la dirección. Por favor, inténtalo de nuevo más tarde.');
//     });
// }


// function normalizarDireccion() {
//     // Obtener el valor de la dirección sin normalizar
//     var direccionSinNormalizar = $('#direccionSinNormalizar').val();

//     // URL de la API de USIG para normalización de direcciones
//     var apiUrl = 'http://servicios.usig.buenosaires.gob.ar/nd-js/1.4/normalizadorDirecciones.min.js';

//     // Realizar la solicitud AJAX a la API de USIG
//     $.ajax({
//         url: apiUrl,
//         type: 'GET',
//         data: {
//             direccion: direccionSinNormalizar
//         },
//         headers: {
//         },
//         success: function(response) {
//             // Manejar la respuesta aquí
//             var direccionNormalizada = response.direccion;
//             $('#direccionNormalizada').val(direccionNormalizada);
//         },
//         error: function(xhr, status, error) {
//             // Manejar errores aquí
//             console.error('Error al realizar la solicitud:', error);
//             alert('Hubo un error al normalizar la dirección. Por favor, inténtalo de nuevo más tarde.');
//         }
//     });
// }


// http://servicios.usig.buenosaires.gob.ar/nd-js/1.4/normalizadorDirecciones.min.js