// Select color input
const colorInput = document.querySelector("#colorPicker");

// Select size input
const gridHeight = document.querySelector('#inputHeight');
const gridWidth = document.querySelector('#inputWidth');
const gridCanvas = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!
  // let fragment = document.createDocumentFragment();
  // for(let x = 0; x < gridHeight; x++) {
  //   for (let j = 0; j < gridWidth; j++) {

  //   }
  // }
  console.log(gridHeight.value, gridWidth.value);
}

document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
})