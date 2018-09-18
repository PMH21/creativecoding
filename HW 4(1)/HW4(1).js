var x = 240;
var y = 120;
var d = 10;

function setup() {
  // put setup code here
createCanvas(1200, 400);
background(204);
noFill();
}


function draw() {
for(var i = 1; i <21; i++){
  ellipse(x, y, i*d, i*d);
  }

for(var i = 1; i <21; i++){
  ellipse(600, 120, i*d, i*d);
  }
}
