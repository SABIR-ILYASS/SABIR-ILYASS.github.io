const canvas = document.getElementById("pixelCanvas");
const ctx = canvas.getContext("2d");
const image = new Image();
image.src = "images/user.png"; // Replace with your image path

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pixelSize = 2; // Size of the "pixels" in the rain

image.onload = function () {
    function createPixel(x, y) {
        ctx.fillStyle = "#ffffff"; // Pixel color
        ctx.fillRect(x, y, pixelSize, pixelSize);
    }

    function animatePixel(pixel) {
        pixel.y += 2; // Adjust the speed of falling pixels
        if (pixel.y > canvas.height) {
            pixel.y = Math.random() * -50;
            pixel.x = Math.random() * canvas.width;
        }
        createPixel(pixel.x, pixel.y);
    }

    const pixels = [];

    for (let i = 0; i < 100; i++) {
        pixels.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
        });
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        pixels.forEach(animatePixel);
    }

    animate();
};
