/*
*Loops are a repeatable block of code. Which helps keep our code D.R.Y(Dont Repeat Yourself)
*
*Loops have a:
*Starting condition: the condition set to specify where to begin
*Stopping condition: once this condition is met the loop ends.
*Increment: How much to move per iteration. This is how we meet the stopping condition
*/

//While loop:
 var hungryPeople = 10;  
 while(hungryPeople > 0){
    console.log("Feed the people!!!")
   hungryPeople--;
}
/*The example above sets a variable equal to 10, and while that variable remains above 0, the code will LOOP and continue to
* to run as long. At the end of each iteration(an iteration is like a lap in a race.) the value is decremented until the variable
* is no longer greater than 0
*/

//For loops:
//using a for loop to loop through an array.
 var teams = ["Saints", "Falcons", "Rams", "Steelers"];
 for(let i = 0; i < teams.length; i++){
    console.log(teams[i])
}
//using a for loop to go backwards through an array.
var drinks = ["Bud Light", "Corona", "Miller"];
for( let i = drinks.length -1; i >= 0; i--){
    console.log(drinks[i])
}



/* The for loop is very similar to a while loop. Used to go through each index of an array
*Syntax- always beings with 'for' followed by () which includes the declaration/assignment of a variable to be a start condition then stopping condition, 
*followed by how much to increment or decrement. Then {},
* which stores the action the loop will continue to perform until the ending condition is met.
*/
//For in loop:
 let person = {name: "David", height: 6}
 for(var keys in person){
    if(keys === person.name){
       console.log("I found David");
    }
}
/*For in loops are specifically designed to loop through an object. It does not have a start or stop condition and also doesnt need to be incremented
* or decremented because this loop goes through the entire object and check the value of all the keys in the key/value pairs stored in its object.
*/