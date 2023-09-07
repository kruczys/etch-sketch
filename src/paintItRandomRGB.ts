import generateRandomColor from "./generateRandomRGB";

const paintItRandomRGB = (pixels: NodeList) => {
  pixels.forEach((pixel: Node) => {
    pixel.addEventListener("mouseover", (e: Event) => {
      (e.target as HTMLDivElement).style.backgroundColor =
        generateRandomColor();
      (e.target as HTMLDivElement).style.opacity = "1.0";
    });
  });
};

export default paintItRandomRGB;
