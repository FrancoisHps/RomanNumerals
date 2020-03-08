function romanNumeral(decimalNumber) {
    var romanNumeral = "";
    var romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];
    var index = 0;
    
    try {
        if (Number.isInteger(decimalNumber)) throw "Not an integer";
        if ((decimalNumber <= 0) || (decimalNumber >= 4000)) throw "Out of range";
    }
    catch(err) {
         var errContent= document.getElementsByClassName("error")[0]
         errContent.innerHTML = err;
         errContent.style.display = "block";
         setTimeout(function(){ errContent.style.display = "none"; }, 2000);
         return " "
    }
    
    // verifier que c'est bien un nombre et dans l'intervalle [1-3999]
    while(decimalNumber > 0) {
        var digit = decimalNumber % 10;
         if (digit < 4) {
            romanNumeral = romanNumerals[index].repeat(digit) + romanNumeral;
        }
        else if (digit == 4) {
            romanNumeral = romanNumerals[index] + romanNumerals[index + 1] + romanNumeral;
        }
        else if (digit == 9) {
            romanNumeral = romanNumerals[index] + romanNumerals[index + 2] + romanNumeral;
        }
        else {
             romanNumeral = romanNumerals[index + 1] + romanNumerals[index].repeat(digit - 5) + romanNumeral;
        }
        
        decimalNumber = Math.floor(decimalNumber / 10);
        index += 2;
    }

    return romanNumeral;
}

function showRoman(decimalNumber, id) {
    var result = romanNumeral(decimalNumber);
    if (result) {
        document.getElementsByClassName(id)[0].innerHTML = result;
    }
}