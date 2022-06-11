let color = "black";
let background = 'white';
const board = document.querySelector('.board');
const rainbow = document.querySelector('#rainbow');
const mouseColor = document.getElementById('mouseColor');
const backColor = document.getElementById('backColor');
const backgroundInput = document.querySelector('.backgroundInput');

backgroundInput.addEventListener('change', function() {
  board.style.backgroundColor = `${backgroundInput.value}`;
  backColor.style.backgroundColor = `${backgroundInput.value}`;
  populateBoard(slide.value);
})

function changeColor(e) {
  if (rainbow.checked) {
    e.target.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {e.target.style.background = `${mouseInput.value}`}
};


let mouseInput = document.querySelector('.mouseInput');

rainbow.addEventListener('click', (e) => {
  if (e.target.checked) {mouseColor.style.background = `linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%)`
  } else {mouseColor.style.background = `${mouseInput.value}`}})

mouseInput.addEventListener('change', function() {
  if (rainbow.checked) {
    color = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {color = `${mouseInput.value}`; mouseColor.style.background = `${mouseInput.value}`;
}})

let slide = document.getElementById("myRange");
slide.onchange = function () {
  populateBoard(this.value);
}


let canvas = document.getElementById("myCanvas");
canvas.onchange = function () {
  board.style.width = `${this.value}px`;
  board.style.height = `${this.value}px`;
} 

function populateBoard(size){
  let squares = board.querySelectorAll('div')
  squares.forEach(div => div.remove()) 
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`

  let totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    let square = document.createElement('div')
    square.addEventListener('mouseover', changeColor) 
    square.style.borderStyle = 'solid';
    square.style.borderColor = 'rgb(230, 230, 230)';
    square.style.borderWidth = '1px';
    board.insertAdjacentElement ('beforeend', square)
}}


populateBoard(16);