// para agregar a mano en la búsqueda.
var talleres_fisicos = [
    // FORMATO GENERAL:
    // "altura": null,
    // "cod_calle": 200889,
    // "cod_calle_cruce": null,
    // "cod_partido": "san_miguel",
    // "direccion": "Avenida General Juan Gregorio Lemos, Campo de Mayo, San Miguel",
    // "nombre_calle": "Avenida General Juan Gregorio Lemos",
    // "nombre_calle_cruce": null,
    // "nombre_localidad": "Campo de Mayo",
    // "nombre_partido": "San Miguel",
    // "tipo": "calle"

    {
        "id": 1,
        "nombre": "Terrazas de Mayo",
        "posicion": [-34.53138840321933, -58.703033188918184],
        "direccion": "Av. Gral. Juan Gregorio Lemos 101",
        "descripcion": "Paseo con la familia."
    },
    {
        "id": 2,
        "posicion": [-34.51338190216312, -58.70642501518344],
        "nombre": "Estadio de San Miguel",
        "descripcion": "Trueno verde stadium.",
        "lugar": "Los Polvorines"
    }
]

// para usarlas en la normalización.
var direcciones_aptas = [
    {
        "nombre": "Mariano Sánchez de Loria",
        "altura": [300], 
        "partido": "Lomas de Zamora"
    },
    {
        "nombre": "Salta",
        "altura": 400, 
        "partido": "Gerli"
    },
    {
        "nombre": "Conesa",
        "altura": 800,
        "partido": "San Miguel"
    },
    {
        "nombre": "Belgrano Av.",
        "altura": 800,
        "partido": "CABA"
    }
]

function agregarTalleresAlMapa() {
    talleres_fisicos.forEach(taller => {
        var marker = L.marker(taller.posicion).addTo(map)
            .bindPopup(`<b>${taller.nombre}</b><br>${taller.descripcion}`);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    agregarTalleresAlMapa();
});