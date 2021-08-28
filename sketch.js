
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball,groundobj,leftside,rightside;
var r = 20;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution: 0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
  ball = Matter.Bodies.circle(200,100,r/2,ball_options);
  World.add(world,ball);

    groundobj = new Ground(width/2,670,width,20);
	leftside = new Ground(1100,600,20,120); 
	rightside = new Ground(1300,600,20,120);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,r,r);

 groundobj.display();
 leftside.display();
 rightside.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode== UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:30,y:-15});
	}
}

