var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor(colors);
var pickedDispColor = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');


pickedDispColor.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = this.colors[i];
    
    // add event listeners to squares
    squares[i].addEventListener('click', function () {
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;

        // compare color to picked color
        if (clickedColor === pickedColor) {
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = '#262626';
            messageDisplay.textContent = 'Try Again';
        }
    });
    
}

function randInt() {
    return Math.floor(Math.random() * 256);
    console.log('random: ', Math.floor(Math.random() * 256););

}


// function is not finished. need debugging
function generateRandomColors(num) {
    // make an array
    var arr = [];
    // add num random colors to array
    for (var i = 0; i < num;i++) {
        var resArr = [];
        for (var j = 0; j < 3; j++) {
            resArr.push(randInt());
            console.log(resArr.push(randInt()));
        }
        var res = 'rgb(' + arr.join(', ') + ')'
    }
    arr.push(res);
    // return that array
    return arr;
}

function pickColor(arr) {
    var randChoosed = Math.floor(Math.random() * colors.length);
    console.log('randChoosed: ', randChoosed);

    return arr[randChoosed];
    console.log('picked color is ', arr[randChoosed]);

}

function changeColors(color) {
    messageDisplay.textContent = 'Correct!!!';
    squares.forEach(function (element) {
        element.style.backgroundColor = color;
        h1.style.backgroundColor = color;
    });
}


