import paintItRandomRGB from "./paintItRandomRGB";
import paintItBlack from "./paintItBlack";
import paintItDarkening from "./paintItDarkeningEffect";

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
