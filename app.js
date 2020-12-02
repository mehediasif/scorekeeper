const player1 = document.querySelector('#p1button');
const player2 = document.querySelector('#p2button');
const resetButton = document.querySelector('#reset');
const p1display = document.querySelector('#p1Display');
const p2display = document.querySelector('#p2Display');
const playToSelect = document.querySelector('#playto');

let p1score = 0;
let p2score = 0;
let winningScore = 5;
let isGameOver = false;

player1.addEventListener('click', function() {
  if (!isGameOver) {
      p1score += 1;
      if (p1score === winningScore){
          isGameOver = true;
      }
      p1display.textContent = p1score;
  }
})
player2.addEventListener('click', function() {
    if (!isGameOver) {
        p2score += 1;
        if (p2score === winningScore){
            isGameOver = true;
        }
        p2display.textContent = p2score;
    }
})
playToSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = parseInt(0);
    p2display.textContent = parseInt(0);
}

