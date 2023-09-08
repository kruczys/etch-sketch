import generateRandomColor from "./generateRandomRGB.js";

const paintItRandomRGB = (pixels) => {
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = generateRandomColor();
      e.target.style.opacity = "1.0";
    });
  });
};

export default paintItRandomRGB;
