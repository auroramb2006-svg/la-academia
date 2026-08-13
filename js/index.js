// Agranda las tarjetas de precios al pasar el ratón
const tarjetas = document.querySelectorAll('.tarjeta-precios');

tarjetas.forEach((tar) => {
    tar.addEventListener('mouseover', () => {
        tar.style.transform = 'scale(1.1)';
    });

    tar.addEventListener('mouseout', () => {
        tar.style.transform = 'scale(1)';
    });
});

// Agranda los paneles de niveles académicos al pasar el ratón
const niveles = document.querySelectorAll('.niveles-panel');

niveles.forEach((niv) => {
    niv.addEventListener('mouseover', () => {
        niv.style.transform = 'scale(1.1)';
    });

    niv.addEventListener('mouseout', () => {
        niv.style.transform = 'scale(1)';
    });
});

// Agranda las tarjetas de asignaturas al pasar el ratón
const asignaturas = document.querySelectorAll('.tarjeta-asignaturas');

asignaturas.forEach((asig) => {
    asig.addEventListener('mouseover', () => {
        asig.style.transform = 'scale(1.1)';
    });

    asig.addEventListener('mouseout', () => {
        asig.style.transform = 'scale(1)';
    });
});

// Cambia el color de fondo de los botones al pasar/quitar el ratón
const botones = document.querySelectorAll('.btn-color');

botones.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = '#c98a3d';
    });

    btn.addEventListener('mouseout', () => {
        btn.style.backgroundColor = '#9f65ad';
    });
});



// Muestra/oculta el panel con las asignaturas al hacer click en el botón
const btnT = document.getElementById('btn-asignaturas')
const contenidoT = document.getElementById('contenido-panel-informativo')

btnT.addEventListener('click', ()=>{
    contenidoT.classList.toggle('mostrar')
})

// Abre/cierra el menú de navegación en móvil 
const btnMenu = document.getElementById('btn-menu');
const navLinks = document.getElementById('nav-links');

btnMenu.addEventListener('click', () => {
    navLinks.classList.toggle('abierto');     
    
    btnMenu.classList.toggle('animacion'); 
});

// Muestra u oculta el botón "volver arriba" según el scroll de la página
const boton = document.getElementById('btnArriba');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        boton.classList.add('visible');
    } else {
        boton.classList.remove('visible');
    }
});

// Controla la apertura y cierre del modal "Solicitar Matrícula"
const modal = document.getElementById('miModal');
const btnCerrar = document.getElementById('cerrarModal');
const botonesAbrir = document.querySelectorAll('.btn-abrir');

// Abre el modal al hacer click en cualquier botón "Solicitar Matrícula"
botonesAbrir.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

// Cierra el modal al hacer click en el botón "Cerrar"
btnCerrar.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cierra el modal al hacer click fuera de él (en el fondo grisaceo)
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});