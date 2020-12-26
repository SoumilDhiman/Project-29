
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, 
    box9, box10, box11, box12, box13, box14, box15, box16;
var platform
var ball

var rope

function setup() {

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(750,360,360,20);

    box1 = new Box(650,100,30,30);
    box2 = new Box(680,100,30,30);
    box3 = new Box(710,100,30,30);
    box4 = new Box(740,100,30,30);
    box5 = new Box(770,100,30,30);
    box6 = new Box(800,100,30,30);
    box7 = new Box(830,100,30,30);
    box8 = new Box(680,100,30,30);
    box9 = new Box(710,100,30,30);
    box10 = new Box(740,100,30,30);
    box11 = new Box(770,100,30,30);
    box12 = new Box(800,100,30,30);
    box13 = new Box(710,100,30,30);
    box14 = new Box(740,100,30,30);
    box15 = new Box(770,100,30,30);
    box16 = new Box(740,100,30,30);

    ball = new Box(510,60,40,40);
    
    rope = new Slingshot(ball.body,{x:500,y:260});
}

function draw() {
    background("red");
    Engine.update(engine);

    ball.display();
    platform.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    rope.display();
}    

function mouseDragged () {

    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY}) 
}











