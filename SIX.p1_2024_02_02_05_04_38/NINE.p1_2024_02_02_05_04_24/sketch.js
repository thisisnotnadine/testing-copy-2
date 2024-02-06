let cellWidth = 50, cellHeight = 50;
let rows, cols;
let colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33F6', '#F6FF33'];
let shapes = ['circle', 'square'];
let letters = ['A', 'B', 'C', 'D', 'E']; 

function setup() {
  cols = Math.floor(windowWidth / cellWidth);
  rows = Math.floor(windowHeight / cellHeight);
  createCanvas(windowWidth, windowHeight);
  frameRate(10); // Adjust the frame rate as needed
}

function draw() {
  background(22);
  for (let i = 0; i < cols; i = i + 1) {
    for (let j = 0; j < rows; j = j + 1) {
      let x = i * cellWidth;
      let y = j * cellHeight;
      let shape = random(shapes);
      let color = random(colors);
      let letter = random(letters);
      noFill();
      stroke(color);

      if (shape === 'circle') {
        ellipse(x + cellWidth / 2, y + cellHeight / 2, cellWidth / 2, cellHeight / 3);
      } else if (shape === 'square') {
        rect(x, y, cellWidth, cellHeight);
      }

      fill(255);
      textSize(20);
      textAlign(CENTER, CENTER);
      text(letter, x + cellWidth / 2, y + cellHeight / 2);
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
