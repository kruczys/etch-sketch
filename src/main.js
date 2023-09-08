import generateGrid from "./generateGrid.js";
import setMode from "./changeMode.js";

let startDimension = 10;
const sizeChangeButton = document.querySelector("#change-size-button");
const emptyCanvasButton = document.querySelector("#reset-button");
let currMode = "random-rgb";

generateGrid(startDimension, "#grid-container");
setMode(currMode);

sizeChangeButton.addEventListener("click", () => {
  const newGridDimension = prompt("What grid dimension are you interested in?");
  startDimension = newGridDimension ? +newGridDimension : startDimension;
  generateGrid(
    newGridDimension && +newGridDimension <= 100 ? +newGridDimension : 100,
    "#grid-container"
  );
  setMode(currMode);
});

emptyCanvasButton.addEventListener("click", () => {
  generateGrid(startDimension, "#grid-container");
  setMode(currMode);
});

const rainbowModeInput = document.querySelector("#random-rgb");
const blackModeInput = document.querySelector("#black-mode");
const darkeningModeInput = document.querySelector("#darkening-mode");

rainbowModeInput.checked = true;

rainbowModeInput.addEventListener("click", () => {
  currMode = "random-rgb";
  setMode(currMode);
  rainbowModeInput.checked = true;
  blackModeInput.checked = false;
  darkeningModeInput.checked = false;
});

blackModeInput.addEventListener("click", () => {
  currMode = "black-mode";
  setMode(currMode);
  rainbowModeInput.checked = false;
  blackModeInput.checked = true;
  darkeningModeInput.checked = false;
});

darkeningModeInput.addEventListener("click", () => {
  currMode = "darkening-mode";
  setMode(currMode);
  rainbowModeInput.checked = false;
  blackModeInput.checked = false;
  darkeningModeInput.checked = true;
});
