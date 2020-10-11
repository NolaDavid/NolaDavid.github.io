// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-noladavid");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
//input: array
//output number of males in 
return _.filter(array,function(customerObj){
    //go through the array with filter
    //if the object.gender = male return true and then return the length of that array
    return customerObj.gender === 'male';
}).length;
};
var femaleCount = function(array){
    //input: array
    //output: number of females in the array given
    //
  return _.reduce(array,function(accumulator, currentValue){
      //if the current value is female
      if(currentValue.gender === 'female'){
          //increment the accumulator
          accumulator++;
      }
      //return accumulator
      return accumulator;
  },0)//starting value of accumulator is 0
};
var oldestCustomer = function(array){
    //input: array
    //output: string containing the name of the oldest customer

let oldest = 0;

//go through the array
let oldestName = array.reduce((prev,curr) => {
    //if the current persons age is greater than the oldest value the oldest is now that age
  if(curr.age > oldest) {
    oldest = curr.age;
    //return the current name
    return curr.name;
  }
  return prev;
},'');//seed is a empty string
return oldestName;
};
var youngestCustomer = function(array){
 // input:array of customers
 //output: customer with the lowest age
 //set a variable to hold the age
 let youngest = Infinity;
 //go through the array
let youngestName = array.reduce((prev,curr) => {
    //if the current person age is younger than the placeholder age
  if(curr.age < youngest) {
      //the placeholder is now that current age
    youngest = curr.age;
    //return the name of the current value
    return curr.name;
  }
  //return the accumulator
  return prev;
},'');
//return the name of the youngest person
return youngestName;
};
var averageBalance = function(array){
    //input: array
    //output: a number representing the average balance of all customers in the array
    //go across the array and extract the balances of each customer
    let arr = array.map(function(x){return x.balance})
    //
 let newMoney = arr.map(function(x){
    return x.slice(1)
 })
 //remove the dollar sign from infront 
 let moreMoney = newMoney.map(function (y) {
   return y.replace(/\,/g,"")
})
//convert string to number
let evenMoreMoney = moreMoney.map(function(z){
   return parseFloat(z)
})
    //get the length to divide the total by.
     let size = arr.length;
     //get the total of all the balances in the array
    let total = evenMoreMoney.reduce(function(accumulator, currentValue, currentIndex){
        return accumulator + currentValue
    },0);
    console.log(total);
    //calculate the avg of all the balances in the array
  let average = total / size;
  //return the average
  return average;
}
var firstLetterCount = function(array, letter){
    //input: array of customers and a letter
    //output: a number of how many customers start with the given letter
    //extract all the names from the array
    let names = array.map(function(x){return x.name});
    //compare the first letter of each name to the given letter
    let filtered = _.filter(names, function(x) {
       return x[0].toUpperCase() === letter.toUpperCase();
    })
    //return the length of the filtered array
    return filtered.length;
};
var friendFirstLetterCount = function(array,customer,letter){
//input: array of customers, a customer, and a letter
//output: number of friends a given customer has that start with the given letter;
//find the customer given
let filtered = array.filter(function(customerObj){
    return customerObj.name === customer
})
//extract the friends list from that name
 let friendNames = filtered.map(function(x){return x.friends})

friendNames = friendNames[0];
//go through the array of friends
    let filtered2 = friendNames.filter( function(value) {
      //compare the first letter of the name to the letter
      return value.name[0].toLowerCase() === letter.toLowerCase();
    })
    //return the length of the filtered array
    return filtered2.length;
};
var friendsCount = function(array, customerName){
 //
 let answer = [];
 _.each(array, function(value, index, array){
    let friend = value.friends;// this will pull the friends object of every customer
    console.log(friend)
    let friendsNames = friend.map(x => x.name)// this will pull just the names out the friends array of objects
  console.log(friendsNames)
   _.each(friendsNames, function(v, i, a){//this will go throught he array of friends and compare it to the input customer
    if(v === customerName){//if the input name matches any name in the friends array
        answer.push(value.name);//the customers name will be pushed into the answer array
    }
})
})
console.log(answer);
return answer;
};
 

 


var topThreeTags = function(array){
    let tags = array.map(function(x){
        return x.tags
    })

  
    let tagsj = tags.join(",")
    let tagsS = tagsj.split(",")
    let count = _.reduce(tagsS,function(acc,curr){
        if(acc[curr]){
            acc[curr]++
        }else {acc[curr] = 1}
        return acc;
    },{})
    let arr = [];
    for (let key in count){
        arr.push([key,count[key]]);
    }
   
    arr.sort(function(a,b){
       return b[1] - a[1]
    });
    console.log(arr);
 let top3arr =  arr.slice(0,3);
 console.log(top3arr);
 let top3Words = top3arr.map(function(wordAndCount){
     return wordAndCount[0];
 })
 return top3Words;
};
var genderCount = function (array){
   let total = {};
    let female =   _.reduce(array,function(accumulator, currentValue, currentIndex){
      if(currentValue.gender === "female"){
          accumulator++;
      }
      return accumulator;
  },0)
  let male =_.reduce(array,function(accumulator, currentValue, currentIndex){
      if(currentValue.gender === "male"){
          accumulator++;
      }
      return accumulator;
  },0)
  let nonBinary = _.reduce(array,function(accumulator, currentValue, currentIndex){
      if(currentValue.gender === "non-binary"){
          accumulator++;
      }
      return accumulator;
  },0)
  total.female = female;
  total.male = male;
  total["non-binary"] = nonBinary;
  return total;
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
