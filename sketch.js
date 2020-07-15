const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1,ground2;
var world,engine;
var score = 0;


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  ground1 = new ground (width/2,390,800,20);
  ground2 = new ground (300,350,100,20);
  box1 = new polygon(300,345,20,20);
  box2 = new polygon(320,345,20,20);
  box3 = new polygon(280,345,20,20);
  box4 = new polygon(310,335,20,20);
  box5 = new polygon(290,335,20,20);
  box6 = new polygon(300,300,20,20);
  polygon1 = new box(200,350,30,30);
  slingshot1 = new slingshot(polygon1.body,{x:210,y:330});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  text("score" + score,700,50);
  ground1.display();
  ground2.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  polygon1.display();
  slingshot1.display();
  
  
  
  
  
  
  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot1.fly();
}
