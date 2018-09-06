var x = 80;
var y = 40;
var d = 70;
var e = 220;
var s = 20;

function setup() {
  createCanvas(480,400);
  background(204);
}

function draw() {
rect (x, y, s, s);
rect (x+d, y, 2*s, 2*s);
rect (2*x+s+d, y, 3*s, 3*s);
}
