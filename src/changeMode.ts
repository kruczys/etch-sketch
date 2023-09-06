import paintItRandomRGB from "./paintItRandomRGB.ts";
import paintItBlack from "./paintItBlack.ts";

const setMode = (chosenMode: string) => {
  const pixels = document.querySelectorAll(".pixel");
  switch (chosenMode) {
    case "random-rgb":
      paintItRandomRGB(pixels);
      break;
    case "black-mode":
      paintItBlack(pixels);
      break;
    default:
      paintItBlack(pixels);
  }
};

export default setMode;
