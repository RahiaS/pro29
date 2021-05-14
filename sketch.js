const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14;
var box15,box16,box17,box18;
var box19,box20;
var box21,box22,box23,box24,box25,box26,box27,box28;
var box29,box30,box31,box32,box33,box34;
var box35,box36,box37,box38;
var box39,box40;
var polygon,polygonImg;
var slingshot;
function preload(){
polygonImg=loadImage("polygon.png")
}


function setup(){
    var canvas = createCanvas(1400,800);
    engine = Engine.create();
    world = engine.world;
    var options={
        density:2.5
    }
    polygon=Bodies.circle(50,450,20,options);
    World.add(world,polygon);

    slingshot= new SlingShot(this.polygon,{x:100,y:200})
    
    ground=new Ground(600,height,1600,20);

    stand1=new Stand(550,400,300,10);
    stand2=new Stand(1000,500,300,10);
    //first stack
    box1=new Box(440,235,30,40)
    box2=new Box(470,235,30,40)
    box3=new Box(500,235,30,40)
    box4=new Box(530,235,30,40)
    box5=new Box(560,235,30,40)
    box6=new Box(590,235,30,40)
    box7=new Box(620,235,30,40)
    box8=new Box(650,235,30,40)
    
    //second stack
    box9=new Box(470,225,30,40)
    box10=new Box(500,225,30,40)
    box11=new Box(530,225,30,40)
    box12=new Box(560,225,30,40)
    box13=new Box(590,225,30,40)
    box14=new Box(620,225,30,40)
    //third stack
    box15=new Box(500,215,30,40)
    box16=new Box(530,215,30,40)
    box17=new Box(560,215,30,40)
    box18=new Box(590,215,30,40)
    //fourth stack
    box19=new Box(530,205,30,40)
    box20=new Box(560,205,30,40)

    //first stack on stand2
    box21=new Box(890,235,30,40)
    box22=new Box(920,235,30,40)
    box23=new Box(950,235,30,40)
    box24=new Box(980,235,30,40)
    box25=new Box(1010,235,30,40)
    box26=new Box(1040,235,30,40)
    box27=new Box(1070,235,30,40)
    box28=new Box(1100,235,30,40)
    //second stack on stand2
    box29=new Box(920,225,30,40)
    box30=new Box(950,225,30,40)
    box31=new Box(980,225,30,40)
    box32=new Box(1010,225,30,40)
    box33=new Box(1040,225,30,40)
    box34=new Box(1070,225,30,40)
    //third stack on stand2
    box35=new Box(950,215,30,40)
    box36=new Box(980,215,30,40)
    box37=new Box(1010,215,30,40)
    box38=new Box(1040,215,30,40)
    //fourth stack on stand2
    box39=new Box(980,205,30,40)
    box40=new Box(1010,205,30,40)

    
}

function draw(){
    background(0);
    Engine.update(engine);
    //ellipse(50,200,20)
    imageMode(CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,40,40)
    ground.display();
    stand1.display();
    stand2.display();
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
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
slingshot.fly();
}
