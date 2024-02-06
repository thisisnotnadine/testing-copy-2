let cellWidth = 20, cellHeight = 20;
let rows, cols;
let linesColor = '#3498db'; 
let squiggles = [];

function setup() {
  cols = Math.floor(windowWidth / cellWidth);
  rows = Math.floor(windowHeight / cellHeight);
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
}

function draw() {
  background(255);


  stroke(linesColor);
  strokeWeight(1);
  for (let i = 0; i < rows; i++) {
    let y = i * cellHeight;
    line(0, y, windowWidth, y);
  }


  for (let squiggle of squiggles) {
    squiggle.move();
    squiggle.display();
  }

  
  squiggles.push(new Squiggle());
}

class Squiggle {
  constructor() {
    this.startY = random(rows) * cellHeight;
    this.endY = this.startY + cellHeight;
    this.points = [];
    this.generatePoints();
  }

  generatePoints() {
    let startX = 0;
    for (let x = 0; x < windowWidth; x += 5) {
      let yOffset = map(noise(x * 0.01, this.startY * 0.01), 0, 1, -10, 10);
      let y = this.startY + yOffset;
      this.points.push({ x: startX + x, y: y });
    }
  }

  move() {
    this.startY += 1;
    this.endY += 1;
    if (this.endY > windowHeight) {
      this.startY = 0;
      this.endY = cellHeight;
      this.points = [];
      this.generatePoints();
    }
  }

  display() {
    noFill();
    stroke(0);
    strokeWeight(2);
    beginShape();
    for (let point of this.points) {
      vertex(point.x, point.y);
    }
    endShape();
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

