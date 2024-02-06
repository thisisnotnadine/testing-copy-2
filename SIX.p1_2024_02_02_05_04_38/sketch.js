let cellWidth = 100, cellHeight = 100; // Adjust the cell size as needed
let rows, cols;
let colors = ['#666666', '#999999', '#CCCCCC', '#DDDDDD',]

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
      let bgColor = random(colors); 
      fill(bgColor);
      noStroke();
      rect(x, y, cellWidth, cellHeight); 

      let arcColor = random(colors); 
      fill(arcColor);
      arc(x, y, cellWidth, cellHeight, PI, PI + HALF_PI);
      arc(x + cellWidth, y, cellWidth, cellHeight, PI + HALF_PI, 0);
      arc(x, y + cellHeight, cellWidth, cellHeight, HALF_PI, PI);
      arc(x + cellWidth, y + cellHeight, cellWidth, cellHeight, 0, HALF_PI);
    }
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
