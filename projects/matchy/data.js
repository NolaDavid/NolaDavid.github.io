/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `animal` and assign it to an empty object.
var animal = {};
//Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
animal.species = "Dog";
//using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
animal["name"] = "Ralph";
//Using either notation, give `animal` a **property** called `noises` with a value of empty array.
animal.noises = [];
//Print your `animal` Object to the console by adding, `console.log(animal)';
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `noises` and assign it to an empty array.
var noises = [];
//Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
noises[0] = "Wuff";
//Using an array function add another noise to the end of `noises`.
noises.push("Ruff Ruff");
//place an element at the begining of the array.
noises.unshift("Howl");
//Using **bracket syntax** again, add another element to the end of `noises`. Make sure that the way you do this step would work no matter how many elements `noises` had.
noises[noises.length] = "Wehhhh" ;
//console.log` the length of `noises`
console.log(noises.length);
//`console.log` the last element in `noises` again without hard coding the index.
console.log(noises[noises.length - 1]);
//console.log the whole array.
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////



animal['noises'] = noises;
//Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
animal.noises.push("Meow");
//Using any syntax add another noise to the `noises` property on `animal`.
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * // Bracket notation and dot notation.  Using a for in loop can also access properties in an object.
 * 2. What are the different ways of accessing elements on arrays?
 * You can access elements in an array by their index using dot or brack notation. Also you can loop through an array.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `animals` and assign it to an empty array.
var animals = [];
//`push` our `animal` that we created to `animals`. You should now see your first animal appear on your `index.html` page!
animals.push(animal);
//console.log `animals`.
console.log(animals);
/*Create a variable called `duck` and assign it to the data:
  - `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`*/
var duck = { species: 'Duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
// `push` `duck` to `animals`
animals.push(duck);
// `console.log` `animals`.
console.log(animals);
//Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
var frog = { species: 'Frog', name: 'James', noises: ['Ribbit', 'Ribbit Ribbit ', 'Ribittttt', 'Ribit Ribittttt']};
var dinosaur = { species: 'Dinosaur', name: 'Trogdor', noises: ['Roar', 'Chomp ', 'Smack']};
animals.push(frog,dinosaur);
//`console.log` `animals`, and, `console.log` the length of `animals`.
console.log(animals.length)
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Choose a data structure for this **list** of friends
//Create a variable called `friends` and assign it to the data structure that you chose.
var friends = [];
//We chose an array for this approach to utilize the indexes of this array.
//Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array, using `Math.random`
function getRandom(arr){
 return arr[Math.floor(Math.random() * arr.length)]; 
}
//Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
friends.push(getRandom(animals)["name"]);
//console.log `friends`
console.log(friends)
//Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array
duck["friends"] = friends;
//console.log 'duck';
console.log(duck)
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}