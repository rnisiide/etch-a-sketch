let color = 'black';
let background = 'white';
const board = document.querySelector('.board')
populateBoard(16);


/*<button id="small">Small</button>
                <button id="medium">Medium</button>
                <button id="large">Large</button>
*/

const small = document.querySelector('#small');
small.addEventListener('click', () => {
  board.style.width = '300px';
  board.style.height = '300px';
})

const medium = document.querySelector('#medium');
medium.addEventListener('click', () => {
  board.style.width = '500px';
  board.style.height = '500px';
})


const large = document.querySelector('#large');
large.addEventListener('click', () => {
  board.style.width = '800px';
  board.style.height = '800px';
})


const btnBlack = document.querySelector('#black');
btnBlack.addEventListener('click', () => 
  {color = 'black'})

const backBlack = document.querySelector('#backblack');
backBlack.addEventListener('click', () => 
  {background = 'black'; returnValue()});

const btnBlue = document.querySelector('#blue');
btnBlue.addEventListener('click', () => 
  {color = 'blue'})

const backBlue = document.querySelector('#backblue');
backBlue.addEventListener('click', () => 
    {background = 'blue'; returnValue()});

const btnRandom = document.querySelector('#random');
btnRandom.addEventListener('click', () => {
  let randomClick = Math.floor(Math.random()*16777215).toString(16);
  color = `#${randomClick}`})

const backRandom = document.querySelector('#backrandom');
backRandom.addEventListener('click', () => {
  let randomClick = Math.floor(Math.random()*16777215).toString(16);
  background = `#${randomClick}`; returnValue()})

const btnWhite = document.querySelector('#white');
btnWhite.addEventListener('click', () => 
  {color = 'white'})

const backWhite = document.querySelector('#backwhite');
backWhite.addEventListener('click', () => 
  {background = 'white'; returnValue()});

const btnOrange = document.querySelector('#orange');
btnOrange.addEventListener('click', () => 
    {color = 'orange'})

const backOrange = document.querySelector('#backorange');
backOrange.addEventListener('click', () => 
  {background = 'orange'; returnValue()});

const btnRed = document.querySelector('#red');
btnRed.addEventListener('click', () => 
  {color = 'red'})


const backRed = document.querySelector('#backred');
backRed.addEventListener('click', () => 
  {background = 'red'; returnValue()});
        
const btnYellow = document.querySelector('#yellow');
btnYellow.addEventListener('click', () => 
    {color = 'yellow'})


const backYellow = document.querySelector('#backyellow');
backYellow.addEventListener('click', () => 
  {background = 'yellow'; returnValue()});


const btnGreen= document.querySelector('#green');
btnGreen.addEventListener('click', () => 
    {color = 'green'})


const backGreen = document.querySelector('#backgreen');
backGreen.addEventListener('click', () => 
  {background = 'green'; returnValue()});   

function returnValue() {
  let input = document.getElementById("userInput").value;
  if (input >= 2 && input <= 100) {
    populateBoard(input)} else {alert(
      'Please select a number from 2 to 100. Negative numbers not allowed')}
};


function populateBoard(size){
  let squares = board.querySelectorAll('div')
  squares.forEach(div => div.remove()) 
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`

  let totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    let square = document.createElement('div')
    square.addEventListener('mouseover', () => {
      square.style.background = `${color}`;
      
    }
  
    ) 
    square.style.background = `${background}`
    square.style.borderStyle = 'solid';
    square.style.borderColor = '#9c9c9c';
    square.style.borderWidth = '1px';
    board.insertAdjacentElement ('beforeend', square)
}}

