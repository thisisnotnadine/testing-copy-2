let cellWidth = 50, cellHeight = 50;
let rows, cols;
let squareSize = 40; 
let colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33F6', '#F6FF33'];

function setup() {
  cols = Math.floor(windowWidth / cellWidth);
  rows = Math.floor(windowHeight / cellHeight);
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
}

function draw() {
  background(200, 200, 200); 
  
  let outerRadius = min(cols, rows) * cellWidth / 2;
  let numOuterSquares = int(TWO_PI * outerRadius / squareSize);

  // outer ring set
  for (let i = 0; i < numOuterSquares; i++) {
    let angle = map(i, 0, numOuterSquares, 0, TWO_PI);
    let x = width / 2 + cos(angle) * outerRadius;
    let y = height / 2 + sin(angle) * outerRadius;

    let color = random(colors);
    noFill();
    stroke(color);
    rectMode(CENTER);
    push();
    translate(x, y);
    rotate(angle);
    rect(0, 0, squareSize, squareSize);
    pop();
  }
  //inner circle set

  let firstInnerRadius = outerRadius - 2 * squareSize;
  let numFirstInnerCircles = int(TWO_PI * firstInnerRadius / squareSize);

  for (let i = 0; i < numFirstInnerCircles; i++) {
    let angle = map(i, 0, numFirstInnerCircles, 0, TWO_PI);
    let x = width / 2 + cos(angle) * firstInnerRadius;
    let y = height / 2 + sin(angle) * firstInnerRadius;
    let color = random(colors);
    noFill();
    stroke(color);
    ellipse(x, y, squareSize, squareSize);
  }
//inner square set
  let secondInnerRadius = firstInnerRadius - 2 * squareSize;
  let numSecondInnerSquares = int(TWO_PI * secondInnerRadius / squareSize);
  for (let i = 0; i < numSecondInnerSquares; i++) {
    let angle = map(i, 0, numSecondInnerSquares, 0, TWO_PI);
    let x = width / 2 + cos(angle) * secondInnerRadius;
    let y = height / 2 + sin(angle) * secondInnerRadius;
    let color = random(colors);
    noFill();
    stroke(color);
    rectMode(CENTER);
    push();
    translate(x, y);
    rotate(angle);
    rect(0, 0, squareSize, squareSize);
    pop();
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
