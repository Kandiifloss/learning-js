


let count = document.getElementById("display").innerText;

count = Number(count)




document.getElementById("increse").onclick = function (){
    count++;
    document.getElementById("display").textContent = count
}


document.getElementById("decrese").onclick =  function (){
    count--;
    document.getElementById("display").textContent = count
}

document.getElementById("reset").onclick = function (){
    count = 0;
    document.getElementById("display").textContent = count
}