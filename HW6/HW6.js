var x = 60;
var y = 60;
function setup() {
createCanvas(480, 200);
}

function draw() {
  background(0);
  fill(255);
  if(keyIsPressed) {
    if(keyCode == LEFT_ARROW) {
      x = x - 5;
    }  else if (keyCode == RIGHT_ARROW) {
        x = x + 5;
      }
      if(keyCode == UP_ARROW) {
        y = y - 5;
      } else if (keyCode == DOWN_ARROW) {
        y = y + 5;
      }
      if(key == 'd') {
        stroke(255, 255, 0);
        line(x+10, y, width, y);
      }
    }

  fill (255);
  stroke (0);
  rect(x, y, 10, 10);
}
