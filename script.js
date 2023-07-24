// // const sr = ScrollReveal();

// // ------------ scroll reveal --------------
// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });


// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// // ScrollReveal().reveal('.home-img, .services-container', { origin: 'bottom' });



window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowhieght = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 120;

        if(revealtop < windowhieght - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}
