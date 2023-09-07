const paintItBlack = (pixels: NodeList) => {
  pixels.forEach((pixel: Node) => {
    pixel.addEventListener("mouseover", (e: Event) => {
      (e.target as HTMLDivElement).style.backgroundColor = "black";
      (e.target as HTMLDivElement).style.opacity = "1.0";
    });
  });
};

export default paintItBlack;
