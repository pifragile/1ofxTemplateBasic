// example
const canvas = document.createElement("canvas");
canvas.id = "myCanvas";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.zIndex = 8;
canvas.style.position = "absolute";

const body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function drawArt() {
    // example
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = `rgba(${random1ofx() * 255}, ${random1ofx() * 255}, ${
        random1ofx() * 255
    }, 1)`;

    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "rgba(0, 255, 0, 1)";
    ctx.fillRect(random1ofx() * width, random1ofx() * height, random1ofx() * width * 0.5, random1ofx() * height * 0.5);
}
