let video;
let imgReady = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide();
}

function draw() {
  background(139, 10, 0);
  image(video, 0, 0, width, height);
  meltImage();
}

function meltImage() {
  video.loadPixels();
  for (let x = 0; x < video.width; x++) {
    for (let y = video.height - 1; y > 0; y--) {
      if (random() < 0.1) {
        let index = (x + y * video.width) * 4;
        let belowIndex = (x + (y + 1) * video.width) * 4;
        for (let i = 0; i < 4; i++) {
          video.pixels[belowIndex + i] = video.pixels[index + i];
        }
      }
    }
  }
  video.updatePixels();
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('myCanvas', 'png');
  }
}
