const container = document.getElementById('container');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');

container.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const { top, right, bottom, left } = container.getBoundingClientRect();
    const centerX = (left + right) / 2;
    const centerY = (top + bottom) / 2;

    if (clientX > centerX && clientY < centerY) {
        // Mouse in top right quadrant
        showImage(image1);
        hideImage(image2, image3, image4, image5);
    } else if (clientX > centerX && clientY > centerY) {
        // Mouse in bottom right quadrant
        showImage(image2);
        hideImage(image1, image3, image4, image5);
    } else if (clientX < centerX && clientY < centerY) {
        // Mouse in top left quadrant
        showImage(image3);
        hideImage(image1, image2, image4, image5);
    } else if (clientX < centerX && clientY > centerY) {
        // Mouse in bottom left quadrant
        showImage(image4);
        hideImage(image1, image2, image3, image5);
    } else {
        // Mouse in the middle, show image5
        showImage(image5);
        hideImage(image1, image2, image3, image4);
    }
});

function showImage(imgElement) {
    imgElement.style.display = 'block';
}

function hideImage(...imgElements) {
    imgElements.forEach(imgElement => {
        imgElement.style.display = 'none';
    });
}
