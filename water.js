let cols;
let rows;
let current;
let previous;
let dampening = 0.99;

function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);

    cols = width;
    rows = height;

    current = new Array(cols).fill(0).map(() => new Array(rows).fill(0));
    previous = new Array(cols).fill(0).map(() => new Array(rows).fill(0));
}

function mouseDragged() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      let x = floor(mouseX);
      let y = floor(mouseY);
      previous[x][y] = 2500;
  }
}


function draw() {
    background(0);

    loadPixels();
    for (let i = 1; i < cols - 1; i++) {
        for (let j = 1; j < rows - 1; j++) {
            current[i][j] =
                (previous[i - 1][j] +
                previous[i + 1][j] +
                previous[i][j - 1] +
                previous[i][j + 1]) /
                2 -
                current[i][j];
            current[i][j] = current[i][j] * dampening;

            // Index calculation
            let index = (i + j * cols) * 4;

            // Set pixel values
            pixels[index + 0] = current[i][j];
            pixels[index + 1] = current[i][j];
            pixels[index + 2] = current[i][j];
            pixels[index + 3] = 255; // Alpha channel
        }
    }
    updatePixels();

    // Swap current and previous arrays
    let temp = previous;
    previous = current;
    current = temp;
}
