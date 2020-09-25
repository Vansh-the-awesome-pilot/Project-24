var box1, box2, box3;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
 createCanvas(800, 700);

 engine = Engine.create();
 world = engine.world;
 var ball_options ={
  isStatic: false,
  'restitution':0.3,
  'friction':0.5,
  'density':1.2
 }
 ball = Bodies.circle(100,200,20, ball_options);
 fill("blue");
 World.add(world,ball);

 ground = new Ground(600,height/1.044,1200,20);
 box1 = new Box(650,650,200,20);
 box2 = new Box(560,610, 20, 100);
 box3 = new Box(740, 610, 20, 100);


 Engine.run(engine);
  
}

function draw() {
 rectMode(CENTER);
 ellipseMode(RADIUS);
 ellipse(ball.position.x, ball.position.y, 20, 20);
 background(0);
 collide(ball, ground);
 ground.display();
 box1.display();
 box2.display();
 box3.display();
  
 drawSprites();
 
}
function keyPressed(){
 if (keyCode === UP_ARROW){
  Matter.body.applyForce(ball.body, ball.body.position,{x:85, y:-85});
  }
}


