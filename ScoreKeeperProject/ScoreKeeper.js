var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var resetButton = document.querySelector('#res');
var numInput = document.querySelector('input');
var p1DisplayScore = document.querySelector('#p1Display');
var p2DisplayScore = document.querySelector('#p2Display');

p1Button.addEventListener('click', function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1DisplayScore.classList.add('winner');
            gameOver = true;
        }
        p1DisplayScore.textContent = p1Score;
    }
});

