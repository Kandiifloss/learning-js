const timeDisplay = document.getElementById("time");

function update(){
    let = currentTime = new Date();
    let ampm = currentTime.getHours() / 12 > 1 ? "PM": "AM" ;
    timeDisplay.textContent = `${currentTime.getHours().toString().padStart(2, 0)%12}:`+
                              `${currentTime.getMinutes().toString().padStart(2, 0)}:`+
                              `${currentTime.getSeconds().toString().padStart(2, 0)}  `+
                              `${ampm}`;
}
update();
setInterval(update, 1000);