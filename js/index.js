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

const botones = document.querySelectorAll('.btn-color');

botones.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = '#c98a3d';
    });

    btn.addEventListener('mouseout', () => {
        btn.style.backgroundColor = '#9f65ad';
    });
});