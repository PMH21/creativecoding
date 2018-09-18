function setup() {
  createCanvas(800, 400);
  background(204);
}

function draw() {
  fill(0);
  beginShape();
  vertex(0, 0);
  vertex(100, 200);
  vertex(120, 280);
  vertex(160, 360);
  vertex(180, 280);
  vertex(220, 360);
  vertex(240, 280);
  vertex(280, 260);
  vertex(340, 240);
  vertex(340, 200);
  vertex(280, 180);
  vertex(240, 160);
  vertex(260, 60);
  vertex(240, 0);
  endShape();
  fill(255);
  triangle(240, 220, 260, 220, 250, 200);
  fill(255, 214, 51);
  triangle(200, 260, 240, 240, 200, 240);

}
