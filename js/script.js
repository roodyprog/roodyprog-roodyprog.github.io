
let homeFond =document.getElementById('home');
var typed = new Typed('.typing', {
    strings:['Integrator web','Developer web'],
    typeSpeed:100,
    backSpeed:50,
    loop:true,
});

var typed = new Typed('.typing-2', {
    strings: ['Integrator web', 'Developer web'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
});

let rowImages ='[{"filename":"3.png"},{"filename":"banner.png"},{"filename":"roody.png"},{"filename":"3.png"}]';
let images = JSON.parse(rowImages);
let randomImage = images[Math.floor(Math.random() * images.length)];
homeFond.style.backgroundImage = `url(./img/${randomImage.filename})`;

const nav = document.querySelector('.navbar');
const topOfNav = nav.offsetTop;

function fixNav() {
    if (this.scrollY > 20) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }

    
}
window.addEventListener('scroll', fixNav);

    