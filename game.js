const WIDTH = 800;
const HEIGHT = 600;

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function drawBackground() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function drawNet() {
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 4;
  ctx.setLineDash([20, 15]);
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2, 0);
  ctx.lineTo(WIDTH / 2, HEIGHT);
  ctx.stroke();
  ctx.setLineDash([]);
}

function draw() {
  drawBackground();
  drawNet();
}

draw();
