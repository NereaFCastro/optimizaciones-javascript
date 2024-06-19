
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.main__image');
    const iconoCerrar = document.querySelector('.icono__cerrar');

    function abrirLightbox() {
        mainImage.classList.add('active');
        iconoCerrar.style.display = 'block'; 
    }

    function cerrarLightbox() {
        mainImage.classList.remove('active');
        iconoCerrar.style.display = 'none';
    }

    mainImage.addEventListener('click', abrirLightbox);
    iconoCerrar.addEventListener('click', cerrarLightbox);
});