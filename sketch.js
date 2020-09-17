var deformation
var car, wall,thickness
var speed, weight
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
 car = createSprite(20,100,20,10)
 car.shapeColor=("gold")
 wall = createSprite(1200,100,thickness,50)
 speed = random(223,321);
 weight = random(30,52)
 car.velocityX = speed;

}

function draw() {
  background(0,0,0);  
 if(car.collide(wall)){

deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
console.log(deformation)
if(deformation<10){

wall.shapeColor=("green")
}else if (deformation>10){


  wall.shapeColor=("red")
}}drawSprites();
}