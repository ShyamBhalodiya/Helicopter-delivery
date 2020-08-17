var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, helicopterBody, ground, count, tile, wall1, wall2, wall3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

function preload() {
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	var canvas = createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6;

	groundSprite = createSprite(width / 2, 700, width, 30);
	groundSprite.shapeColor = color(0);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { isStatic: true });
	World.add(world, packageBody);

	helicopterBody = Bodies.circle(width / 2, 200, 10, { isStatic: true });
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width / 2, 700, width, 60, { isStatic: true });
	World.add(world, ground);

	//basket
	wall1 = new box(480, 650, 20, 100);
	wall2 = new box(270, 650, 20, 100);
	wall3 = new box(370, 680, 200, 20);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(50);
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;
	keyPressed();


	wall1.display();
	wall2.display();
	wall3.display();
	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Body.setStatic(packageBody, false);
	}
}
