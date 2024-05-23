document.addEventListener('DOMContentLoaded', function () {
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

    // Variable global para almacenar el marcador actual
    var currentMarker;
});

// Función para geocodificar la dirección y mostrarla en el mapa
function mostrarDireccionEnMapa() {
    var direccion = document.getElementById('direccionBuscadaNormalizada').value;

    if (!direccion) {
        alert('Seleccione una dirección');
        return;
    }

    // URL de la API de geocodificación de USIG
    var apiUrl = 'http://servicios.usig.buenosaires.gob.ar/normalizar?direccion=' + encodeURIComponent(direccion);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.direccionesNormalizadas && data.direccionesNormalizadas.length > 0) {
                var direccionNormalizada = data.direccionesNormalizadas[0];

                // Obtener las coordenadas de la dirección normalizada
                var coordenadas = L.latLng(direccionNormalizada.coordenadas.y, direccionNormalizada.coordenadas.x);

                // Mover el mapa a las coordenadas de la dirección normalizada
                map.setView(coordenadas, 15);

                // Si ya existe un marcador, eliminarlo
                if (currentMarker) {
                    map.removeLayer(currentMarker);
                }

                // Añadir un marcador en la dirección normalizada
                currentMarker = L.marker(coordenadas).addTo(map)
                    .bindPopup("espacio fisico del colaborador!!<br>" + direccionNormalizada.direccion)
                    .openPopup();
            } else {
                alert('No se encontraron coordenadas para la dirección seleccionada.');
            }
        })
        .catch(error => {
            console.error('Error al geocodificar la dirección:', error);
            alert('Hubo un error al geocodificar la dirección. Por favor, inténtalo de nuevo más tarde.');
        });
}
