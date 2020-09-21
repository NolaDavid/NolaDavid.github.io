/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName; //used in es5
let secondExample; // used in es6
const thirdExample; // used in es6

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
const myWord = "frog";
//myWord = 'triangle';  If you try to re-assign a constant you will recieve a TypeError.
/*
* Hoisintg:
*
* 0. In Javascript variables declared with the var key word are hoisted to the top, they are global variables;
*
* 1. Unlike variables declared with the key word 'var', variables declared with 'let' and 'const' are block scoped.
* Which means they are hoisted to the top of their respective block of code instead of the the entire application.
*
* 2. 
*/

//example of a variable declared with they keyword 'var' being hoisted
console.log(hoistedVariable)
var hoistedVariable = 'this works'
/* Javascript reads the code line by line from top to bottom, but makes two passes. During the first pass the variable 'hoisted variable',
* is hoisted to the top of the environment, which puts it above the console.log call and it enables this to be working code.
*The same can NOT be done with variables declared with 'const' and 'let'. You must declare the variable before trying to do anything with it.