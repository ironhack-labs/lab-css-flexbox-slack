const iconoMenu = document.querySelector('#icono-menu'),
menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) =>{
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity')
    const rutaActual = e.target.getAttribute('src');
    if(rutaActual == './images/588a64e7d06f6719692a2d11.png'){
        e.target.setAttribute('src','./images/588a64e7d06f6719692a2d11.png');
    }else{
        e.target.setAttribute('src','./images/588a64e7d06f6719692a2d11.png');
    }
})

// tuto sacado de: https://www.youtube.com/watch?v=NxWMLP4ezjc