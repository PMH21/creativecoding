var x = 25
var h = 20
var y = 25;

function setup() {
  // put setup code here
  createCanvas (1200,400);
}

function draw() {
  background(204);
  x = 20;
  rect(x, y, 100, h);
  x = x + 100;
  rect(x, y +h, 100, h);
  x = x + 100
  rect(x, y + h*2, 100, h);
  x = x + 100
  rect(x, y + h*3, 100, h);
  x = x + 100
  rect(x, y + h*4, 100, h);
  x = x + 100
  rect(x, y +h*5, 100, h);
  x = x + 100
  rect(x, y + h*6, 100, h);
  x = x + 100
  rect(x, y + h*7, 100, h);
  x = x + 100
  rect(x, y + h*8, 100, h);
  x = x + 100
}
