var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var pickedDispColor = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init()

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    // mode buttons event listeners
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function () {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            // figure out how many squares to show
            this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
            reset();
        })
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
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
}

resetButton.addEventListener('click', function () {
    reset();
});

for (let i = 0; i < squares.length; i++) {
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

function reset() {
    // generate new set of colors
    colors = generateRandomColors(numSquares);
    // pick a new random color
    pickedColor = pickColor(colors);
    pickedDispColor.textContent = pickedColor;
    resetButton.textContent = 'New Colors';
    messageDisplay.textContent = "";
    // change colors of squaresl
    for (let i = 0; i < squares.length; i++) {
        // add initial colors to squares
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    h1.style.backgroundColor = 'steelblue';
}
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



