const trafficLightGreen = document.querySelector('#trafficLight1');
const trafficLightYellow = document.querySelector('#trafficLight2');
const trafficLightRed = document.querySelector('#trafficLight3');

// задаем переменные

//задаем функцию

function makeGreen() {
    trafficLightGreen.style.background = ('green');
    trafficLightYellow.style.background = ('black');
    trafficLightRed.style.background = ('black');

    //при клике, 1 круг зеленый, остальные черные

    trafficLightGreen.removeEventListener('click', makeGreen);
    trafficLightYellow.removeEventListener('click', makeGreen);
    trafficLightRed.removeEventListener('click', makeGreen);

    // убираем слушателя на зеленый со всех кругов, добавляем слушателя на желтый

    trafficLightGreen.addEventListener('click', makeYellow);
    trafficLightYellow.addEventListener('click', makeYellow);
    trafficLightRed.addEventListener('click', makeYellow);    
}

function makeYellow() {
    trafficLightGreen.style.background = ('black');
    trafficLightYellow.style.background = ('yellow');
    trafficLightRed.style.background = ('black');

    // при следующем клике, 1 круг желтый, остальные черные
    trafficLightGreen.removeEventListener('click', makeYellow);
    trafficLightYellow.removeEventListener('click', makeYellow);
    trafficLightRed.removeEventListener('click', makeYellow);

        // убираем слушателя на желтый со всех кругов, добавляем слушателя на красный
    trafficLightGreen.addEventListener('click', makeRed);
    trafficLightYellow.addEventListener('click', makeRed);
    trafficLightRed.addEventListener('click', makeRed); 
}

function makeRed() {
    trafficLightGreen.style.background = ('black');
    trafficLightYellow.style.background = ('black');
    trafficLightRed.style.background = ('red');

       // при следующем клике, 1 круг красный, остальные черные
    trafficLightGreen.removeEventListener('click', makeRed);
    trafficLightYellow.removeEventListener('click', makeRed);
    trafficLightRed.removeEventListener('click', makeRed);

     // убираем слушателя на красный со всех кругов, добавляем слушателя на зеленый

    trafficLightGreen.addEventListener('click', makeGreen);
    trafficLightYellow.addEventListener('click', makeGreen);
    trafficLightRed.addEventListener('click', makeGreen); 
}

trafficLightGreen.addEventListener('click',makeGreen);
trafficLightYellow.addEventListener('click',makeYellow);
trafficLightRed.addEventListener('click',makeRed);