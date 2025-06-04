// Function to create the grid
function createGrid(numSquares) {
  const container = document.getElementById("gridContainer");
  container.innerHTML = ""; // Clear the container

  const squareSize = 960 / numSquares; // Calculate the size of each square based on grid size

  // Create the grid items
  for (let i = 0; i < numSquares * numSquares; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    div.addEventListener('mouseenter', () => {div.classList.add("blackBG");});
    container.appendChild(div);
  }
}

// Event listener for the resize button
document.getElementById("resizeButton").addEventListener("click", function() {
  let gridSize = prompt("Enter the number of squares per side (max 100):", 16);

  gridSize = parseInt(gridSize);
  if (gridSize > 0 && gridSize <= 100) {
      createGrid(gridSize);
  } else {
      alert("Please enter a valid number between 1 and 100.");
  }
});


// Initialize with a 16x16 grid
createGrid(16);