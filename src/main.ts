import generateGrid from "./generateGrid.ts";
import setMode from "./changeMode.ts";

generateGrid(20, "#grid-container");

const sizeChangeButton = document.querySelector("#change-size-button");
let currMode = "random-rgb";
setMode(currMode);

(sizeChangeButton as HTMLButtonElement).addEventListener("click", () => {
  const newGridDimension = prompt("What grid dimension are you interested in?");
  generateGrid(
    newGridDimension && +newGridDimension <= 100 ? +newGridDimension : 100,
    "#grid-container"
  );
  setMode(currMode);
});

const rainbowModeInput = document.querySelector("#random-rgb");
const blackModeInput = document.querySelector("#black-mode");

(rainbowModeInput as HTMLInputElement).addEventListener("click", () => {
  currMode = "random-rgb";
  setMode(currMode);
  (rainbowModeInput as HTMLInputElement).checked = true;
  (blackModeInput as HTMLInputElement).checked = false;
});

(blackModeInput as HTMLInputElement).addEventListener("click", () => {
  currMode = "black-mode";
  setMode(currMode);
  (rainbowModeInput as HTMLInputElement).checked = false;
  (blackModeInput as HTMLInputElement).checked = true;
});
