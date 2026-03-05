
const submit = document.getElementById("submitBtn");
const first = document.getElementById("first");
const second = document.getElementById("second");

submit.onclick = function(){
    let input = document.getElementById("myInput").value;
    
    if (input){
        if (first.checked){
            document.getElementById("result").textContent = (input * 1.8 + 32).toFixed(2) + "F";
        }
        if (second.checked){
            document.getElementById("result").textContent = ((input - 32)/1.8).toFixed(2) + "C";
        }
    
    }
    
}