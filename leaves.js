let images = [];
let crunchSound;
let selectedImage = null;
let clickCount = 5;

function preload() {
  for (let i = 1; i <= 11; i++) {
    images.push(loadImage(`${i}.png`));
  }
  crunchSound = loadSound('leaves-64875.mp3', loaded);
}

function loaded() {
  console.log("Crunch sound loaded successfully.");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 11; i++) {
    let img = images[i];
    img.x = width / 3;
    img.y = height / 4;
    img.size = random(480, 800);
  }
}

function draw() {
  background(255, 255, 255);

  images.forEach(img => {
    image(img, img.x, img.y, img.size, img.size);
  });

  if (clickCount >= 11) {
    showNextPageLink();
  }
}
function mousePressed() {
  for (let i = 0; i < 11; i++) {
    let img = images[i];
    if (
      mouseX > img.x &&
      mouseX < img.x + img.size &&
      mouseY > img.y &&
      mouseY < img.y + img.size
    ) {
      selectedImage = img;

      // Stop the previous sound before playing a new one
      if (crunchSound.isPlaying()) {
        crunchSound.stop();
      }

      if (crunchSound.isLoaded()) {
        crunchSound.play();
      } else {
        console.error("Crunch sound not loaded.");
      }

      clickCount++;

      // If you want the link to appear after 5 clicks, change the condition to clickCount >= 5
      if (clickCount >= 5) {
        showNextPageLink();
      }
    }
  }
}


function mouseDragged() {
  if (selectedImage) {
    selectedImage.x = mouseX - selectedImage.size / 2;
    selectedImage.y = mouseY - selectedImage.size / 2;

    selectedImage.x += random(-2, 2);
    selectedImage.y += random(-2, 2);
  }
}

function mouseReleased() {
  selectedImage = null;

  if (crunchSound.isPlaying()) {
    crunchSound.stop();
  }
}

function showNextPageLink() {
  let nextPageLink = document.createElement('a');
  nextPageLink.href = 'houses.html';
  nextPageLink.id = 'next-page-link';
  nextPageLink.innerText = 'Go to Next Page';

  // Check if the link is not already added
  if (!document.getElementById('next-page-link')) {
    document.body.appendChild(nextPageLink);
  }
}
