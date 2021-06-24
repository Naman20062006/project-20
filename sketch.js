var car,wall
var speed , weight

function setup() {
  createCanvas(1600,400);
  car = createSprite(1200, 200, 50, 50);
  wall = createSprite(0,200,60,100)

speed=random(25,31);
weight=random(400,1500);

car.velocityX = -5

}

function draw() {
  background("black");  
  
if(wall.x=car.x<(car.width+wall.width)/2)
{
car.velocityX=1;

var deformation=0.5 * width * speed * speed/22509;
if(deformation>180)
{
  car.shapeColor =color("yellow")
  wall.shapeColor = color("white")
}
if(deformation<180 && deformation>100){
  car.shapeColor = color("green")
  wall.shapeColor = color("white")
}
if(deformation<100){
  car.shapeColor = color("red")
  wall.shapeColor = color("white")
}
}
  car.collide(wall)
  drawSprites();
}