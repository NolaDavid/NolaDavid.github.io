/*
* Datatypes

* 0. Datatypes in Javascript are the way we view the value of data given
* 
* 1. There are two sub-groups of Datatypes: Primitive and Complex datatypes.
* 
* 2. Examples of Primitive datatypes: String, number, boolean, and undefined,and null
* Primitive values are passed into functions BY COPY- which means if reassigned inside a function, the original reference remains the same.
*
* 3. Examples of Complex datatypes: Arrays, objects
* Complex datatypes are passed into function BY REFERENCE, if reassigned in the function it will change the referencing value.
*
* 4. The difference between Primitive and Complex datatypes are that complex datatypes can hold more than one type of data.
* Where as Primitive datatypes hold only one particular value of data. Also primitive datatype are copy by value and complex datatypes are copy by reference;
*The difference between copy by value and copy by reference is that when you assign two variables to a complex data type they are pointing to the exact object and any changes will affect both variables,
* but with primitive datatypes they are copy by value.
*
*/

//Copy by Reference vs Value
let a = 99;
let b = a;
a = 25;
//In the example above "a' is set to equal 99 and then 'b' is equal to 'a' which would be 99. After reassigning "a", 'b' is still equal to 99 .
let person = {name: "David", age: 32};
let samePerson = person;
samePerson.age = 40;
/*In the above example where a person object is created and then a new variable is set to equal the same object.
* Any changes made to either object will result in both variables changing, this is a result of copy by reference;
*/


// 1.Numbers: hold a numeric value
var myAge = 32; //example of a variable holding a numeric value;


// 2. Strings: are always surround in quotes whether it be '' , "", or ``;
// Strings are used to represent text.
var stringOne = 'this is a string';
var stringTwo = "this is also a string";
var stringThree = `this is a string literal`;

// 3. Boolean: used to represent only two values true or false.
// Boolean values are helpful when comparing two things.
if( 10 > 5); //Example of comparing two values and expecting a result of yes or no , true or false.

// 4. Array: can be thought of as an ordered list starting at 0 instead of 1.
/* Arrays in Javascript are wrapped in [], and start with an index of 0 instead of 1.
They can also hold different types of values, whether its a mixture of true/ false, numbers, or string values.
*/
let myArray = [45,"string", true, undefined];

//To access an element in an array, type the name of the array followed by the index the element is in surrounded in brackets;
let someAge = myArray[0];
//In the example above,  I am accessing the first element in  myArray using bracket notation to access the number 45 and setting that value to a variable;

// 5. Object: are a collection of key/value pairs and are created with { };
/* Objects can store different data types as values but their keys are always strings.
* to access the values stored in the object you would type the name of the object followed by either dot notation or bracket notation with the key your are trying to access..
*/
const myObject = {name: "David", sleeping: false}
let davidsName = myObject.name;   // example of accessing the key "name" to get the value by using dot notation
let sleeping = myObject["sleeping"] // example of accessing the key in side myObject using bracket notation, which the key will always be a string

// 6. Function: Can be thought of as a super hero's special ability.
/* Functions are created with 4 parts; The keyword 'function' followed by the name you would like to assign it,(), and then {}.
* When creating a function it can take parameters which would be placed inside the () but is not always necessary.
* If you would like to use the function one would need to call or invoke the function by stating the name of the function followed by ().
* When calling a functon, one would pass in arguments to the function call for the function to do something with.
* Functions can also be stored inside variables.
* Return statements in functions are option.
*/
let add = function(x,y){ return x + y} // example of creating a variable equal to a function
//In this example "x" and 'y' are the parameters which act as placeholders. 
console.log(add(2,3)) /* This is an example of calling a function. We are calling/invoking the add function with the arguments of
* '2' and '3' which will replace the placeholders . This function returns  2 + 3 .
*/

// 7. Undefined: is a value given to a variable thats  been declared but with no set value. 
var noMeaning; // This is an example of a variable thats been declared but is not referencing any value.

// 8. Null: Only has one value which is null. It represents the abscense of value. It is a primitive data type looked to be as falsy.

// 9. NaN: Known as Not a number. NaN has a scope of global
/*
* An example of NaN would be a mathematic equation resulting in NaN
* Math.sqrt(-1) or var sum = 99 / "c"
*or
*/

// Infinity and -infinity
/* Infinity is a global variable representing the value infinity the highest number possible.
*Infinity is not writable, enumerable, or configurable.
*Syntax - Number.POSITIVE_INFINITY
*
*Negative infinity or -infinity is a global variable used to represent the lowest possible number.
*When divided into itself or positive infinty the result is NaN
*Negative infinity divided by any positive other than positive infinity number results in -infinity
* When multiplied by itself the result is positive infinity
* Syntax - Number.NEGATIVE_INFNITY
*/



