let startColor, endColor;
let circleRadius = 20; // Size of the circle
let waveAmplitude = 50;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  startColor = color(0, 0, 50); // Dark Blue
  endColor = color(173, 216, 230); // Light Blue
}

function draw() {
  background(22);

  let x = windowWidth / 2;
  let y = windowHeight / 2;

  let progress = angle / TWO_PI;
  let waveOffsetY = sin(progress * TWO_PI) * waveAmplitude;

  let colorInterpolation = lerpColor(startColor, endColor, progress);

  strokeWeight(5);
  stroke(colorInterpolation);

  // Draw a continuous circle following a sine wave path
  let posX = x + angle * 50; // Adjust the multiplier to control the width of the wave
  let posY = y + waveOffsetY;

  // Draw circles to make the path look continuous
  for (let i = 0; i < 360; i += 10) {
    let currentAngle = radians(i);
    let currentRadius = waveAmplitude * sin(currentAngle);
    let circleX = x + (angle + i) * 50; // Adjust the multiplier for the width of the circles
    let circleY = y + waveOffsetY + currentRadius;
    ellipse(circleX, circleY, circleRadius * 2);
  }

  // Increment the angle to continue the movement along the sine wave
  angle += 0.02;

  // Reset the angle to maintain continuity
  if (angle > TWO_PI * 4) { // Adjust the multiplier for the number of loops
    angle = 0;
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('myCanvas', 'png');
  }
}
