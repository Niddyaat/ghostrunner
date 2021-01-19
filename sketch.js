var doorImg,door;
var towerImg,tower;
var climberImg,climber;
var ghostImg,ghost;
var doorGroup,climberGroup;

function preload(){
  doorImg=loadImage("door.png")
  climberImg=loadImage("climber.png")
  ghostImg=loadImage("ghost-standing.png")
  towerImg=loadImage("tower.png")
}
function setup(){
  createCanvas(600,600)
  tower=createSprite(300,300)
  tower.addImage(towerImg)
  tower.velocityY=3
  ghost=createSprite(200,200,50,50)
  ghost. addImage(ghostImg)
  ghost.scale=0.5
  doorGroup=new Group();
  climberGroup=new Group();
}
function draw(){
  background("black")
  if(tower.y>400){
    tower.y=200
  }
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3
  }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3
  }
  if(keyDown("space")){
    ghost.velocityY=-10
  }
  ghost.velocityY=ghost.velocityY+0.5
  spawnDoors()
  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0  
  }
  
  
  
  drawSprites()
}
function spawnDoors(){
  if(frameCount%150==0){
              door=createSprite(200,50)  
  door.addImage(doorImg)
  door.velocityY=3
  climber=createSprite(200,120)
  climber.addImage(climberImg)
  climber.velocityY=3   
    door.x=Math.round(random(120,400))
    climber.x=door.x 
    door.lifetime=500
    climber.lifetime=500
    doorGroup.add(door)
    climberGroup.add(climber)
    ghost.depth=door.depth
    ghost.depth+=1
  }
  }
  
  



