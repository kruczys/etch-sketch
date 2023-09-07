import generateGrid from "./generateGrid.ts";
import setMode from "./changeMode.ts";

let startDimension = 10;
const sizeChangeButton = document.querySelector("#change-size-button");
const emptyCanvasButton = document.querySelector("#reset-button");
let currMode = "random-rgb";

generateGrid(startDimension, "#grid-container");
setMode(currMode);

(sizeChangeButton as HTMLButtonElement).addEventListener("click", () => {
  const newGridDimension = prompt("What grid dimension are you interested in?");
  startDimension = newGridDimension ? +newGridDimension : startDimension;
  generateGrid(
    newGridDimension && +newGridDimension <= 100 ? +newGridDimension : 100,
    "#grid-container"
  );
  setMode(currMode);
});

(emptyCanvasButton as HTMLButtonElement).addEventListener("click", () => {
  generateGrid(startDimension, "#grid-container");
  setMode(currMode);
});

const rainbowModeInput = document.querySelector("#random-rgb");
const blackModeInput = document.querySelector("#black-mode");
const darkeningModeInput = document.querySelector("#darkening-mode");

(rainbowModeInput as HTMLInputElement).addEventListener("click", () => {
  currMode = "random-rgb";
  setMode(currMode);
  (rainbowModeInput as HTMLInputElement).checked = true;
  (blackModeInput as HTMLInputElement).checked = false;
  (darkeningModeInput as HTMLInputElement).checked = false;
});

(blackModeInput as HTMLInputElement).addEventListener("click", () => {
  currMode = "black-mode";
  setMode(currMode);
  (rainbowModeInput as HTMLInputElement).checked = false;
  (blackModeInput as HTMLInputElement).checked = true;
  (darkeningModeInput as HTMLInputElement).checked = false;
});

(darkeningModeInput as HTMLInputElement).addEventListener("click", () => {
  currMode = "darkening-mode";
  setMode(currMode);
  (rainbowModeInput as HTMLInputElement).checked = false;
  (blackModeInput as HTMLInputElement).checked = false;
  (darkeningModeInput as HTMLInputElement).checked = true;
});
