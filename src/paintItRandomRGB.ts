import generateRandomColor from "./generateRandomRGB";

const paintItBlack = (pixels: NodeList) => {
  pixels.forEach((pixel: Node) => {
    pixel.addEventListener("mouseover", (e: Event) => {
      (e.target as HTMLDivElement).style.backgroundColor = "black";
    });
  });
};

const paintItRandomRGB = (pixels: NodeList) => {
  pixels.forEach((pixel: Node) => {
    pixel.addEventListener("mouseover", (e: Event) => {
      (e.target as HTMLDivElement).style.backgroundColor =
        generateRandomColor();
    });
  });
};

export default paintItRandomRGB;
