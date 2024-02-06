let cellWidth = 50, cellHeight = 50;
let rows, cols;
let colors = ['white'];

let linePath = [];
let intervalTimer = 0;
let intervalDuration = 3; 
let maxDistance = 70; 

function setup() {
  cols = 15; // Set a fixed number of columns
  rows = 10; // Set a fixed number of rows
  createCanvas(cols * cellWidth, rows * cellHeight);
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
  let lastPoint = linePath[linePath.length - 1];
  let randomCircle = findRandomCircle(lastPoint);

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

      if (distance < maxDistance) {
        nearbyCircles.push({ x, y });
      }
    }
  }

  return random(nearbyCircles);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('myCanvas', 'png');
  }
}
