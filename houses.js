document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");

    const imageFiles = ["1h.png", "2h.png", "3h.png", "4h.png", "5h.png", 
        "6h.png", "7h.png", "8h.png", "9h.png", "10h.png",
        "11h.png", "12h.png", "13h.png", "14h.png", "15h.png", "16h.jpg", "17h.png", "19h.png"];

    imageFiles.forEach((imageFile, index) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const originalImg = new Image();
        originalImg.src = `homes/${imageFile}`;

        originalImg.onload = function () {
            const aspectRatio = originalImg.width / originalImg.height;

            const canvasWidth = 900;
            const canvasHeight = canvasWidth / aspectRatio;

            canvas.width = canvasWidth;
            canvas.height = canvasHeight;

            imageContainer.appendChild(canvas);

            ctx.drawImage(originalImg, 0, 0, canvas.width, canvas.height);
            halftoneEffect(ctx, canvas.width, canvas.height);
        };
    });
    function halftoneEffect(context, width, height) {
        const imageData = context.getImageData(0, 0, width, height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            // Invert colors
            data[i] = 255 - data[i];       // Red
            data[i + 1] = 255 - data[i + 1]; // Green
            data[i + 2] = 255 - data[i + 2]; // Blue

            const grayscale = (data[i] + data[i + 1] + data[i + 2]) / 3;
            const threshold = 128;

            const value = grayscale > threshold ? 255 : 0;

            data[i] = data[i + 1] = data[i + 2] = value;
            data[i + 3] = 255; 
        }

        context.putImageData(imageData, 0, 0);
    }
});

