const trafficLightGreen = document.querySelector('#trafficLight1');
const trafficLightYellow = document.querySelector('#trafficLight2');
const trafficLightRed = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLightGreen.style.background = ('green');
    trafficLightYellow.style.background = ('black');
    trafficLightRed.style.background = ('black');

    trafficLightGreen.removeEventListener('click', makeGreen);
    trafficLightYellow.removeEventListener('click', makeGreen);
    trafficLightRed.removeEventListener('click', makeGreen);

    trafficLightGreen.addEventListener('click', makeYellow);
    trafficLightYellow.addEventListener('click', makeYellow);
    trafficLightRed.addEventListener('click', makeYellow);    
}

function makeYellow() {
    trafficLightGreen.style.background = ('black');
    trafficLightYellow.style.background = ('yellow');
    trafficLightRed.style.background = ('black');

    trafficLightGreen.removeEventListener('click', makeYellow);
    trafficLightYellow.removeEventListener('click', makeYellow);
    trafficLightRed.removeEventListener('click', makeYellow);

    trafficLightGreen.addEventListener('click', makeRed);
    trafficLightYellow.addEventListener('click', makeRed);
    trafficLightRed.addEventListener('click', makeRed); 
}

function makeRed() {
    trafficLightGreen.style.background = ('black');
    trafficLightYellow.style.background = ('black');
    trafficLightRed.style.background = ('red');

    trafficLightGreen.removeEventListener('click', makeRed);
    trafficLightYellow.removeEventListener('click', makeRed);
    trafficLightRed.removeEventListener('click', makeRed);

    trafficLightGreen.addEventListener('click', makeGreen);
    trafficLightYellow.addEventListener('click', makeGreen);
    trafficLightRed.addEventListener('click', makeGreen); 
}

trafficLightGreen.addEventListener('click',makeGreen);
trafficLightYellow.addEventListener('click',makeYellow);
trafficLightRed.addEventListener('click',makeRed);