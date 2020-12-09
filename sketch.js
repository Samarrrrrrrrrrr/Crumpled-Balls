const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var object;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    object = Bodies.rectangle(200, 200, 50, 50)
    World.add(world, object)


    box=new Box(100,100, 100, 50);
    box2=new Box(75,200, 50, 100);

    pig=new Pig(300, 300);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    push()

    translate(object.position.x, object.position.y)

    rotate(object.angle)

    rect(0, 0, 50, 50)

    pop()




    box.display ();
    box2.display ();

    pig.display ();
}