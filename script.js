const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const gradientType = document.getElementById("gradientType");
const preview = document.getElementById("preview");
const cssCode = document.getElementById("cssCode");
const resetButton = document.getElementById("resetButton");

function updateBackground() {
  const type = gradientType.value;
  const color1Value = color1.value;
  const color2Value = color2.value;

  let gradient;

  if (type === "linear") {
    gradient = `linear-gradient(to right, ${color1Value}, ${color2Value})`;
  } else if (type === "radial") {
    gradient = `radial-gradient(${color1Value}, ${color2Value})`;
  }

  document.body.style.background = gradient;
  preview.style.background = gradient;
}

function resetBackground() {
  color2.value = "#0000ff";
  color1.value = "#ff0000";
  gradientType.value = "linear";
  updateBackground();
}

color1.addEventListener("input", updateBackground);
color2.addEventListener("input", updateBackground);
gradientType.addEventListener("change", updateBackground);
resetButton.addEventListener("click", resetBackground);

updateBackground();