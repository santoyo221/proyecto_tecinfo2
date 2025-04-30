// Hacer interactivas las imágenes con un clic
document.querySelectorAll('.imagen img').forEach(function(img) {
    img.addEventListener('click', function() {
        alert('Has hecho clic en: ' + img.alt);
    });
});
