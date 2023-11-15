// Función para generar dinámicamente las opciones de horas según el día seleccionado
function generarHorasDisponibles() {
    var selectDia = document.getElementById('selectDia');
    var fieldset = document.querySelector('fieldset');
    fieldset.innerHTML = ''; // Limpiar las opciones existentes

    // Definir las horas disponibles
    var horasDisponibles = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];

    // Obtener el día seleccionado
    var diaSeleccionado = selectDia.value;

    // Crear opciones para las horas disponibles según el día seleccionado
    horasDisponibles.forEach(function(hora) {
        var div = document.createElement('div'); // Agregar un contenedor div
        var input = document.createElement('input');
        input.type = 'radio';
        input.name = 'fechaHora';
        input.value = diaSeleccionado + ' ' + hora;

        var label = document.createElement('label');
        label.innerHTML = diaSeleccionado + ' ' + hora;

        div.appendChild(input);
        div.appendChild(label);
        fieldset.appendChild(div);
    });

    // Aplicar el estilo azebrado después de generar las opciones
    aplicarEstiloAZebra();
}
// Función para aplicar el estilo de azebrado
function aplicarEstiloAZebra() {
    var opciones = document.querySelectorAll('#turno-formulario fieldset div');
    
    opciones.forEach(function(opcion, index) {
        opcion.style.backgroundColor = index % 2 === 0 ? '#add8e6' : '#ffffff';
    });
}

// Resto del código...

// Llamar a la función al cargar la página para inicializar las opciones
generarHorasDisponibles();

// Agregar evento de cambio al menú desplegable de días
document.getElementById('selectDia').addEventListener('change', function() {
    // Regenerar las opciones de horas al cambiar el día seleccionado
    generarHorasDisponibles();
});

// Función para manejar el envío del formulario
document.getElementById('turno-formulario').addEventListener('submit', function(event) {
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    // y ocultar la opción seleccionada de la lista de opciones disponibles.

    event.preventDefault(); // Evitar el envío del formulario para este ejemplo.
});

// Función para mostrar u ocultar el formulario al hacer clic en el botón "Reserva tu turno"
document.querySelector('.hero-button').addEventListener('click', function() {
    var formulario = document.getElementById('turnos-form');
    formulario.style.display = (formulario.style.display === 'none' || formulario.style.display === '') ? 'block' : 'none';

    // Ocultar las secciones hero y features al mostrar el formulario
    var seccionHero = document.querySelector('.hero');
    var seccionFeatures = document.querySelector('.features');
    seccionHero.style.display = 'none';
    seccionFeatures.style.display = 'none';

    // Regenerar las opciones de horas al mostrar el formulario
    generarHorasDisponibles();
});



