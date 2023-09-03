import generateGrid from "./generateGrid.ts";
import paintItBlack from "./paintItBlack.ts";
import paintItRandomRGB from "./paintItRandomRGB.ts";

generateGrid(20, "#grid-container");

const sizeChangeButton = document.querySelector("#change-size-button");
const pixels = document.querySelectorAll(".pixel");
paintItRandomRGB(pixels);

(sizeChangeButton as HTMLButtonElement).addEventListener("click", () => {
  const newGridDimension = prompt("What grid dimension are you interested in?");
  generateGrid(
    newGridDimension && +newGridDimension <= 100 ? +newGridDimension : 100,
    "#grid-container"
  );
  const pixels = document.querySelectorAll(".pixel");
  paintItRandomRGB(pixels);
});

paintItBlack(pixels);
