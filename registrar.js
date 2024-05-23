document.addEventListener('DOMContentLoaded', function () {
    var comercioSelect = document.getElementById('comercio');
    var camposComercio = document.getElementById('campos-comercio');

    comercioSelect.addEventListener('change', function () {
        if (comercioSelect.value === 'si') {
            camposComercio.style.display = 'block';
        } else {
            camposComercio.style.display = 'none';
        }
    });

    var emprendimientoSelect = document.getElementById('emprendimiento');
    var camposEmprendimiento = document.getElementById('campos-emprendimiento');

    emprendimientoSelect.addEventListener('change', function () {
        if (emprendimientoSelect.value === 'si') {
            camposEmprendimiento.style.display = 'block';
        } else {
            camposEmprendimiento.style.display = 'none';
        }
    });

    var formulario = document.getElementById('formulario-colaborador');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Mostrar el mensaje personalizado
        mostrarMensajeRegistro();

        // Reiniciar los campos de texto
        formulario.reset();
    });
});

function mostrarMensajeRegistro() {
    // Mostrar el mensaje personalizado
    const mensajeElement = document.getElementById("registro");
    mensajeElement.style.display = "block";
    mensajeElement.textContent = "¡El colaborador fue registrado correctamente! a la espera de confirmación por algún moderador";

    // Ocultar el mensaje después de unos segundos
    setTimeout(function () {
        mensajeElement.style.display = "none";
    }, 1000); // 5000 milisegundos = 5 segundos
}
