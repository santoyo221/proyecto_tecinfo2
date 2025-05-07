let index = 0;

function cambiarImagen(direccion) {
    const carrusel = document.querySelector('.carrusel');
    const totalImagenes = document.querySelectorAll('.carrusel img').length;

    index += direccion;

    if (index < 0) {
        index = totalImagenes - 1;
    } else if (index >= totalImagenes) {
        index = 0;
    }

    // Cambiar la posición del carrusel para mostrar la imagen correspondiente
    carrusel.style.transform = `translateX(-${index * 100}%)`;
}

// Opcional: Añadir un temporizador para pasar las imágenes automáticamente
setInterval(() => {
    cambiarImagen(1);
}, 5000); // Cambiar cada 5 segundos
