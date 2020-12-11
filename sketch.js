
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
	var ball
	var dustbin
	var dustbin2
	var dustbin3
	var ground

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	options={
		isStatic:true,

	}

	options2={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2

	}

	//Create the Bodies Here.

	ball = Bodies.circle(56, 46, 55/2, options2)
	World.add(world, ball)

	ground = Bodies.rectangle(400, 375, 1400, 25, options)
	World.add(world, ground)

	dustbin = Bodies.rectangle(1000, 350, 100/2, 25/2, options);
	World.add(world, dustbin)
  
	dustbin2 = Bodies.rectangle(950, 300, 25/2, 100/2, options);
	World.add(world, dustbin2)

	dustbin3 = Bodies.rectangle(1050, 300, 25/2, 100/2, options);
	World.add(world, dustbin3)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
Engine.update(engine);

circle(ball.position.x, ball.position.y, 55)

rect(ground.position.x, ground.position.y, 1400, 25)

rect(dustbin.position.x, dustbin.position.y, 100, 25)

rect(dustbin2.position.x, dustbin2.position.y, 25, 100)

rect(dustbin3.position.x, dustbin3.position.y, 25, 100)

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball, ball.position, {x:85,y:-85});
	}



}

