const display = document.getElementById("display");
 
function press0() {display.value += "0"; }
function press1() {display.value += "1"; }
function press2() {display.value += "2"; }
function press3() {display.value += "3"; }
function press4() {display.value += "4"; }
function press5() {display.value += "5"; }
function press6() {display.value += "6"; }
function press7() {display.value += "7"; }
function press8() {display.value += "8"; }
function press9() {display.value += "9"; }

function pressPlus() {display.value += "+"; }
function pressMinus() {display.value += "-"; }
function pressMultiply() {display.value += "*"; }
function pressDivide() {display.value += "/"; }
function pressMod() {display.value += "%"; }

function clearDisplay() {
    display.value="";

}

function calculateResult(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value ="Error";
    }
}