/*
*Hoisting:
*
*Hositing in Javascript occurs on the first pass done by the JS interpreter. Variabale and function declarations are brought to the top
*of the their scope whether its global or local and stored in memory but the values are not.Functions are hoisted then variables.
*Function expressions are not hoisted.The JS Interpreter is what reads and executes our code line by line.  
*
*/

//Example of hoisting
console.log(x);
var x = "Hoist me up";
//here the variable x is hoisted above console.log call which makes it possible to execute console.log(x). This will result in undefined because the value is not hoisted; 


//This function is moved to the top of its scope.
function birdCall(animal){
    alert("Caw Caw");
}

//This is not hoisted by the Js Interpreter because this is a function expression.
birdCall()