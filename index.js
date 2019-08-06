
// Your code here

 let dodger = document.getElementById("dodger")

function moveDodgerLeft(){
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if(left > 0){
    dodger.style.left = `${left - 1}px`
  }
}


function moveDodgerRight(){
  var rightNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(rightNumbers, 10)

  if(left < 360 && left > 0){
    dodger.style.left = `${left + 1}px`
  }
}


document.addEventListener("keydown", function(event){
  if(event.key === "ArrowLeft"){
    moveDodgerLeft();
  }
  else if(event.key === "ArrowRight"){
    moveDodgerRight();
  }
})
