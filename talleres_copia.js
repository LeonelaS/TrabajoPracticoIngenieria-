// para agregar a mano en la búsqueda.
var talleres_fisicos_copia = [
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
        "nombre": "Universidad Nacional de General Sarmiento",
        "posicion": [-34.523013308639, -58.70045616768699],
        "lugar": "Los Polvorines",
        "descripcion": "Zona de estudios y aprendizaje.",
        "tags": ["universidad", "carreras", "educacion", "facultad", "biblioteca"]
    },
    {
        "id": 2,
        "posicion": [-34.51338190216312, -58.70642501518344],
        "nombre": "Estadio de San Miguel",
        "descripcion": "Trueno verde stadium.",
        "lugar": "Los Polvorines",
        "tags": ["futbol", "partidos", "san miguel", "deportes", "cancha", "jugadores"]
    },
    {
        "id": 3,
        "nombre": "Terrazas de Mayo",
        "posicion": [-34.53138840321933, -58.703033188918184],
        "direccion": "Av. Gral. Juan Gregorio Lemos 101",
        "descripcion": "Paseo con la familia.",
        "tags": ["shopping", "centro comercial", "compras"]
    },

    //FORMATO NUEVO
    // {
    //     "id": 1,
    //     "posicion": "",
    //     "nombre": "",
    //     "descripcion": "",
    //     "rubro": "",
    //     "contacto": "",
    //     "redes_sociales": "",
    //     "formas_de_pago": "",
    //     "zona_influencia": "",
    //     "restricciones": "",
    //     "tiene_comercio": true,
    //     "direccion":"",
    //     "horario": "",
    //     "localidad": "",
    //     "direccion_disponible": true,
    //     "imagen_url": ""
    // }
        {
            "id": 4,
            "posicion": [-34.49898683763133, -58.72027821987131],
            "nombre": "Sabores del Alma",
            "descripcion": "Restaurante de comida casera con ingredientes frescos y de calidad.",
            "rubro": "Comida",
            "contacto": "info@saboresdelalma.com",
            "redes_sociales": "@saboresdelalma",
            "formas_de_pago": "Efectivo, Tarjeta de Crédito, Tarjeta de Débito",
            "zona_influencia": "Centro",
            "restricciones": "No apto para celiacos",
            "tiene_comercio": true,
            "direccion": "Juan María Gutiérrez 1150",
            "horario": "Lunes a Sábado de 12:00 a 22:00",
            "localidad": "Ciudad",
            "direccion_disponible": true,
            "imagen_url": ""
        },
        // {
        //     "id": 2,
        //     "posicion": "2",
        //     "nombre": "Moda Urbana",
        //     "descripcion": "Tienda de ropa urbana para jóvenes con las últimas tendencias.",
        //     "rubro": "Ropa",
        //     "contacto": "contacto@modaurbana.com",
        //     "redes_sociales": "@modaurbana",
        //     "formas_de_pago": "Efectivo, Tarjeta de Crédito, Tarjeta de Débito",
        //     "zona_influencia": "Sur",
        //     "restricciones": "No disponible para ventas al por mayor",
        //     "tiene_comercio": true,
        //     "direccion": "Juan María Gutiérrez 1150",
        //     "horario": "Lunes a Viernes de 10:00 a 20:00",
        //     "localidad": "Ciudad",
        //     "direccion_disponible": true,
        //     "imagen_url": ""
        // },
        // {
        //     "id": 3,
        //     "posicion": "3",
        //     "nombre": "Muebles Únicos",
        //     "descripcion": "Fábrica de muebles personalizados y hechos a medida.",
        //     "rubro": "Muebles",
        //     "contacto": "ventas@mueblesunicos.com",
        //     "redes_sociales": "@mueblesunicos",
        //     "formas_de_pago": "Efectivo, Tarjeta de Crédito",
        //     "zona_influencia": "Norte",
        //     "restricciones": "Entrega solo en ciudad",
        //     "tiene_comercio": true,
        //     "direccion": "Juan María Gutiérrez 1150",
        //     "horario": "Lunes a Sábado de 9:00 a 18:00",
        //     "localidad": "Ciudad",
        //     "direccion_disponible": true,
        //     "imagen_url": ""
        // },
        // {
        //     "id": 4,
        //     "posicion": "4",
        //     "nombre": "Arte en Cerámica",
        //     "descripcion": "Taller de cerámica artística y utilitaria.",
        //     "rubro": "Cerámica",
        //     "contacto": "arteenceramica@example.com",
        //     "redes_sociales": "@arteenceramica",
        //     "formas_de_pago": "Efectivo, Transferencia Bancaria",
        //     "zona_influencia": "Este",
        //     "restricciones": "Productos frágiles",
        //     "tiene_comercio": true,
        //     "direccion": "Juan María Gutiérrez 1150",
        //     "horario": "Lunes a Viernes de 14:00 a 20:00",
        //     "localidad": "Ciudad",
        //     "direccion_disponible": true,
        //     "imagen_url": ""
        // },
        // {
        //     "id": 5,
        //     "posicion": "5",
        //     "nombre": "Manos Creativas",
        //     "descripcion": "Artesanías únicas hechas a mano con materiales reciclados.",
        //     "rubro": "Artesanía",
        //     "contacto": "info@manoscreativas.com",
        //     "redes_sociales": "@manoscreativas",
        //     "formas_de_pago": "Efectivo, Tarjeta de Crédito, PayPal",
        //     "zona_influencia": "Oeste",
        //     "restricciones": "No envíos internacionales",
        //     "tiene_comercio": true,
        //     "direccion": "Juan María Gutiérrez 1150",
        //     "horario": "Lunes a Sábado de 9:00 a 19:00",
        //     "localidad": "Ciudad",
        //     "direccion_disponible": true,
        //     "imagen_url": ""
        // },
        // {
        //     "id": 6,
        //     "posicion": "6",
        //     "nombre": "Belleza Natural",
        //     "descripcion": "Salón de belleza especializado en tratamientos naturales y orgánicos.",
        //     "rubro": "Belleza",
        //     "contacto": "belleza@natural.com",
        //     "redes_sociales": "@bellezanatural",
        //     "formas_de_pago": "Efectivo, Tarjeta de Crédito, Tarjeta de Débito",
        //     "zona_influencia": "Centro",
        //     "restricciones": "Solo con cita previa",
        //     "tiene_comercio": true,
        //     "direccion": "Juan María Gutiérrez 1150",
        //     "horario": "Lunes a Viernes de 10:00 a 18:00",
        //     "localidad": "Ciudad",
        //     "direccion_disponible": true,
        //     "imagen_url": ""
        // },
        // {
        //     "id": 7,
        //     "posicion": "7",
        //     "nombre": "Papelería Creativa",
        //     "descripcion": "Tienda de artículos de papelería y manualidades.",
        //     "rubro": "Papelería",
        //     "contacto": "contacto@papeleriacreativa.com",
        //     "redes_sociales": "@papeleriacreativa",
        //     "formas_de_pago": "Efectivo, Tarjeta de Crédito, Tarjeta de Débito",
        //     "zona_influencia": "Norte",
        //     "restricciones": "No disponible para ventas al por mayor",
        //     "tiene_comercio": true,
        //     "direccion": "Juan María Gutiérrez 1150",
        //     "horario": "Lunes a Sábado de 9:00 a 19:00",
        //     "localidad": "Ciudad",
        //     "direccion_disponible": true,
        //     "imagen_url": ""
        // },
        // {
        //     "id": 8,
        //     "posicion": "8",
        //     "nombre": "Higiene Plus",
        //     "descripcion": "Productos de higiene personal y limpieza para el hogar.",
        //     "rubro": "Higiene",
        //     "contacto": "info@higieneplus.com",
        //     "redes_sociales": "@higieneplus",
        //     "formas_de_pago": "Efectivo, Tarjeta de Crédito, Transferencia Bancaria",
        //     "zona_influencia": "Sur",
        //     "restricciones": "Productos químicos, mantener fuera del alcance de los niños",
        //     "tiene_comercio": true,
        //     "direccion": "Juan María Gutiérrez 1150",
        //     "horario": "Lunes a Viernes de 8:00 a 17:00",
        //     "localidad": "Ciudad",
        //     "direccion_disponible": true,
        //     "imagen_url": ""
        // }
    
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
        var marker = L.marker(taller.posicion).addTo(mapa2)
            .bindPopup(`<b>${taller.nombre}</b><br>${taller.descripcion}`);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    agregarTalleresAlMapa();
});