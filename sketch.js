const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,bodies,engine;
var ground;
var particles = [];
var plinko = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(width/2,height,width,20);
 
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
           plinko.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
           plinko.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
           plinko.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
           plinko.push(new Plinko(j,375));
    }
    Engine.run(engine);
}
 
function draw() {
  background("black");
  Engine.update(engine);
  textSize(20)
 
 Engine.update(engine);
  
  ground.display();

   for (var i = 0; i < plinko.length; i++) {
     
     plinko[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
   }
 
  for (var j = 0; j < particles.length; j++) {
        particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
      divisions[k].display();
   }
   drawSprites();
}