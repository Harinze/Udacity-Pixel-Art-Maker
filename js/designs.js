// Select color input
const colorInput = document.querySelector("#colorPicker");

// Select size input
const gridHeight = document.querySelector('#inputHeight');
const gridWidth = document.querySelector('#inputWidth');
const gridCanvas = document.querySelector('#pixelCanvas');

// When a box is clicked, color it in
function clickedBox(event) {
  const color = colorInput.value;
  event.target.style.backgroundColor = color;
}

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  // Your code goes here!
  gridCanvas.innerHTML = '';

  // Create fragment to build the rows and columns on
  const fragment = document.createDocumentFragment();

  for (let x = 0; x < gridHeight.value; x++) {
    const tr = document.createElement('tr');

    for (let y = 0; y < gridWidth.value; y++) {
      const td = document.createElement('td');
      tr.appendChild(td);
    }

    tr.addEventListener('click', clickedBox);
    fragment.appendChild(tr);
  }
  // Push fragment onto DOM
  gridCanvas.appendChild(fragment);
};

document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
});
