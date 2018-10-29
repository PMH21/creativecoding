var x = 80;
var y = 0;
var speed = 5;
var sun = 120
//var speedsun = 5;
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0);
  currentTime = millis();
  if(currentTime < 5000) {
   stroke(255);
   y += speed;
   line(x, y, x, y+20);
   line(2*x, y-30, 2*x, y+20-30);
   line(3*x, y+50, 3*x, y+20+50);
   line(4*x, y-10, 4*x, y+20-10);
   if(y > height) {
     y = 0;
     x = random(0, width);
   }
}
//Sun Timer
   if(currentTime > 5000) {
     background(135, 206, 250);
     fill (255, 255 ,0);
     ellipse(width/2, height/2, 30, 30);
     if(y > height) {
       y = 0;
     }
    }
}
