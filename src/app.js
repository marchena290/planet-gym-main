document.addEventListener('DOMContentLoaded', function(){
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function(){
        mobileMenu.classList.toggle('hidden')
    });


    // Funcion para manejar la visibilidad de los parrafos
    function toggleVisibility() {
        const parrafosAdiccionales = document.getElementById('parrafos-adicionales');
        const toggleButton = document.getElementById('toggleButton');

        if (parrafosAdiccionales.style.display === 'block') {
            parrafosAdiccionales.style.display = 'none'
            toggleButton.textContent = 'Ver más'
        } else {
            parrafosAdiccionales.style.display = 'block';
            toggleButton.textContent = 'Ver menos'
        }
    }

    document.getElementById('toggleButton').addEventListener('click', toggleVisibility);

    // Asegurar que los parrafos esten visibles en pantallas grandes
    window.addEventListener('resize',() => {
        const parrafosAdiccionales = document.getElementById('parrafos-adicionales');
        const toggleButton = document.getElementById('toggleButton');

        if (window.innerWidth >= 768) {
            parrafosAdiccionales.style.display = 'block';
        } else {
           parrafosAdiccionales.style.display = 'none';
           toggleButton.style.display = 'Ver más' 
        }


    });

    window.dispatchEvent(new Event('resize'));
    
});