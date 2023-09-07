const emptyGrid = (selector: string) => {
  const gridContainer = document.querySelector(selector) as HTMLDivElement;

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
};

export default emptyGrid;
