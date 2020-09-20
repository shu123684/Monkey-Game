
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var survivaTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400);

  monkey = createSprite(80, 300, 80, 80); 
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 335, 900, 10);
  ground.velocityX = -5;
  ground.x = ground.width/2;
  
  survivalTime = 0;
}


function draw() {
  background("white");
  
  if(keyDown("space") && monkey.y >= 299){
    monkey.velocityY = -18 ;       
  }
  // console.log(monkey.y)
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  FoodGroup = new Group();
  obstacleGroup = new Group(); 
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  
  food();
  obstacles();
  
  drawSprites();
  
  fill("black");
  textSize(20);
  survivalTime = Math.ceil(frameCount/getFrameRate());
  text("Survival Time = " + survivalTime, 100 , 50);
}

// <----Functions!---->
// Food
function food() {
  if(frameCount%80 == 0){
    banana = createSprite(410, Math.round(random(200, 120)), 10, 10);
    banana.scale = 0.1;
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.lifetime = 150;
    FoodGroup.add(banana);
  }
}

//  obstacles
function obstacles() {
  if(frameCount %300 == 0){
    obstacle = createSprite(410, 315, 10, 10);
    obstacle.scale = 0.1;
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -10;
    obstacle.lifetime = 150;
    obstacleGroup.add(obstacle);
  }
}


