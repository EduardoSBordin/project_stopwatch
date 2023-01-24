let btnPlay = document.querySelector('#btnPlay');
let btnPause = document.querySelector('#btnPause');
let btnStop = document.querySelector('#btnStop');
let btnStep = document.querySelector('#btnStep');


let counterInf = document.querySelector('#counterInf');
let inf = document.querySelector('#inf');
let btnsDiv = document.querySelector('#btns');

let stopStep = document.querySelector('#stopStep');
let stopP = document.querySelector('#stopP');

let getBody = document.querySelector('body');

let hours = 0;
let minutes = 0;
let seconds = 0;

let hours2 = 0;
let minutes2 = 0;
let seconds2 = 0;

let speed = 100;
let interval;

btnPlay.disabled = false;
btnStop.disabled = true;
btnPause.disabled = true;
btnStep.disabled = true;

let creatorStep;
let counter = 0;


btnPlay.onclick = () => {

    // let createANewElementToStepStop = document.createElement('p');
    // createANewElementToStepStop.id = "stopStep";

    // getBody.appendChild(createANewElementToStepStop);

    interval = setInterval(() => {
        
        timer();} , speed); 

    btnPlay.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;

    counterInf.style.transition = "0.5s";
    counterInf.style.scale= "2";
    counterInf.style.color = "rgb(165, 144, 42)";
    
    inf.style.transition = "0.5s";
    inf.style.color = "white";
    
    btnsDiv.style.transition = "0.5s";
    btnsDiv.style.marginTop = "0px";

    btnStep.disabled = false;
    if(counter >= 3){
        console.log(counter);
        btnStep.disabled = true;
    }
}

btnPause.onclick = () => {

    clearInterval(interval);

    btnPlay.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = false;
    btnStep.disabled = true;

    counterInf.style.color = "rgb(42, 163, 165)";

    btnStep.disabled = true;
}

// let getCre;
// let getDel;

btnStep.onclick = () => {

    counter++
    if(counter >= 3){
        console.log(counter);
        btnStep.disabled = true;
    }
       console.log(typeof counter);

    creatorStep = document.createElement('p');
    creatorStep.id = 'stopP';
    creatorStep.innerHTML += `${hours2} ${hours} : ${minutes2} ${minutes} : ${seconds2} ${seconds} <br>`; 

    let getCre = creatorStep;
    stopStep.appendChild(creatorStep);

    creatorDeleteStep = document.createElement('button');
    creatorDeleteStep.id = 'btnDeleteStep';
    creatorDeleteStep.innerHTML = '<i class="fa-solid fa-trash"></i>';
    
    creatorDeleteStep.onclick = () => {
        getCre.remove();
        getDel.remove();
        counter--;
        btnStep.disabled = false;
        
    };
    let getDel = creatorDeleteStep;
    stopStep.appendChild(creatorDeleteStep);

    
}

function timer(){


    // Option 1: Here a format.
    seconds++;
    if(seconds >= 10){
        seconds = 0;
        seconds2++;

    if(seconds2 >= 6){

        seconds2 = 0;
           
    minutes++;
    if(minutes >= 10){
        minutes = 0;
        minutes2++;

    if(minutes2 >= 6){

        minutes2 = 0;

    hours++;
    if(hours >= 10){
        hours = 0;
        hours2++;

    if(hours2 >= 6){
        seconds = 0;
        seconds2 = 0;
        minutes = 0;
        minutes2 = 0;
        hours = 0;
        hours2 = 0;
    }
    }
    }

        }
    }
}
    counterInf.innerHTML = `${hours2} ${hours} : ${minutes2} ${minutes} : ${seconds2} ${seconds}`;

    // Option 2: Here other format but with the same result
    // seconds++;
    //counterInf.innerHTML = (seconds >= 60 ? seconds : seconds);
}

btnStop.onclick = () => {

    //location.reload();
    btnStep.disabled = true;
    // let b = document.querySelector('#stopP');
    // b.remove()

    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;

    hours2 = 0;
    minutes2 = 0;
    seconds2 = 0;

    btnPlay.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = true;

    counterInf.style.transition = "0.5s";
    counterInf.style.scale= "1";
    counterInf.style.color = "#ffffff00";

    inf.style.transition = "0.2s";
    inf.style.color = "#ffffff00";
    
    btnsDiv.style.transition = "0.5s";
    btnsDiv.style.marginTop = "-100px";
}