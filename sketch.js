const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var box1;
function preload (){
backgroundImage= loadImage("bg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20)
ground2= new Ground(150,305,300,170) 
    pig1=new pig(810,350)
log1=new log(810,260,300,PI/2)
box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70);
pig2=new pig(810,220)
log2=new log(810,180,300,PI/2)
bird1=new Bird(200,50)
box5=new Box(810,160,70,70)
log3=new log(760,120,150,PI/7)
log4=new log(870,120,150,-PI/7)
//log5=new log(150,305,300,PI/2)
sling=new SlingShot(bird1.body,{x:200,y:50}) 
}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
pig1.display();
log1.display();
bird1.display(); 
box3.display();
box4.display();
pig2.display();
log2.display();
log3.display();
log4.display();
box5.display();
//log5.display()
sling.display();
ground2.display();
}
function mouseDragged (){
Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})

}
function mouseReleased (){
sling.fly()

}
function keyPressed (){
if(keyCode==32){
sling.attach(bird1.body)
Matter.Body.setPosition(bird1.body,{x:200,y:50})
}


}