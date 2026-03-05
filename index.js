const button = document.getElementById("generatorBtn");
const display = document.getElementById("display");
let min = document.getElementById("min");
let max = document.getElementById("max");





button.onclick = function(){
    display.textContent = Math.floor(Math.random() * (max.value - min.value+1)) - min.value + 2 ;

}

