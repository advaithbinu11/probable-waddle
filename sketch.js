const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinkos=[];
var particles=[];
var divisions=[];
var divisionHeight=300;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  ground1=new Ground(240,790,500,20);
  for(k=0;k <=width;k=k+80){
    division.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }
  plinko1=new Plinko(200,300,20);
  particle1=new Particle(210,100,15);
}

function draw() {
  Engine.update(engine)
  background(0); 
  drawSprites();
  ground1.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  plinko1.display();
  particle1.display();
}