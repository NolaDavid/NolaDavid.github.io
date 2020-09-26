/*
    Scoping:

*What is scoping?
*Scoping is used to determine where variables, objects, and functions are stored at in memory. 
* The different scopes in JavaScript are global local and block(also known as function scoped). 
* When creating variables,the scope to which they are bound to are as follows:
*   Variables created with the "Var"are globaly and locally scoped.
*   Variables created with the keywords "Const" or "Let" are block scoped. Which means they are only accessible within that particular block of code.
* If  a variable in the global scope with the same name as the parameter given in a function, the function would access the one given in the function, because the local takes precedence.
* This is called variable shadowing.
* will overide the global variable. This example is why it is good practice to keep track and use unique names when creating variables. In the same scenario where two variables with the same name exist both globally and locally,
*but trying to access the variable 
* globally it will access the global varaible over the function variable because the variable stored in the locally is only accessible within that block.
*
*/


//Global variable

var apple = "red";

//Block scoped variable
function someMath(x,y){
    const PI = 3.12343545;
    let equation = (PI + x) % y
    return equation;
}
// The variables PI and equation are only able to be used within that block of code, because they are block scoped.
