
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(x) {
for(let triangle = '#'; triangle.length <= x ; triangle += "#"){
	console.log(triangle)
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(){
  for(let i = 1; i <= 15; i++)
	if(i % 5 === 0 && i % 3=== 0){
			console.log('fizzbuzz');
		} else if(i % 3 === 0){
			console.log('fizz');
		} else if(i % 5 === 0){
			console.log('buzz');
		} else {
			console.log(i);
		}
	
}



////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(input) {
//create a variable that holds the desired board size;
let size = input;
//create a variable to a either "#" or a " ";
let drawBoard = "";
//create a loop to represent the board vertically
for (let i = 0; i < size; i++) {
	//create a loop to represent the board horizontally
  for (let j = 0; j < size; j++) {
  // if the current iteration is even add a space to the drawBoard variable
  //if the current iteration is odd add a "#"
    if ((i + j) % 2 == 0) {
      drawBoard += " ";
    } else {
      drawBoard += "#";
    }
  }
  //create a new line after each iteration
  drawBoard += "\n";
}

console.log(drawBoard);



}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
