var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor(colors);
var pickedDispColor = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var heardBtn = document.querySelector('#heardBtn');
var btns = document.querySelectorAll('button');

easyBtn.addEventListener('click', function () {
    easyBtn.classList.add('selected');
    heardBtn.classList.remove('selected');
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(colors);
    pickedDispColor = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
});

heardBtn.addEventListener('click', function () {
    heardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(colors);
    pickedDispColor = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = 'block';
    }
});

pickedDispColor.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = this.colors[i];

    // add event listeners to squares
    squares[i].addEventListener('click', function () {
        // grab color of clicked square
        let clickedColor = this.style.backgroundColor;

        // compare color to picked color
        if (clickedColor === pickedColor) {
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = '#262626';
            messageDisplay.textContent = 'Try Again';
        }
    });
}

resetButton.addEventListener('click', function () {
    resetButton.textContent = 'New Colors';
    h1.style.backgroundColor = 'steelblue';
    // generate new set of colors
    colors = generateRandomColors(numSquares);

    // pick a new random color
    pickedColor = pickColor(colors);
    pickedDispColor.textContent = pickedColor;
    this.textContent = 'New Colors';

    messageDisplay.textContent = "";
    // change colors of squaresl
    for (let i = 0; i < squares.length; i++) {
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
});

// get a random number from 0 to 255
function randInt() {
    return Math.floor(Math.random() * 256);
}

// generate one color
function colorOne() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(randInt());
    }
    return 'rgb(' + arr.join(', ') + ')';
}

// generate a set of colors
function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(colorOne());
    }
    return arr;
}
// pick a random color from the generated set
function pickColor(arr) {
    let randChoosed = Math.floor(Math.random() * colors.length);
    console.log('randChoosed: ', randChoosed);
    console.log('picked color is: ', arr[randChoosed]);
    console.log('colors: ', colors);

    return arr[randChoosed];
    // console.log('picked color is ', arr[randChoosed]);

}
// if user quessed color makes all squares and header of this color
function changeColors(color) {
    messageDisplay.textContent = 'Correct!!!';
    resetButton.textContent = 'PLAY AGAIN?';
    squares.forEach(function (element) {
        element.style.backgroundColor = color;
        h1.style.backgroundColor = color;
        var winnBtnStyle = document.createElement('style');
        winnBtnStyle.type = 'text/css';
        winnBtnStyle.innerHTML = 'button:hover {color: whitesmoke; background: color;}'
    });
}



