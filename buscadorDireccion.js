// este funciona, y procesa todas las opciones para pasarselas al html en un arreglo.
function buscarDireccionComercio() {
    // Obtener la dirección ingresada por el usuario
    var direccion = document.getElementById('direccion-taller-comercio').value;
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
                var select = document.getElementById('direccionComercioNormalizado');
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