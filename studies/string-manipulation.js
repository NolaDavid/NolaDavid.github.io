/*
* In previous sections we discussed that strings hold textual data, and is referenced by a variable.
* There a a couple different ways to change the value of these strings. One way is to use operators.
* 
*/
// Strings can be concatenated or joined together with a '+' operator
* var stringOne = "Hello";
* var stringTwo = 'World';
* var stringThree = stringOne + " " + stringTwo; 
// This results in "Hello World" due to usage of the addition operator.
*
/* Strings can also be manipulated using string methods.
String methods are built in Javascript function specifically designed to manipulate strings.
*/
* stringOne.toUpperCase() // This method takes a string and returns it with all capitalized letters.
* stringTwo.toLowerCase() // This method takes a string and returns it will all the letters lowercase.