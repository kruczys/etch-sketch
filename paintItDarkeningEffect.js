const paintItDarkening = (pixels) => {
  let opacity = 0;
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
      e.target.style.opacity = `0.${opacity % 10}`;
      opacity += 1;
    });
  });
};

export default paintItDarkening;
