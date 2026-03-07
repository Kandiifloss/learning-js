

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
    const latters = "qwertyuiopasdfghjklzxcvbnm";
    const upperLatters = latters.toUpperCase();
    const numbers = "0123456789";
    let allowedChars = "";
    let password = "";
    let temp = ""





    allowedChars += isNumber ? numbers: "";
    

    if (isSymbol && isLower) {
        allowedChars += latters;
    }

    if (isSymbol && isUpper) {
        allowedChars += upperLatters;
    }

    if (isSymbol)
        if (!isLower && !isUpper){
            return "Не выбран регистр символов"
        }
    temp = allowedChars;

    if (allowedChars == "")
        return "Выбери хоть что-то ..."

    function pickaAChar(){
        let random = Math.round((Math.random() * Number(allowedChars.length - 1 ))) ;
        password += allowedChars[random];
    }
    

    
    for (let i = 0; i < length.value; i++){
        let a = Math.round((Math.random() * 100)-1)
        allowedChars = temp;

        //если есть среди чего выбирать, тогда проверяем шанс выпадения
        if (isSymbol && isNumber){
            if (numberRate.value <= a){
                allowedChars = allowedChars.replace(numbers, "");
            }
            else {
                allowedChars = allowedChars.replace(latters, "").replace(upperLatters, "");
            }
        }

        //если можно выбрать регистр, убираем лишние буквы
        a = Math.round((Math.random() * 100)-1)
        if (isUpper && isLower){
            if (registerRate.value <= a){
                allowedChars = allowedChars.replace(latters, "")
            }
            else{
                allowedChars = allowedChars.replace(upperLatters, "")
            }
        }

        
        //выбираем символ из оставшихся 
        pickaAChar();
    }
    




    return password;
}





generate.onclick = function(){

    display.textContent = ""

    display.textContent = generator(length,
                                    includeNumbers.checked,
                                    includeSimbols.checked,
                                    includeUppercase.checked,
                                    includeLowercase.checked);
}