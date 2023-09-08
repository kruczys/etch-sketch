const generateRandomColor = () => {
  const redValue = Math.floor(Math.random() * 255);
  const greenValue = Math.floor(Math.random() * 255);
  const blueValue = Math.floor(Math.random() * 255);
  return `rgba(${redValue},${greenValue},${blueValue})`;
};

export default generateRandomColor;
