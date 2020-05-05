//creating two objects
var object1, object2;

function setup() {
  createCanvas(800,400);
  object2 = createSprite(200,200,50,50);
  object2.shapeColor = "red";
  object1 = createSprite(400, 200, 50, 50);
  object1.shapeColor = "yellow";
}

function draw() {
  background("black");  
  drawSprites();

  object1.x = World.mouseX;
  object1.y = World.mouseY;

  //checking two objectre colliding or not
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2){
    object2.shapeColor = "green";
    object1.shapeColor = "green";
  }
  else {
    object2.shapeColor = "yellow"
    object1.shapeColor = "red";
  }
}