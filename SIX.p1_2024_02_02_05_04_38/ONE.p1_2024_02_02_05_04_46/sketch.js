let cellWidth = 50, cellHeight = 50;
let rows, cols;
let words = ["now", "here"];
let colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33F6', '#F6FF33'];

let alphaValue = 255; 

function setup() {
  cols = Math.floor(windowWidth / cellWidth);
  rows = Math.floor(windowHeight / cellHeight);
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
}

function draw() {
  background(22);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellWidth + random(-10, 10); 
      let y = j * cellHeight + random(-10, 10);
      let word = random(words);
      let color = random(colors);

      fill(color);
      noStroke();
      textSize(16);
      textAlign(CENTER, CENTER);
      fill(255, 255, 255, alphaValue);
      text(word, x + cellWidth / 2, y + cellHeight / 2);

  
      alphaValue -= 2;
      if (alphaValue < 0) {
        alphaValue = 255; 
      }
    }
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('myCanvas', 'png');
  }
}

