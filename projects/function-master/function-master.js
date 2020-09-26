//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
 //Should take an object and return its values in an array"   
var arr = [];
//go through object and push the value to the newly created array
for(var keys in object){
  arr.push(object[keys])
}
return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its keys in a string each separated with a space"
function keysToString(object) {
let newArr = [];
//push the keys into the array
for(let keys in object){
    newArr.push(keys)
}
//return the array  as a string with a space inbetween each item
return newArr.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //Should take an object and return all its string values in a string each separated with a space
   var newArr = [];
   //loop through object and if its datatype is a string push it to the newArr
   for(let keys in object){
       //check the datatype of the key and if its a string push it
       if(typeof object[keys] ===  "string"){
           newArr.push(object[keys])
       }
   }
   //retunr the array as a string with a space inbetween each element
   return newArr.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //if the collection is an array return array if not return object
    return Array.isArray(collection) ? "array": "object"
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //select the first index of the string and make it uppercase
    //slice off the rest and return it with the uppercased character
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
// turn string lowercase split the string into an array by a space.
//loop over the array with map where each first letter of the word is capitalized
//then joined back together after slice the rest of the word and return the words in a string seprated by a space
return string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

}


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
 //   Should take an object with a name an a species and return '<Name> is a <Species>'"
 //access the name property in the given object
 //capitalize the first letter of the name and join it together with the rest of the word
 //access the species property change the first letter to uppercase 
return object.name.charAt(0).toUpperCase() + object.name.slice(1) + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//check if noises exist if it doesnt return there are no noises
if (object.noises === undefined || object.noises.length <= 0){
     return "there are no noises"
} else {
    //if it does exist return the noises in a string with a space in between
    return object.noises.join(" ")
}

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //use the search string method to find if the given word exists in the string and return false or true
if(string.search(word) === -1){
    return false
}
return true
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //add the name given to the object given
   object.friends.push(name);
   return object;
   
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //check if name given is in the objects friend array
   if(object.friends === undefined || !object.friends.includes(name)){
       return false;
   }
   return true
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //create an aray  to hold people who are not friends
    let friendLess = [];
    //loop through the given array
    for(let i = 0; i < array.length; i++){
        //if the person at the current iteration is not equal to the persons name given 
        //and if the person is not on the current iterations friends list 
        //push that person
        if(array[i]["name"] !== name && !array[i]["friends"].includes(name)){
            friendLess.push(array[i]["name"])
        }
    }
    
    return friendLess
    
}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//input object/key/value
//output object with that key value
    if(object[key] === undefined){
        object[key] = value;
    } else if(object[key] === object[key]){
        object[key] = value;
        
    }  

return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //loop through the array
    //create a variable to hold the item in the array
    //remove that property from the given object
for(let i = 0; i < array.length; i++){
let item = array[i];
delete object[item]
}
return object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function dedup(array) {
    //create a new array with no duplicates
    //[...new Set()] returns a new array of unique items
    let newArr = [...new Set(array)];
return newArr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}