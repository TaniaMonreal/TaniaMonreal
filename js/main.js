// Muestra el nombre del archivo seleccionado en el campo de fotos
const fileInput = document.getElementById('foto');
const fileNameDisplay = document.querySelector('.file-name');

fileInput.addEventListener('change', () => {
    fileNameDisplay.textContent = fileInput.files[0] ? fileInput.files[0].name : 'No se ha seleccionado ninguna foto';
});

// Actualiza la sección de resultados con la información del formulario al ser enviado
const form = document.querySelector('form');
const resultContainer = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;
    const foto = fileInput.files[0];

    // Crea elementos para la nueva entrada
    const result = document.createElement('div');
    result.className = 'result';

    const image = document.createElement('img');
    image.src = foto ? URL.createObjectURL(foto) : '';
    image.alt = 'Foto del usuario';

    const info = document.createElement('div');
    info.className = 'info';

    const name = document.createElement('h3');
    name.textContent = `Nombre: ${nombre}`;

    const comment = document.createElement('p');
    comment.textContent = `Comentario: ${comentario}`;

    // Agrega los elementos a la nueva entrada
    info.appendChild(name);
    info.appendChild(comment);
    result.appendChild(image);
    result.appendChild(info);

    // Agrega la nueva entrada al contenedor de resultados
    resultContainer.appendChild(result);

    // Limpia el formulario
    form.reset();
    fileNameDisplay.textContent = 'No se ha seleccionado ninguna foto';
});