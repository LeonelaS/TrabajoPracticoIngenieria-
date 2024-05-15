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