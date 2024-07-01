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

        // Limpiar mensajes de error
        var errorElements = document.querySelectorAll('.error');
        errorElements.forEach(function (el) {
            el.textContent = '';
        });

        var isValid = true;

        // Validar campos
        if (document.getElementById('nombre').value.trim() === '') {
            document.getElementById('error-nombre').textContent = 'El nombre es obligatorio.';
            isValid = false;
        }

        var telefono = document.getElementById('telefono').value.trim();
        if (telefono === '') {
            document.getElementById('error-telefono').textContent = 'El teléfono es obligatorio.';
            isValid = false;
        } else if (!/^\d{10}$/.test(telefono)) {
            document.getElementById('error-telefono').textContent = 'El teléfono debe tener 10 dígitos.';
            isValid = false;
        }

        var email = document.getElementById('email').value.trim();
        if (email === '') {
            document.getElementById('error-email').textContent = 'El correo electrónico es obligatorio.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            document.getElementById('error-email').textContent = 'El correo electrónico no es válido.';
            isValid = false;
        }

        if (document.getElementById('horario-desde').value === '' || document.getElementById('horario-hasta').value === '') {
            document.getElementById('error-horario').textContent = 'El horario es obligatorio.';
            isValid = false;
        }

        if (document.getElementById('direccionSinNormalizar').value.trim() === '') {
            document.getElementById('error-direccion').textContent = 'La dirección es obligatoria.';
            isValid = false;
        }

        if (document.getElementById('direccionNormalizada').value === '') {
            document.getElementById('error-direccionNormalizada').textContent = 'Seleccione una dirección normalizada.';
            isValid = false;
        }

        if (document.getElementById('comercio').value === '') {
            document.getElementById('error-comercio').textContent = 'Seleccione una opción para el comercio físico.';
            isValid = false;
        }

        if (document.getElementById('comercio').value === 'si') {
            if (document.getElementById('nombre-comercio').value.trim() === '') {
                document.getElementById('error-nombre-comercio').textContent = 'El nombre del comercio es obligatorio.';
                isValid = false;
            }

            if (document.getElementById('direccion-taller-comercio').value.trim() === '') {
                document.getElementById('error-direccionComercioNormalizada').textContent = 'Ingrese la dirección del comercio.';
                isValid = false;
            }

            if (document.getElementById('direccionComercioNormalizado').value === '') {
                document.getElementById('error-direccionComercioNormalizada').textContent = 'Seleccione una dirección normalizada para el comercio.';
                isValid = false;
            }
        }

        if (document.getElementById('emprendimiento').value === '') {
            document.getElementById('error-emprendimiento').textContent = 'Seleccione una opción para el emprendimiento virtual.';
            isValid = false;
        }

        if (document.getElementById('emprendimiento').value === 'si') {
            if (document.getElementById('nombre-emprendimiento').value.trim() === '') {
                document.getElementById('error-nombre-emprendimiento').textContent = 'El nombre del emprendimiento es obligatorio.';
                isValid = false;
            }

            if (document.getElementById('descripcion').value.trim() === '') {
                document.getElementById('error-descripcion').textContent = 'La descripción es obligatoria.';
                isValid = false;
            }
        }

        if (isValid) {
            // Mostrar el mensaje personalizado
            mostrarMensajeRegistro();

            // Reiniciar los campos de texto
            formulario.reset();
        }
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
    }, 2000); // 2000 milisegundos = 2 segundos
}
