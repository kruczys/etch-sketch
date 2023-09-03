import generateGrid from "./generateGrid.ts";
import paintItBlack from "./paintItBlack.ts";
import paintItRandomRGB from "./paintItRandomRGB.ts";
// import emptyGrid from "./emptyGrid.ts";

generateGrid(5, "#grid-container");

const pixels = document.querySelectorAll(".pixel");

paintItBlack(pixels);
paintItRandomRGB(pixels);
