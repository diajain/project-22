const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground, object;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  var object_options = {
    restitution: 1.0
  }

 ground = Bodies.rectangle(200,370,400,30,ground_options);
 World.add(world,ground);

 object = Bodies.rectangle(200,100,50,50,object_options);
 World.add(world,object);

console.log(object.type);
console.log(ground.position);
  
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30);
  
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
}
