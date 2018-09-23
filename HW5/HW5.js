var x = 80;
var y = 30;
var w = 80;
var h = 60;

function setup() {
  createCanvas(1200, 400);
}

function draw() {
  background (204)
  fill(255);
  rect (x, y, w, h);
  rect (x*3, y, w, h);
{
  if ((mouseX > x) && (mouseX < x+w) &&
      (mouseY > y) && (mouseY < y+h)) {
    if (mouseIsPressed) {
      if (mouseButton == LEFT) {
        fill(255, 0, 0);
        rect (x, y, w, h);
      }
      }
    }
}
{
    if ((mouseX > x*3) && (mouseX < x*3+w) &&
        (mouseY > y) && (mouseY < y+h)) {
      if (mouseIsPressed) {
        if(mouseButton == RIGHT) {
          fill(0, 255, 0);
          rect (x*3, y, w, h);
        }
        }
      }
}
}
