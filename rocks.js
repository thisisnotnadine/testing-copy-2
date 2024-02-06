let currentlyDraggedRock = null;
let images = [];

function setup() {
    const sentenceContainers = document.querySelectorAll('.sentence-container');

    createCanvas(windowWidth, windowHeight);

    sentenceContainers.forEach((container, index) => {
        const rock = container.querySelector('.rock');
        images.push({ rock, container }); // Store both the rock and its container

        const angle = (index / sentenceContainers.length) * 360;

        const radius = 200;

        const x = Math.cos((angle * Math.PI) / 180) * radius + width / 2 - rock.width / 2;
        const y = Math.sin((angle * Math.PI) / 180) * radius + height / 2 - rock.height / 2;

        container.style.position = 'absolute';
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;

        container.addEventListener('mouseover', () => {
            if (currentlyDraggedRock !== rock) {
                rock.style.transform = 'translate(-50%, -50%) scale(1.2)';
            }
        });

        container.addEventListener('mouseout', () => {
            if (currentlyDraggedRock !== rock) {
                rock.style.transform = 'translate(-50%, -50%)';
            }
        });
    });
}

function draw() {
    // Additional draw logic can go here if needed
}

function mousePressed() {
    images.forEach(({ rock, container }) => {
        if (
            mouseX > container.offsetLeft &&
            mouseX < container.offsetLeft + container.offsetWidth &&
            mouseY > container.offsetTop &&
            mouseY < container.offsetTop + container.offsetHeight
        ) {
            currentlyDraggedRock = rock;
            currentlyDraggedRock.style.zIndex = 1;
        }
    });
}

function mouseDragged() {
    if (currentlyDraggedRock) {
        currentlyDraggedRock.style.left = `${mouseX - currentlyDraggedRock.clientWidth / 2}px`;
        currentlyDraggedRock.style.top = `${mouseY - currentlyDraggedRock.clientHeight / 2}px`;
        currentlyDraggedRock.style.zIndex = 2;
    }
}

function mouseReleased() {
    if (currentlyDraggedRock) {
        currentlyDraggedRock.style.zIndex = 0;
        currentlyDraggedRock = null;
    }
}
