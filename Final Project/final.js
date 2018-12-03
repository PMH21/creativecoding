var bg;
var Rustykey;
var music;
var x = [];
var y = [];
var hit = [];
var display ='';
var chest = '';
var lock = 0;
var keyI = 0;
var door = '';
var Pass = '';
var currentTime;
var prompt = '';
var sea;
var Ocean;

function preload() {
  bg = loadImage('background.jpg');
  RustyKey = loadImage('Key.png');
  music = loadSound("Background.mp3");
  music.setLoop(true);
  sea = loadImage('Sea.jpg');
}

function setup() {
  createCanvas(1000, 550);
  music.play();
//Text
  textSize(20);
  textAlign(CENTER);
//Ellipse
  for(var i = 0; i < 2; i++) {
    x[i] = random(20, width-20);
    y[i] = random(20, height-20);
    hit[i] = 0;
  }
}

function draw() {
  image(bg, 0, 0);
  currentTime = millis();
  if(currentTime < 5000) {
    strokeWeight(5);
    rect(width/4, 345, 400, 100);
    prompt = 'You are trapped in a haunted pirate home! \n The chest is locked, \n but there might be clues around.';
    text(prompt, 450, 375);
  }

  //key
  //ellipse(560, 350, 50, 50);
  //door
  //ellipse (675, 300, 50, 50);

if(currentTime > 30000) {
//ellipse & hitbox
  for(var i = 0; i < 2; i++) {
    if(hit[i] == 0) {
    ellipse(x[i], y[i], 50, 50);
    }
  }
} //end of timer

//Items
if(mouseIsPressed) {
  for(var i = 0; i < 2; i++) {
    if(mouseX >(x[i]-10) && mouseX<(x[i]+10)
    && mouseY > (y[i]-10) && mouseY<(y[i]+10)) {
      hit[i] = 1;
      lock += 1;

//Pick-Up Prompt #1 & 2
    if(hit[i] == 1) {

        if(i == 0) {
          strokeWeight(5);
          rect(width/4, 345, 400, 100);
          display = 'You found a note! \n It reads: \n "Mildred, my love, taken too soon"';
        } else {
          strokeWeight(5);
          rect(width/4, 345, 400, 100);
          display = 'There is something scribbled here: \n "Alas my only love is only she of briny blue"';
          }
          text(display, 450, 375);
        }
      }
    } // end of for

//Chest Prompts
    if(mouseX > (560-20) && mouseX < (560+20) && mouseY > (350-30) && mouseY < (350+30)) {
      if(lock > 1){
        strokeWeight(5);
        rect(width/4, 345, 400, 100);
        chest = 'For whom did the pirates heart beat? \n [Press Starting Letter of Answer]';
      } else {
          strokeWeight(5);
          rect(width/4, 345, 400, 100);
          chest = 'It is locked. Maybe there are clues here?';
        }
     text(chest, 450, 375);
     } // end if(mouseX > (560-10) && mouseX < (560+10) && mouseY > (350-10) && mouseY < (350+10)))

  } // end if(mouseIsPressed)

  //Door Prompt
  if(mouseIsPressed){
  if(mouseX > (675-20) && mouseX < (675+20) && mouseY > (300-20) && mouseY < (300+20)) {
    if(keyI > 0){
      image(sea ,0 ,0);
      strokeWeight(5);
      rect(width/4, 345, 400, 100);
      door = 'Congrats you escaped!';
      music.stop();
    } else {
      strokeWeight(5);
      rect(width/4, 345, 400, 100);
      door = 'It is locked. Maybe there is a key?';
    }
    text(door, 450, 400);
  }// end of Door Prompt
}

//Key Password
if(keyIsPressed){
  if(key == 's'){
    strokeWeight(5);
    rect(width/4, 345, 400, 100);
    Pass = 'You found the Key!';
    image(RustyKey, 325, 100);
    text(Pass, 450, 400);
    keyI = 1;
  } else {
    strokeWeight(5);
    rect(width/4, 345, 400, 100);
    Pass = 'It is still locked.';
    text(Pass, 450, 400);
  }
}

}// end of draw
