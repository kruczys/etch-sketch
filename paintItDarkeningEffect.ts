const paintItDarkening = (pixels: NodeList) => {
  let opacity = 0;
  pixels.forEach((pixel: Node) => {
    pixel.addEventListener("mouseover", (e) => {
      (e.target as HTMLDivElement).style.backgroundColor = "black";
      (e.target as HTMLDivElement).style.opacity = `0.${opacity % 10}`;
      opacity += 1;
    });
  });
};

export default paintItDarkening;
