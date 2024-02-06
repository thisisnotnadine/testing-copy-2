let circles = [];
let circleColors = []; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  background(22);

  // Draw and update circles
  for (let i = circles.length - 1; i >= 0; i--) {
    let circle = circles[i];
    drawCircle(circle, circleColors[i]); // Pass the color as an argument
    updateCircle(circle);

    // Remove faded out circles
    if (circle.alpha <= 0) {
      circles.splice(i, 1);
      circleColors.splice(i, 1); // Remove the corresponding color entry
    }
  }

  // Create new circles randomly
  if (random() > 0.8) {
    createRandomCircle();
  }
}

function drawCircle(circle, c) { 
  noFill();
  strokeWeight(2);
  stroke(c); // Use the color as an argument
  ellipse(circle.x, circle.y, circle.radius * 2, circle.radius * 2);
}

function updateCircle(circle) {
  // Update circle properties (e.g., fade out)
  circle.radius += circle.growthRate;
  circle.alpha -= circle.fadeRate;
}

function createRandomCircle() {
  let x = random(width);
  let y = random(height);
  let radius = 10;
  let circleColor = color(random(255), random(255), random(255)); // Create a color object
  let growthRate = random(1, 3);
  let fadeRate = random(5, 15);
  let alpha = 255;

  circles.push({ x, y, radius, growthRate, fadeRate, alpha });
  circleColors.push(circleColor); 
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('myCanvas', 'png');
  }
}
