var bgImage, sleep, brush, gym, eat,drink, movez, iss, bath, gym2;
var top, bottom, left, right,edges;
function preload(){
  bgImage = loadImage("images/iss.png");
  sleep = loadImage("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png", "images/gym2.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  movez = loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png");

  bath = loadAnimation("images/bath1.png", "images/bath2.png");
  gym2 = loadAnimation("images/gym11.png", "images/gym12.png");
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(400, 200, 200, 200);
  bg.scale = 0.1606;
  bg.addImage(bgImage);
  astronaut = createSprite(400, 200, 20, 20);
  astronaut.scale = 0.1;
  astronaut.addImage(sleep)
  
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
  
  
  
}

function draw() {
  

  mov();
  drawSprites();
  edges = createEdgeSprites();
  astronaut.bounceOff(edges[0]);
  astronaut.bounceOff(edges[1]);
  astronaut.bounceOff(edges[2]);
  astronaut.bounceOff(edges[3]);
  instructions();
}   
function instructions(){
  fill('white');
  
  
  text("Instructions:", 25, 50);
  text("UP ARROW = Brushing", 25, 75);
  text("DOWN ARROW = Gymming", 25, 100);
  text("LEFT ARROW = Eating", 25, 125);
  text("RIGHT ARROW = Bathing", 25, 150);
  text("m key = Moving", 25, 175);
}

function mov(){
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y =250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
      astronaut.addAnimation("moving", movez);
      astronaut.changeAnimation("moving");
      astronaut.y = 250;
      astronaut.velocityX = 2;
      astronaut.velocityY = 2;
    }
}

  
