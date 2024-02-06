let cellWidth = 50, cellHeight = 50;
let rows, cols;
let colors = ['white'];

let linePath = [];
let intervalTimer = 0;
let intervalDuration = 3; 
let maxDistance = 70; 

//Math.floor(windowWidth / cellWidth) and Math.floor(windowHeight / cellHeight) are used to calculate the number of columns (cols) and rows (rows) based on the size of the canvas (windowWidth and windowHeight) and the specified cell dimensions (cellWidth and cellHeight). It ensures that the resulting cols and rows are whole numbers, which is important for creating a grid of cells in the canvas.
function setup() {
  cols = Math.floor(windowWidth / cellWidth);
  rows = Math.floor(windowHeight / cellHeight);
  createCanvas(windowWidth, windowHeight);
  frameRate(10);

  let startingX = floor(random(cols)) * cellWidth + cellWidth / 2;
  let startingY = floor(random(rows)) * cellHeight + cellHeight / 2;
  linePath.push({ x: startingX, y: startingY });
}

function draw() {
  background(22);

  drawShapes();
  drawLine();

  if (frameCount % intervalDuration === 0) {
    moveLine();
  }
}

function drawShapes() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellWidth;
      let y = j * cellHeight;
      let color = random(colors);
      noFill();
      stroke(color);
      ellipse(x + cellWidth / 2, y + cellHeight / 2, cellWidth / 2, cellHeight / 3);
    }
  }
}

function drawLine() {
  stroke('#FFFFFF'); 
  strokeWeight(2); 
  noFill();
  beginShape();
  for (let point of linePath) {
    vertex(point.x, point.y);
  }
  endShape();
}

function moveLine() {
  // Find the last point in the line
  let lastPoint = linePath[linePath.length - 1];

  // Find a random nearby circle
  let randomCircle = findRandomCircle(lastPoint);

  // If a nearby circle is found, add it to the line
  if (randomCircle) {
    linePath.push(randomCircle);
  }
}

function findRandomCircle(point) {
  let nearbyCircles = [];

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellWidth + cellWidth / 2;
      let y = j * cellHeight + cellHeight / 2;
      let distance = dist(point.x, point.y, x, y);

      // Check if the circle is within the maximum distance
      if (distance < maxDistance) {
        nearbyCircles.push({ x, y });
      }
    }
  }

  // Return a random circle from the nearby circles array
  return random(nearbyCircles);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('myCanvas', 'png');
  }
}
