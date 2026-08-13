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


    btnMenu.addEventListener('click', () => {
        navLinks.classList.toggle('abierto');     
        
        btnMenu.classList.toggle('animacion'); 
    });



  const boton = document.getElementById('btnArriba');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      boton.classList.add('visible');
    } else {
      boton.classList.remove('visible');
    }
  });

const modal = document.getElementById('miModal');
const btnCerrar = document.getElementById('cerrarModal');
const botonesAbrir = document.querySelectorAll('.btn-abrir');

botonesAbrir.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

btnCerrar.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});