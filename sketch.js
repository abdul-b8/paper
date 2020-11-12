
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ground = new Ground (400,350,width,height)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper= new Paper(100,670,5);

	dustbin = new Dustbin(400,675);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if (keyDown(UP_ARROW)){

  Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85,y:-85})
  	
  }
  
  drawSprites();
 
}



