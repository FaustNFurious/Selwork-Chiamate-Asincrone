// Creare un input per inserire un tempo (s)
// Pulsante start timer
// Pulsante Stop timer
// Pulsante azzeramento totale

let timer = document.querySelector('#timer');
let tempoRimanente = document.querySelector('#tempoRimanente');
let startButton = document.querySelector('#startButton');
let stopButton = document.querySelector('#stopButton');
let resetButton = document.querySelector('#resetButton');



let interval = 0;
let cnt = 0;
let secondiRimanenti = 0;


// start timer
startButton.addEventListener('click', () => {

    clearInterval(interval);
    cnt = timer.value;

    if (cnt < 0) {
        alert(`Non puoi inserire un tempo negativo`);
        timer.value = ``;
        tempoRimanente.innerHTML = ``;
    }

    interval = setInterval( () => {

        if (cnt <= 0) {
            clearInterval(interval);
            tempoRimanente.innerHTML = `Tempo Scaduto`;
        }
        else {
            tempoRimanente.innerHTML = cnt;
            cnt--;
        }    
        
    }, 1000);
    
    
});

// stop timer
stopButton.addEventListener('click', () => {

    clearInterval(interval);
    
});

// reset di tutti i valori
resetButton.addEventListener('click', () => {

    timer.value = ``;
    clearInterval(interval);
    tempoRimanente.innerHTML = ``;

});