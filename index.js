//я долго не мог разобраться с оптимальн

const length = document.getElementById("input");
const display = document.getElementById("display");
const generate = document.getElementById("generate");
const includeNumbers = document.getElementById("includeNumbers");
const includeSimbols = document.getElementById("includeSimbols");
const includeUppercase = document.getElementById("includeUppercase");
const includeLowercase = document.getElementById("includeLowercase");
const numberRate = document.getElementById("numberRate");
const registerRate = document.getElementById("registerRate");




function generator(length, isNumber, isSymbol, isUpper, isLower){
    //случайный символ
    function symbol(){
        let randChar = Math.round((Math.random() * 25)) + 97;
        return String.fromCharCode(randChar);
    }

    //случайный номер
    function number(){
        let randChar = String(Math.round((Math.random() * 9)));
        return randChar;
    }


    //случайный символ с случайным регистром
    function randRegister(){
        let rand = Math.round((Math.random() * 100));
        if (rand < Number(registerRate.value)){
            return symbol().toUpperCase();
        }
        else
             return symbol();
    }

    if (!isNumber && !isSymbol){
        display.textContent = "Выберите хоть что-то . . . ";
        return;
    }

    if (isSymbol){
        if(!isLower && !isUpper){
            display.textContent = "Выберите регистр букв";
            return;
        }
    }

        
    
    
    for (let i = 0; i < length.value; i++){
        
        let charChoise = Math.round((Math.random() * 100));
        
        //только числа
        if (isNumber && !isSymbol){
            display.textContent += number();
            continue;
        }
        
        //только символы
        if (isSymbol && !isNumber){
            if (isLower && isUpper){
                display.textContent += randRegister();
                continue;
            }
            else if (isUpper){
                display.textContent += symbol().toUpperCase();
                continue;
            }
            else {
                display.textContent += symbol()
                continue;
            }

            
            
            
        }

        //Символы и числа
        if (isNumber && (charChoise <= Number(numberRate.value))){
            display.textContent += number();
            continue;
            
        }
        else 
            display.textContent += randRegister();
    
    }
}





generate.onclick = function(){

    display.textContent = ""

    generator(length, includeNumbers.checked, includeSimbols.checked, includeUppercase.checked, includeLowercase.checked);
}