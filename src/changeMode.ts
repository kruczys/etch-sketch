import paintItRandomRGB from "./paintItRandomRGB.ts";
import paintItBlack from "./paintItBlack.ts";

const setMode = (chosenMode: string) => {
  const pixels = document.querySelectorAll(".pixel");
  switch (chosenMode) {
    case "randomRGB":
      paintItRandomRGB(pixels);
      break;
    case "black":
      paintItBlack(pixels);
      break;
    default:
      paintItBlack(pixels);
  }
};

export default setMode;
