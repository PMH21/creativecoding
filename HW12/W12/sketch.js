var moai1
var moai2
var moai3
var moai4
var moai5
var grass

function preload(){
  grass = loadImage('Grass.png');
}
function Moai(initX, initY, size, red, green, blue) {
  this.x = initX;
  this.y = initY;
  this.size =size;
  this.r = red;
  this.g = green;
  this.b = blue;

this.moai = function() {
  fill(this.r, this.g, this.b);
  rect(this.x, this.y, this.size, this.size*2);
  fill(this.r-51, this.g-51, this.b-51);
  ellipse(this.x+15, this.y+40, this.size/4, this.size);
  ellipse(this.x+35, this.y+20, this.size/3, this.size/3);
  triangle(this.x+this.size, this.y+this.size/3, this.x+this.size, this.y+this.size*3/4, this.x+this.size*1.5, this.y+this.size*2/3);
  stroke(0);
  line(this.x+this.size/2, this.y+this.size*1.14, this.x+this.size, this.y+this.size*1.14);
  }
}



function setup() {
  createCanvas(480, 300);
  image(grass,0,0,480,300);
  moai1 = new Moai(50, 100, 70, 120, 127, 127, 127);
  moai2 = new Moai(150, 100, 60, 90, 127, 127, 127);
  moai3 = new Moai(240, 100, 50, 80, 127, 127, 127);
  moai4 = new Moai(325, 100, 40, 70, 127, 127, 127);
  moai5 = new Moai(400, 100, 40, 60, 127, 127, 127);

}

function draw() {
  moai1.moai();
  moai2.moai();
  moai3.moai();
  moai4.moai();
  moai5.moai();
  /*rect(200, 100, 70, 120);
  triangle(270, 120, 290, 170, 270, 170);
  ellipse(215, 140, 15, 60);
  ellipse(250, 120, 15, 15);
  stroke(0);
  line(270, 180, 235, 180);*/
}
