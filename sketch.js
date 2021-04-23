const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var ball;
var slingShot;
var polygon_im;
var box1,box2,box3,box4,box5,box6,box7,box8
var box9,box10,box11,box12,box13,box14
var box15,box16,box17,box18,box19,box20

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ball = new Ball (200,200,40,40);

  ground = new Ground(700,700,1000,20);
 
  slingShot = new SlingShot(ball.body,{x:500,y:200});

  //level one
  box1 = new Block(690,100,70,70);
  box2 = new Block(690,100,70,70);
  box3 = new Block(690,100,70,70);
  box4 = new Block(690,100,70,70);
  box5 = new Block(690,100,70,70);
  box6 = new Block(690,100,70,70);
  box7 = new Block(690,100,70,70);
  box8 = new Block(690,100,70,70);
  //level2
  box9 = new Block(790,100,70,70);
  box10 = new Block(790,100,70,70);
  box11 = new Block(790,100,70,70);
  box12 = new Block(790,100,70,70);
  box13 = new Block(790,100,70,70);
  box14 = new Block(790,100,70,70);
  //level3
  box15 = new Block(890,100,70,70);
  box16 = new Block(890,100,70,70);
  box17 = new Block(890,100,70,70);
  box18 = new Block(890,100,70,70);
  box19 = new Block(890,100,70,70);
  box20 = new Block(890,100,70,70);


}
function draw() {
  background(56,44,44); 

  textSize(30);
  fill("lightyellow");
  //textFont()
  text("DRAG THE BALL AND DESTROY THE BUILDING",220,30)
  

  ground.display();
  
  strokeWeight(4);
  stroke(15);
  fill("cyan");
  box1.display();
  fill("lime");
  box2.display();
  fill("magenta");
  box3.display();
  fill("yellow");
  box4.display();
  fill("orange");
  box5.display();
  fill("cyan");
  box6.display();
  fill("lime");
  box7.display();
  fill("magenta");
  box8.display();
  fill("yellow");
  box9.display();
  fill("orange");
  box10.display();
  fill("cyan");
  box11.display();
  fill("lime");
  box12.display();
  fill("magenta");
  box13.display();
  fill("yellow");
  box14.display();
  fill("orange");
  box15.display();
  fill("cyan");
  box16.display();
  fill("lime");
  box17.display();
  fill("magenta");
  box18.display();
  fill("yellow");
  box19.display();
  fill("orange");
  box20.display();

  slingShot.display();
  fill("green");
  ball.display();

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
