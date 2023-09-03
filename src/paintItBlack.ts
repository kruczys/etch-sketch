const paintItBlack = (pixels: NodeList) => {
  pixels.forEach((pixel: Node) => {
    pixel.addEventListener("mouseover", (e: Event) => {
      (e.target as HTMLDivElement).style.backgroundColor = "black";
    });
  });
};

export default paintItBlack;
