
window.onscroll = () => {

    let scroll = window.scrollY;

    //Seleciona <div clas="header-scroll">
    const headerScroll = document.querySelector('.header-scroll');

    if( scroll > 250 ) {
        headerScroll.classList.add('activo');
    }else {
        headerScroll.classList.remove('activo');
    }
}

