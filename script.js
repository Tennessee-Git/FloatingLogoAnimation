const section = document.querySelector('section');
const logo = document.querySelector('.logo');
const FPS = 60;

section.style.height = window.innerHeight + 'px';
section.style.width = window.innerWidth + 'px';

//logo velocity variables
let xPos = 10;
let yPos = 10;
let xSpeed = 5;
let ySpeed = 5;

function update() {
    logo.style.left = xPos + 'px';
    logo.style.top = yPos + 'px';
}

setInterval( () => {
    if(xPos + logo.clientWidth >= window.innerWidth || xPos <= 0) {
        xSpeed = -xSpeed;
        logo.style.fill = randomColor();
    }
    if(yPos + logo.clientHeight >= window.innerHeight || yPos <=0) {
        ySpeed = -ySpeed;
        logo.style.fill = randomColor();
    }
    xPos += xSpeed;
    yPos += ySpeed;
    update();
},1000/FPS)

function randomColor() {
    let color = "#";
    color += Math.random().toString(16).slice(2,8).toUpperCase();
    return color;
}

window.addEventListener('resize', () => {
    xPos = 10;
    yPos = 10;
    section.style.height = window.innerHeight + 'px';
    section.style.width = window.innerWidth + 'px';
})