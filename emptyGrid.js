const emptyGrid = (selector) => {
  const gridContainer = document.querySelector(selector);

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
};

export default emptyGrid;
