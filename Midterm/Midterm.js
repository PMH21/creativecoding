var wolf;
var forest;
var lizard;
var slash;
var fire;
var buttonAttack;
var buttonFire;
var count = 0;
var special = 0; // attack = 1, fire = 2
var dead;
var dying;
var death = 0;

function preload() {
  forest = loadImage('Forest.png');
  slash = loadImage('Slash.png');
  fire = loadImage('Fire.png');
  wolf = loadImage('Werewolf.png');
  lizard = loadImage('Lizard.png');
  dying = loadImage('Dying2.png');
  dead = loadImage('Dead.png');
}

function setup() {
  createCanvas (800, 600);
  textSize(50);
  textAlign(RIGHT);
  buttonAttack = createButton('Attack');
  buttonAttack.position(450, 500);
  buttonAttack.mousePressed(Slash);

  buttonFire = createButton('Fire');
  buttonFire.position(500, 500);
  buttonFire.mousePressed(Fire);

}

function Slash() {
  //image(slash, 100, 300, 100, 300);
  count = 1;
  special = 1;
}

function Fire() {
  //image(fire, 100, 300);
  count = 2;
  special = 2;
}

function draw() {
  if(count == 0) {
    image(forest, 0, 0);
    image(wolf, 100, 350);
    image(lizard, 600, 325);

  } else {
    if(special == 1) {
    image(forest, 0, 0);
    image(wolf, 100, 350);
    image(lizard, 600, 325);
    count +=1;
    if(count < 120) {
      image(slash, 150, 350, 50, 200);
      fill(255);
      text('10', 200, 300);
    } else {
      count = 0;
      special = 0;
      death = 0;
    }
   }

   if(special == 2) {
   image(forest, 0, 0);
   image(lizard, 600, 325);
   count +=2;
   if(count < 120) {
     image(fire, 150, 350, 50, 200);
     fill (255, 255, 0);
     text('100', 200, 300);
     text('SUPER EFFECTIVE', 500, 200);
   } else {
     count = 0;
     special = 0;
     death = 1;
   }
   }

   if(death == 0 && special < 2) {
     image(wolf, 100, 350);
  if(death == 0 && special == 1){
    image(wolf, 100, 350);
    image(slash, 150, 350, 50, 200);
  } } else {
     image(dead, 100, 450);
   }

    if(death > 0 && special == 0) {
      death +=1;
    }
    if(death == 120) {
      death = 0;
    }


  }


/*if(count == 0) {
  image(forest, 0, 0);
  image(wolf, 100, 350);
  image(lizard, 600, 325);

} else {
  if(special == 2) {
  image(forest, 0, 0);
  image(wolf, 100, 350);
  image(lizard, 600, 325);
  count +=2;
  if(count < 120) {
    image(fire, 150, 350, 50, 200);
    fill (255, 255, 0);
    text('100', 175, 300);
    text('SUPER EFFECTIVE', 175, 200);
  } else {
    count = 0;
  }
  special = 0;
  }
}*/

}
