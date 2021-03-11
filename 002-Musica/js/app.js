//Smooth scroll 
document.querySelectorAll('.navbar .nav-link').forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector(enlace.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});



//Cambio de color 
window.onscroll = (e) => {
    const scroll = window.scrollY;
    const header = document.querySelector('#navegacion-principal');

    if (scroll > 300) {
        header.classList.add('bg-success');
    } else {
        header.classList.remove('bg-success');
    }
}

//Jquery Countdown
$(document).ready(function() {
    $('#fecha').countdown('2021/04/12', function(evento) {
        //console.log(evento);
        $(this).html(evento.strftime('<span>%D</span> Dias <span>%H</span> Horas <span>%M</span> Minutos <span>%S</span> Segundos'));
    });
});