let cellWidth = 50, cellHeight = 50;
let rows, cols;
let darkGrayProbability = 0.5; 
let cellContent = 'yes'; // 

function setup() {
  cols = Math.floor(windowWidth / cellWidth);
  rows = Math.floor(windowHeight / cellHeight);
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
}

function draw() {
  background(255);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellWidth;
      let y = j * cellHeight;

      fill(255);
      noStroke();
      rect(x, y, cellWidth, cellHeight);

     
      fill('#FF00FF');
      textSize(20);
      textAlign(CENTER, CENTER);
      
      if (random() < darkGrayProbability) {
        fill(50);
        rect(x, y, cellWidth, cellHeight);
        fill(255); 
        text('NO', x + cellWidth / 2, y + cellHeight / 2);
      } else {
  
        text(cellContent, x + cellWidth / 2, y + cellHeight / 2);
      }
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
