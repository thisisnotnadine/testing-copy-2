let raindrops = [];
let umbrellaX, umbrellaY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    umbrellaX = width / 2;
    umbrellaY = height - 150;

    // Create an array of raindrop objects
    for (let i = 0; i < 300; i++) {
        raindrops.push(new Raindrop());
    }
}
function draw() {
    background(0);

    // Display raindrops
    for (let i = raindrops.length - 1; i >= 0; i--) {
        raindrops[i].fall();
        raindrops[i].display();

        // Check if raindrop is close to or under the umbrella
        let distance = dist(raindrops[i].x, raindrops[i].y, umbrellaX, umbrellaY);
        if (distance < 50) {
            raindrops.splice(i, 1); // Remove only the current raindrop
        }

        // Check if raindrop is within the boundaries of the ASCII art
        if (
            raindrops[i].x > umbrellaX - 100 &&
            raindrops[i].x < umbrellaX + 100 &&
            raindrops[i].y > umbrellaY - 20 &&
            raindrops[i].y < umbrellaY + 340
        ) {
            // Remove raindrop if it's inside the ASCII art boundaries
            raindrops.splice(i, 1);
        }
    }

    // Display umbrella
    drawUmbrella(umbrellaX, umbrellaY);
}

function drawUmbrella(x, y) {
    // Draw ASCII umbrella
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(255);
    text("        __.|.__         ", x, y);
    text("    .-'..':`..`     \\   ", x, y + 30);
    text("  .`              . .      .  `.    ", x, y + 60);
    text(" /               :                \\    ", x, y + 90);
    text("/___._ _.._:_.._ _._ ___\\ ", x, y + 120);
    text("  '   '    |    '   '    ", x, y + 150);
    text("           |             ", x, y + 180);
    text("           |             ", x, y + 210);
    text("           |             ", x, y + 240);
    text("           |             ", x, y + 270);
    text("           |             ", x, y + 300);
    text("         \\_|     ", x, y + 330);
}


function mouseDragged() {
    // Update umbrella position based on mouse drag
    umbrellaX = mouseX;
    umbrellaY = mouseY;
}

class Raindrop {
    constructor() {
        this.x = random(width);
        this.y = random(-500, -50);
        this.speed = random(1, 3);
        this.char = random(["|", "'", "||", "'"]);
        
    }

    fall() {
        this.y += this.speed;

        // Reset raindrop when it goes below the canvas
        if (this.y > height) {
            this.y = random(-200, -50);
            this.x = random(width);
        }
    }

    display() {
        fill(255);
        textSize(18);
        textAlign(CENTER, CENTER);
        text(this.char, this.x, this.y);
    }
}
