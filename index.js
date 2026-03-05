
let isActive = false;
let isPlayerMove = true;
let activeShashka;

function setup(){

    //удаляем лишние
    document.getElementById("a5").classList.remove("shashka");
    document.getElementById("b4").classList.remove("shashka");
    document.getElementById("c5").classList.remove("shashka");
    document.getElementById("d4").classList.remove("shashka");
    document.getElementById("e5").classList.remove("shashka");
    document.getElementById("f4").classList.remove("shashka");
    document.getElementById("g5").classList.remove("shashka");
    document.getElementById("h4").classList.remove("shashka");

    //назначаем противника
    document.getElementById("a7").classList.add("enemy");
    document.getElementById("b8").classList.add("enemy");
    document.getElementById("b6").classList.add("enemy");
    document.getElementById("c7").classList.add("enemy");
    document.getElementById("d8").classList.add("enemy");
    document.getElementById("d6").classList.add("enemy");
    document.getElementById("e7").classList.add("enemy");
    document.getElementById("f8").classList.add("enemy");
    document.getElementById("f6").classList.add("enemy");
    document.getElementById("g7").classList.add("enemy");
    document.getElementById("h8").classList.add("enemy");
    document.getElementById("h6").classList.add("enemy");

    if (activeShashka){
    document.querySelectorAll(".shashka").forEach(el => el.classList.remove("active"))
    resetActive(activeShashka);
    }

    console.log("Поле обновлиось ");
}
document.querySelectorAll(".shashka").forEach(el => el.addEventListener('click', e=> active(e.target.id)));






function active(id){
    if (!isActive){
        document.getElementById(id).classList.add("active");
        isActive = true;
        activeShashka = id;

    }
    else if (activeShashka == id)
        {
            resetActive(activeShashka);
            
        }
}

function resetActive(id){
    document.getElementById(id).classList.remove("active");
    isActive = false;

}


function move(id){
    if (isPlayerMove){
        
    }
}

















setup()