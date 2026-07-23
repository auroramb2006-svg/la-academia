const tarjetas = document.querySelectorAll('.tarjeta-precios'); 

tarjetas.forEach((tar) => {
    tar.addEventListener('mouseover', () => {
        tar.style.transform = 'scale(1.1)';
    });
    
    tar.addEventListener('mouseout', () => {
       tar.style.transform = 'scale(1)';
    });
});