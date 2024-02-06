let cellWidth = 150, cellHeight = 150;
let rows, cols;
let numSquares = 3; 
let colors = ['#FF5733', '#33FF57', '#4169e1', '#ffb6c1', '#ffdb58'];

function setup() {
  cols = Math.floor(windowWidth / cellWidth);
  rows = Math.floor(windowHeight / cellHeight);
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
}

function draw() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellWidth;
      let y = j * cellHeight;
      drawCell(x, y);
    }
  }
}

function drawCell(x, y) {
  let color = random(colors);
  fill(color); 
  noStroke();
  rect(x, y, cellWidth, cellHeight);

  drawConcentricCircles(x, y);
}

function drawConcentricCircles(x, y) {
  let centerX = x + cellWidth / 2;
  let centerY = y + cellHeight / 2;

  for (let i = 0; i < numSquares; i++) {
    let circleSize = cellWidth / 2 - i * 20;
    let color = random(colors);

    noStroke();
    fill(color); 
    ellipse(centerX, centerY, circleSize, circleSize);
  }
}

function mouseClicked() {
  setup();
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('myCanvas', 'png');
  }
}