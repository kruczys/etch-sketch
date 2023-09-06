import generateGrid from "./generateGrid.ts";
import setMode from "./changeMode.ts";

generateGrid(20, "#grid-container");

const sizeChangeButton = document.querySelector("#change-size-button");
let currMode = "randomRGB";
setMode(currMode);

(sizeChangeButton as HTMLButtonElement).addEventListener("click", () => {
  const newGridDimension = prompt("What grid dimension are you interested in?");
  generateGrid(
    newGridDimension && +newGridDimension <= 100 ? +newGridDimension : 100,
    "#grid-container"
  );
  setMode(currMode);
});
