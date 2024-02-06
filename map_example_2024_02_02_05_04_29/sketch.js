let charSet = "hi";
let video;
let asciiDiv;
let resetButton;
let charInput;
let waves = 0; // Initialize waves for wave animation

function setup() {
  asciiDiv = createDiv();
  asciiDiv.class('ascii-text');
  noCanvas();
  video = createCapture(VIDEO);
  video.size(60, 48);
}

function draw() {
  video.loadPixels();
  let asciiImage = "";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = charSet.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      const c = charSet.charAt(charIndex);

      // Apply a wave-like animation effect to the yOffset
      const waves = sin(frameCount * 0.5 + i * 0.1) * 9;
      const newY = j + waves;

      asciiImage += '<span style="color: rgb(' + r + ',' + g + ',' + b + ');position: relative; top:' + waves + 'px;">' + c + '</span>';
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
  
  //BOTH OF THESE FUNCTIONS MUST STAY!
function mouseClicked() {
  setup();
}
  
function keyPressed() {
  if (key === 's') {
    saveCanvas('myCanvas', 'png');
  }
}
}

