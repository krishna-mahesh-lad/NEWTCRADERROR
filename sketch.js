
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	b1 = new Bob (300, 500, 30)
	b2 = new Bob (350, 500, 30)
	b3 = new Bob (400, 500, 30)
	b4 = new Bob (450, 500, 30)
	b5 = new Bob (500, 500, 30)

	top = new Roof (400, 200, 400, 10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  top.display();

}



