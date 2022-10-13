var bow , arrow,  background, redB, yellowB, greenB ,blueB; 
var arrowGroup, bowImage, arrowImage;
var green_birdImage, red_birdImage, pink_birdImage ,blue_birdImage;
var backgroundImage;

var score =0;
function preload(){  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_birdImage = loadImage("red.webp");
  green_birdImage = loadImage("green.webp");
  yellow_birdImage = loadImage("yellow.webp");
  blue_birdImage = loadImage("blue.webp");
}

function setup() {
  createCanvas(400, 400);
  
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  yellowB= new Group();
  arrowGroup= new Group();  
}

function draw() {
 background(0);
  
  scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
  
  bow.y = World.mouseY
  
  
  if (keyDown("space")) {
    createArrow();  
  }
  
  
  var select_bird = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_bird == 1) {
      redBird();
    } else if (select_bird == 2) {
      greenBird();
    } else if (select_bird == 3) {
      blueBird();
    } else {
      yellowBird();
    }
  }
  
  if (arrowGroup.isTouching(redB)) {
    
        bird.destroyEach();
        arrowGroup.destroyEach();
    score=score+1;
  }

  if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }

  if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }

  if (arrowGroup.isTouching(yellowB)) {
    yellowB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }

  drawSprites();
  text("Score: "+ score, 300,50);
}

function redBird() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_birdImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.03;
  redB.add(red);
}

function blueBird() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_birdImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.2;
  blueB.add(blue);
}

function greenBird() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_birdImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.03;
  greenB.add(green);
}

function yellowBird() {
  var yellow = createSprite(0,Math.round(random(20, 370)), 10, 10);
  yellow.addImage(yellow_birdImage);
  yellow.velocityX = 3;
  yellow.lifetime = 150;
  yellow.scale = 0.03
  yellowB.add(yellow);
}


 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  
  arrowGroup.add(arrow);
  
   
}
