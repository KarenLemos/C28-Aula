const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine, world;
let canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180,110,130,100,20);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height); 

  Engine.update(engine); 

  tower.display();
  cannon.display();
 
}



