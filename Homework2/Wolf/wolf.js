function setup() {
  createCanvas(800, 400);
  background(204);
}

function draw() {
  fill (0);
  beginShape ();
  vertex (0, 400);
  vertex (100, 200);
  vertex (120, 120);
  vertex (160, 40);
  vertex (180, 120);
  vertex (220, 40);
  vertex (240, 120);
  vertex (280, 140);
  vertex (340, 160);
  vertex (340, 200);
  vertex (280, 220);
  vertex (240, 240);
  vertex (260, 340);
  vertex (240, 400);
  endShape();
  fill(255);
  triangle(260, 180, 280, 180, 270, 200);
  fill(255, 214, 51);
  triangle(200, 140, 240, 160, 200, 160);
}
