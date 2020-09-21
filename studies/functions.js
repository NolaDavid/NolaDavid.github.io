/*
* A function is a reusable block of code.
*
*When using functions there are two phases,define and value and in made up of a name, parameters/arguments,function body, and function return statement.
*When defining a function it can be created to use parameters which act as placeholders for when the function is called.
*After a function is defined with a name and what its puropose is, a function is called or invoked which is how a function is put to use.
*To call or invoke a function simply type the name of the function followed by () with arguments inside.
*The difference between arguments and parameters is that arguments are used when calling the function, and parameters are placeholders 
*for the arguments.
* A function can be annonymous which means it does not always have to have a name
* In es6 arrow functions were introduced. 
*/

//Example of a named function:
function add(x,y){
    return x + y;
}

//Example of a variable assigned to a function:
var subtract = function(x,y){
    return x - y;
}
//Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.  We  can specify inputs,by creating a function that accepts parameters.

// We can specify outputs in a function within the body of the function and in the return statement.

/* A functions have access to any variable created inside itself or if a function is inside another function it has access to  variables in its 
* parent function. Any variable created inside a function is not accessible outside of that function.
*/

/*
*Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced),
*that closure stays ALIVE, and data can continue to exist in these closures! 
*
*/