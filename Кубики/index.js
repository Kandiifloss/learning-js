//document.getElementById("board").innerHTML = "<div class='dice1'> </div>"

const input = document.getElementById("myText");
const roll = document.getElementById("rollBtn");
const display = document.getElementById("display");
const board = document.getElementById("board")
const resTotal = document.getElementById("resetBtn");



class Game{
    static dot = "<div></div>";

    constructor(board, display){

        this.board = board;
        this.display = display;


        this.result = 0;
        this.total = 0;
    }


    drawDice(number) {
        if (number == 5){
            this.board.innerHTML += `<div class='dice5'>${Game.dot.repeat(4)}<div class='center'></div> </div>`;
        }
        else {
            this.board.innerHTML += `<div class='dice${number}'> ${Game.dot.repeat(number)} </div>`;
            this.display.innerText += ` ${number}`;
        }
    }

    clear() {
        this.board.innerHTML = "";
        this.display.innerText = "";
        

        this.result = 0;

        }

    roll(input){
        let random = Math.round(Math.random() * 5) + 1;
        
        this.clear();
        this.display.innerText = "Выпало: ";

        for (let i = 1; i<=Number(input.value); i++){
            random = Math.round(Math.random() * 5) + 1;
            this.drawDice(random);
            this.result += random;  
        }

        this.total += this.result;

        this.display.innerText += "\nИтого: " + String(this.result);
        this.display.innerText += "\nЗа все время: " + String(this.total);
    }

    reset() {
        this.total = 0;

        this.clear();

        this.display.innerText += "За все время: " + String(this.total);

    }

}




const game = new Game(board, display);


roll.onclick = function(){
    game.roll(input);
}

resTotal.onclick = function (){
    game.reset();
}

