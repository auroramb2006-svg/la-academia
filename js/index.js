const tarjetas = document.querySelectorAll('.tarjeta-precios');

tarjetas.forEach((tar) => {
    tar.addEventListener('mouseover', () => {
        tar.style.transform = 'scale(1.1)';
    });

    tar.addEventListener('mouseout', () => {
        tar.style.transform = 'scale(1)';
    });
});
const niveles = document.querySelectorAll('.niveles-panel');

niveles.forEach((niv) => {
    niv.addEventListener('mouseover', () => {
        niv.style.transform = 'scale(1.1)';
    });

    niv.addEventListener('mouseout', () => {
        niv.style.transform = 'scale(1)';

    });
});
const asignaturas = document.querySelectorAll('.tarjeta-asignaturas');

asignaturas.forEach((asig) => {
    asig.addEventListener('mouseover', () => {
        asig.style.transform = 'scale(1.1)';
    });

    asig.addEventListener('mouseout', () => {
        asig.style.transform = 'scale(1)';

    });
});

const botones = document.querySelectorAll('.btn-color');

botones.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = '#c98a3d';
    });

    btn.addEventListener('mouseout', () => {
        btn.style.backgroundColor = '#9f65ad';
    });
});
const topes = document.querySelectorAll('.top');



const btnT = document.getElementById('btn-asignaturas')
const contenidoT = document.getElementById('contenido-panel-informativo')

btnT.addEventListener('click', ()=>{
    contenidoT.classList.toggle('mostrar')
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

const grupos = document.querySelectorAll('.grupo-formulario');

grupos.forEach(grupo => {
    const btnAbrir = grupo.querySelector('.btn-abrir');
    const modal = grupo.querySelector('.modal-overlay');
    const btnCerrar = grupo.querySelector('.btn-cerrar');

    // Mostrar modal
    btnAbrir.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Ocultar con botón cerrar
    btnCerrar.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Ocultar haciendo clic en el fondo gris
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});