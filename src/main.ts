const generateGrid = (dimension: number, selector: string) => {
  const gridContainer = document.querySelector(selector) as HTMLDivElement;
  const squareSize: number = 100 / dimension;

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

const emptyGrid = (selector: string) => {
  const gridContainer = document.querySelector(selector) as HTMLDivElement;

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
};

generateGrid(16, "#grid-container");
emptyGrid("#grid-container");
generateGrid(32, "#grid-container");

const pixels = document.querySelectorAll(".pixel");

pixels.forEach((pixel) => {
  pixel.addEventListener("mouseover", (e: Event) => {
    (e.target as HTMLDivElement).style.backgroundColor = "gray";
  });
});
