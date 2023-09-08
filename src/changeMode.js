import paintItRandomRGB from "./paintItRandomRGB.js";
import paintItBlack from "./paintItBlack.js";
import paintItDarkening from "./paintItDarkeningEffect.js";

const setMode = (chosenMode) => {
  const pixels = document.querySelectorAll(".pixel");
  switch (chosenMode) {
    case "random-rgb":
      paintItRandomRGB(pixels);
      break;
    case "black-mode":
      paintItBlack(pixels);
      break;
    case "darkening-mode":
      paintItDarkening(pixels);
      break;
    default:
      paintItBlack(pixels);
  }
};

export default setMode;
