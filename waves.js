var myAsciiArt;
var asciiart_width = 120;
var asciiart_height = 60;
var images = [];
var gfx;
var ascii_arr;
var currentImageIndex = 0;
var framesPerImage = 10;
var canvasSize = 600;

function preload() {
  for (var i = 0; i < 514; i++) {
    var imagePath = 'open-cv/data/frame' + i + '.jpg';
    images[i] = loadImage(imagePath);
  }
}

function setup() {
  createCanvas(canvasSize, canvasSize);
  gfx = createGraphics(asciiart_width, asciiart_height);
  gfx.pixelDensity(1);
  myAsciiArt = new AsciiArt(this);
  myAsciiArt.printWeightTable();
  textAlign(CENTER, CENTER);
  textFont('monospace', 8);
  textStyle(NORMAL);
  noStroke();
  fill(255);

  // Move the filter(THRESHOLD) to the setup function
  filter(THRESHOLD);

  frameRate(30);
}

function draw() {
  background(255);

  // Center the smaller image on the canvas
  var imageSize = min(width, height) * 0.8;
  var x = width / 2 - imageSize / 2;
  var y = height / 2 - imageSize / 2;

  image(images[currentImageIndex], x, y, imageSize, imageSize);

  gfx.image(images[currentImageIndex], 0, 0, gfx.width, gfx.height);
  gfx.filter(POSTERIZE, 3);
  ascii_arr = myAsciiArt.convert(gfx);
  myAsciiArt.typeArray2d(ascii_arr, this);

  if (frameCount % framesPerImage === 0) {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
}

function mouseReleased() {
  console.log(myAsciiArt.convert2dArrayToString(ascii_arr));
}

function windowResized() {
  resizeCanvas(canvasSize, canvasSize);
}
