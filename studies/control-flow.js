/* Control-Flow:
* Is the order in which code is executed.
* Uses conditional statements,and switch statements to make decisions and control the flow of the application.
*/
var weather = 'sunny';

//Below if the conditional statement is a true statement, then the code below it runs
if(weather === 'sunny'){
//Since   the statement does result to true the user will be alerted with the this set message
    alert("The weather is nice today")
    //else statement is kind of like a last resort if all other conditions equate to false;
} else {
    //If the above condition had resulted in a false statement , this action below would have been executed. Which will result in a user getting an alert to stay inside.
    alert("Stay inside today")
}
/*This example shows the evaluation of if weather is strictly equal to sunny. This has only two results yes or no and depending on the result it returns 
prints to the console a different statement. 
*/


// When writing an application you can also chain these conditional statements together using if/esle and else

var weightClass = "Middle Weight";

if(weightClass === "Straw Weight"){
    return 106;
} else if(weightClass === "Bantom Weight"){
    return 115;
}else if(weightClass === "Light Weight"){
    return 125;
}else if(weightClass === "Middle Weight"){
    return 160
} else if(weightClass === "Heavy Weight") {
    return 225;
} else {
    return "No weight class found!";
}
/**
 * In the example above, the code uses method chaining to determine what to return when given a particular variable or in this case a weight class.
 * If the input variable does not exist then we have an else statement to cover that case;
 * 
 */ 
 
 /**
  * Inside a function, if lots of different values to chose from, switch statements can be used, instead of  using "if" several times.
  * Statements are executed when  the first matching case  is found and then followed by a break;
  * 
  */ 
      var animal = "dog";
      switch (animal){
        case "cat":
        case "dog":
            return "Pet";
            break;
        case "zebra":
        case "rhino":
        case "kanagroo":
            return "You must be at the zoo";
            break;
      }