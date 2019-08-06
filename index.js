// Your code
// var dodger = document.getElementById("dodger");
var dodger = document.querySelector("#dodger");
var game = document.querySelector("#game");

function styleDodgerColor() {
    dodger.style.backgroundColor = "#FF69B4";
}

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// dodger.clientWidth == 40
function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var right = parseInt(leftNumbers, 10) + dodger.clientWidth;

  if (right < game.clientWidth) {
    dodger.style.left = `${parseInt(leftNumbers, 10) + 1}px`;
  }
}

function addEventListener() {
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
}

styleDodgerColor();
addEventListener();
