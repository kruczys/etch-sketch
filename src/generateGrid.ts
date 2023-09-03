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

export default generateGrid;
