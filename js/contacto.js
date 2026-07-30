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
