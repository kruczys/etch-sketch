import emptyGrid from "./emptyGrid";

const generateGrid = (dimension, selector) => {
  emptyGrid(selector);
  const gridContainer = document.querySelector(selector);
  const squareSize = 100 / dimension;

  for (let i = 0; i < dimension * dimension; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.setAttribute(
      "style",
      `width: ${squareSize}%; height: ${squareSize}; padding: 0; margin: 0;`
    );
    gridSquare.setAttribute("class", "pixel");
    gridContainer.appendChild(gridSquare);
  }
};

export default generateGrid;
