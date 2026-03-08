const start = document.getElementById("startBtn");
const stop = document.getElementById("stopBtn");
const reset = document.getElementById("resetBtn");
const displayTimer = document.getElementById("display");

let isRunning = false;
let clockMiliseconds = 0; 
let startTime = 0;
let running;

function startTimer(){
    if (!isRunning){
        startTime = Date.now() - clockMiliseconds;
        running = setInterval(update, 10);  
        isRunning = true;
        }
    else return;
    }

function stopTimer(){
    clearTimeout(running);
    isRunning = false;
    
}

function resetTimer(){
    clearTimeout(running);
    displayTimer.textContent = "00:00:00:00";
    clockMiliseconds = 0;
    isRunning = false;
}

function update(){
    const now = Date.now()
    clockMiliseconds = (now - startTime);
    
    let millisecons = Math.round(clockMiliseconds % 1000/10).toString().padStart(2,"0");
    let seconds = Math.round(clockMiliseconds / (1000) % 60).toString().padStart(2,"0");
    let minutes = Math.round(clockMiliseconds/(1000*60)%60).toString().padStart(2,"0");
    let hours = Math.round(clockMiliseconds/(1000*60*60)).toString().padStart(2, "0");

    displayTimer.textContent = `${hours}:${minutes}:${seconds}:${millisecons}`;
}

start.onclick = startTimer;
stop.onclick = stopTimer;
reset.onclick = resetTimer;