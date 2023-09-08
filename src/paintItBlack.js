const paintItBlack = (pixels) => {
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
      e.target.style.opacity = "1.0";
    });
  });
};

export default paintItBlack;
