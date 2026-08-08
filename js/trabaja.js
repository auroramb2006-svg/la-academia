const textAreaMensaje = document.querySelector("#mensaje")
textAreaMensaje.addEventListener("focus", e => {
    e.preventDefault();
    textAreaMensaje.classList.toggle("inputFocus")
})
textAreaMensaje.addEventListener("blur", e => {
    textAreaMensaje.classList.toggle("inputFocus")
})

const btnMenu = document.getElementById('btn-menu');
const navLinks = document.getElementById('nav-links');

if (btnMenu && navLinks) {
    btnMenu.addEventListener('click', () => {
        navLinks.classList.toggle('abierto');     
        
        btnMenu.classList.toggle('animacion'); 
    });
}


  const boton = document.getElementById('btnArriba');

  window.addEventListener('scroll', () => {
    // Detecta los píxeles desplazados verticalmente
    if (window.scrollY > 100) {
      boton.classList.add('visible');
    } else {
      boton.classList.remove('visible');
    }
  });

      const btnAbrir = document.getElementById('abrirModal');
        const btnCerrar = document.getElementById('cerrarModal');
        const modal = document.getElementById('miModal');

        // Mostrar el formulario y el fondo gris
        btnAbrir.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        // Ocultar el formulario al hacer clic en "Cerrar"
        btnCerrar.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Opcional: Cerrar también si se hace clic fuera de la caja blanca (en el fondo gris)
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
 