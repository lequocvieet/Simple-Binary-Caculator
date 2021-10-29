let btn0 = document.getElementById("btn0");
let result = document.getElementById("res");
let btn1 = document.getElementById("btn1");
let btnSum = document.getElementById("btnSum");
let btnSub = document.getElementById("btnSub");
let btnEqual = document.getElementById("btnEql");
let btnDiv = document.getElementById("btnDiv");
let btnMul = document.getElementById("btnMul");
let btnClear = document.getElementById("btnClr");
 


// fuction help validates input string from user
function checkValid(input) {
    if (input[0] === "=" || input[0] === "+" || input[0] === "-"
         || input[0] ==="*" || input[0]==="/") {
        return false;
    }
    return true;

}
// user press button input

    btn0.onclick = function () {
        result.innerHTML = result.innerHTML + "0";
      
    }
    btn1.onclick = function () {
        result.innerHTML = result.innerHTML + "1";
    }
    btnSum.onclick = function () {
        result.innerHTML = result.innerHTML + "+";
    }
    btnSub.onclick = function () {
        result.innerHTML = result.innerHTML + "-";
    }
    btnMul.onclick = function () {
        result.innerHTML = result.innerHTML + "*";
    }
    btnDiv.onclick = function () {
        result.innerHTML = result.innerHTML + "/";
    }
    btnClear.onclick = function () {
        result.innerHTML = "";
    }


    btnEqual.onclick = function () {
        result.innerHTML=result.innerHTML+"=";
        if(result.innerHTML.length>20){
            result.innerHTML="";
            return alert("Expression is too long");   // check length of expression

        }
        var regularExpression = /(\D)/; //regex accept only character not include +-
        var expression = result.innerHTML.split(regularExpression); //split with regex
        var newExpression = ''; //new string to store all expression after convert
        for (var i = 0; i < expression.length - 2; i++) {
            if (i % 2 === 0) { // if index is odd then it must be operators on other hand it is operands
                var x = parseInt(expression[i], 2); //convert operators in redix 2 to decimal
                newExpression = newExpression.concat((x.toString()));
            } else {
                newExpression = newExpression.concat((expression[i].toString()));

            }
        }
         if(!isNaN(eval(newExpression))){
            result.innerHTML = result.innerHTML + eval(newExpression);
        }else{
            alert("Wrong expression!");
            result.innerHTML="";
        }
        
    }
