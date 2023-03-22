let semafor = 0;

let trafficLight1 = document.getElementById('trafficLight1');
let trafficLight2 = document.getElementById('trafficLight2');
let trafficLight3 = document.getElementById('trafficLight3');

let trafficLights = document.getElementsByClassName('trafficLight');
for (let index = 0; index < trafficLights.length; index++) {
    trafficLights[index].addEventListener('click', myClick);
}

function myClick(event) {
    semafor = semafor + 1;
    if (semafor == 4) {
        semafor = 1;
    }
    console.log(semafor);
    
    if (semafor == 1) {
        trafficLight1.style.background = 'red';
        trafficLight2.style.background = 'black';
        trafficLight3.style.background = 'black';
    }
    else if (semafor == 2) {
        trafficLight1.style.background = 'black';
        trafficLight2.style.background = 'yellow';
        trafficLight3.style.background = 'black';
    }
    else if (semafor == 3) {
        trafficLight1.style.background = 'black';
        trafficLight2.style.background = 'black';
        trafficLight3.style.background = 'green';
    }
}
