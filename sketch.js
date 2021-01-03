const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, world;

var engine = Engine.create();
var world = engine.world;
var ground, basket;


function setup() {
	createCanvas(800, 700);

	//Create the Bodies Here.
	// ground = new Ground(400, 620, 800, 200);
	
	ground = new Ground(400, 675, 850, 50);
	ball = new Ball(100, 50, "paper.png");
	basket = new Basket(220, 10, "trash.png");
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
  ball.display();
  ground.display();
  basket.display();

  if (keyDown(UP_ARROW)) {
	  ball.jump();
	//   Matter.Body.applyForce(ball.body, ball.body.position, {x: 85, y: 200});
   }
}


