// Get DOM elements
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const gradientType = document.getElementById("gradientType");
const preview = document.getElementById("preview");
const cssCode = document.getElementById("cssCode");
const resetButton = document.getElementById("resetButton");

// Function to update the background
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

  // Update the entire page background and preview box
  document.body.style.background = gradient;
  preview.style.background = gradient;

  // Update the CSS code display
  cssCode.textContent = `background: ${gradient};`;
}

// Reset to default background
function resetBackground() {
  color1.value = "#ff0000"; // Default color 1
  color2.value = "#0000ff"; // Default color 2
  gradientType.value = "linear"; // Default gradient type
  updateBackground(); // Update the background
}

// Add event listeners
color1.addEventListener("input", updateBackground);
color2.addEventListener("input", updateBackground);
gradientType.addEventListener("change", updateBackground);
resetButton.addEventListener("click", resetBackground);

// Initialize the background on page load
updateBackground();