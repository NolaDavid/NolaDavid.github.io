/*
*There are six different types of operators in Javascript:
*   
*
*
/*   Assignment operators:
*The assignment operator, assigns the value of the right operand to the value on the left
*These operators include: =,+=,-=,*=, /= and many more.
*/
 var x = 6 // example of assignment operator where the value of 6 is referenced by the variable "x"
 x += 6; // example of the addition assignment. Which would be the same as j = j + y;
/*
*
*
*   Arithmetic operators: 
*Are used in mathematic expressions
*These operators include:  %(remainder), ++(increment), --(decrement), + , -, and **
*/
/*Using the % operator takes two operands one into the other. Using this operator will result in 0 if the operand on the left is evenly divisible 
* by the operand on the right. If not it will return whats left over between the closest number divisible and the operand on the left
*/
 var remaineder = 10 % 5; // which return 0 because 5 goes into 10 evenly
 var difference = 10 % 6; // will return 4 because 6 goes into 10 1 time and has a remainder of 4.
/*
* Using the ++ assignment can be used as either a prefix or a suffix. If used as a prefix it returns the number after adding one to it. If used as a suffix
*returns the number before adding one to it. The second + can be changed with a number to increment by that specified number.
*/
 let i = 0; //First we declare a variable 'i' and set it equal to 0;
 i++; // this is an example of incrementing 'i', where 1 will be added to its value. This is generally done in a loop.
// Using the -- operator or the decrement operator  will decrease its operand by 1.
 var n = 10; // Here we create a variable equal to 10;
 n--; // Then we decrement the variable we created by 1 resulting in n being equal to 9; Also used in loops
// ** is the exponential operator which returns the base  to the exponential power.
 var titan = 5 ** 3; // this results in titan being equal to 125; It would be the equivalent to 5 * 5 * 5;
/*
*   Comparison operators:
* Are used to compare an operand on the left to the operand on the right, usually with a true or false value.
* These operators include: 
*/

//Equal (==) : which would return true if the operand on the left is equal to the operand on the right.
 if( 6 == '6') // this is an example of the equal operator. Javascript converts the string version of '6 ' to a number and compares them resulting in true;
//Not equal (!=): which returns true if the operand on the left is not equal to the operand on the right.
 if( 7 != 8) // returns true because 7 is not equal to 8
//Strict equal (===) : which is the same as the equal comparison only stricter. The operand on each side have to be exactly the same to return true;
 if(10 === 10) // this returns true because both 10s are the same data type and are exactly the same.
 if(6 === '6') // this returns false when using the strict equality operator because javascript is interprets this as comparing a number to a string which are not the same.
//Strict not equal (!==) : which returns true is the operands on each side are not exactly the same
 if(5 !== '5') /* this returns true because the operand on the left is a number and the operand on the right is a string.
*this comparison operaton would also return true if they were the same type but different value
*/
//Greater than (>): returns true if the operand on the left is greater than the operand on the right.
 if ( 10 > 2) // The greater than operator compares 10 to 2 and returns true because 10 is greater than 2.
//Greater than or equal (>=): returns true if the operand on the left is greater than or equal the the operand on the right.
 if( 3 >= 2) // Returns true because the operand is greater than or equal to the operand on the right
//Less than (<): returns true if the operand on the left is less than the operand on the right.
 if(6 < 8) // returns true because the operand on the left is less than the operand on the right
//Less than or equal (<=): returns true if the operand on the left is less than or equal to the one on the right.
if(7 <= 22) // returns true because the operand on the left is less than or equal to the operand on the right
/*Logical operators
* Are used with the result of a true or false logic but can have an actual value.
*/
// Logical (&&) operator, which translates to 'and'; 
 if ( 5 > 2 && 10 > 5) // is an example using the && operator where it will return true if both sides are true statements
// Logical(||) operator translates to 'or'
  if (4 > 1  || 5 < 6) // this returns true if either statement is true
/*   Unary operators (!, typeOf, -)
* Are operators with only 1 operand
*/
typeof 6 // this is an example of an urnary operation because it performs an action  and only has one side of data to evaluate


/*   Ternary operator (a ? b : c)
* Takes 3 operands:
* A condition followed by a ?
* followed an expression to be return if its true
* and another expression to be return if false. 
* The last to operands are seprated with a ':'.
*/
 4 > 8 ? true: false; // this returns true if 4 is greater than 8 and false if not.





