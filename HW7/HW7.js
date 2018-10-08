var img;
var bgImg;
var offset = 0;
var easing = 0.05;

function preload() {
  bgImg = loadImage('you_died.jpg');
  img = loadImage ('hornet.png');
}
function setup() {
  createCanvas(700, 400);
}

function draw() {
  image(img, mouseX-120, mouseY-120, 400, 300);
  image(bgImg, 0, 0);
  var dx = (mouseX-150)-offset;
  offset += dx*easing;
  image(img, offset, 120, 300, 150);
}
