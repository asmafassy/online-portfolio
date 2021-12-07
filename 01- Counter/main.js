const up = document.getElementById("up");
const down = document.getElementById("down");
const display = document.getElementById("counter");
const reset = document.getElementById("reset");
let theNumber = 0;
const uphandler = () => {
  theNumber = theNumber + 1;
  showContent();
};
const downhandler = () => {
  theNumber = theNumber - 1;
  showContent();
};
const resetHandler = () => {
  theNumber = 0;
  showContent();
};
const showContent = () => {
  display.innerHTML = theNumber;
  if (theNumber == "4") {
    alert("The number is 4");
  }
};
up.addEventListener("click", uphandler);
down.addEventListener("click", downhandler);
reset.addEventListener("click", resetHandler);




// E F F E C T 
