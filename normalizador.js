// Función de normalización
function normalizarDireccion() {
    var direccion = document.getElementById('direccionSinNormalizar').value;
    var apiUrl = 'http://servicios.usig.buenosaires.gob.ar/normalizar?direccion=' + encodeURIComponent(direccion);
    console.log("direcicon base obtenida");
    console.log("URL api usig obtenida::::" + apiUrl);

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo realizar la solicitud');
            }
            return response.json();
        })
        .then(data => {
            console.log("entrando a realizar la solicitud http a la api");
            var select = document.getElementById('direccionNormalizada');
            select.innerHTML = ''; // Limpiar opciones anteriores

            if (data.direccionesNormalizadas) {
                console.log("devolviendo respuesta de la api para elegir de las opciones");
                data.direccionesNormalizadas.forEach((direccion) => {
                    
                    console.log("añadiendo respuesta de la api al campo de seleccion");
                    var option = document.createElement('option');
                    option.value = JSON.stringify(direccion); // Guardar el objeto completo
                    option.textContent = direccion.direccion;
                    select.appendChild(option);
                });
            } else {
                alert('No se encontraron direcciones.');
            }
        })
        .catch(error => {
            console.error('Error al normalizar la dirección:', error);
            alert('Hubo un error al normalizar la dirección. Por favor, inténtalo de nuevo más tarde.');
        });
}