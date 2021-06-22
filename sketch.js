const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){

}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(900,400);
  
  //lowermost layer of bottom pyramid
  box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);

  //1 middle layer of bottom pyramid
  box8 = new Box1(330,235,30,40);
  box9 = new Box1(360,235,30,40);
  box10 = new Box1(390,235,30,40);
  box11 = new Box1(420,235,30,40);
  box12 = new Box1(450,235,30,40);

  //1 middle layer of bottom pyramid
  box13 = new Box2(360,195,30,40);
  box14 = new Box2(390,195,30,40);
  box15 = new Box2(420,195,30,40);

  //topmost layer of bottom pyramid
  box16 = new Box(390,155,30,40);

  //lowermost layer of pyramid
  box17 = new Box(660,145,30,40);
  box18 = new Box(690,145,30,40);
  box19 = new Box(720,145,30,40);
  box20 = new Box(750,145,30,40);
  box21 = new Box(780,145,30,40);

  //middle layer of pyramid
  box22 = new Box1(690,105,30,40);
  box23 = new Box1(720,105,30,40);
  box24 = new Box1(750,105,30,40);

  //topmost layer of pyramid
  box25 = new Box2(720,65,30,40);

  ground1 = new Ground(380,300,300,20);
  ground2 = new Ground(720,170,230,20);
  ground3 = new Ground(700,390,3000,20)


  ball =new Paper(20,20,30);


 Launcher1 = new Launcher(ball.body,{x:100, y:100});
 getbackgroundImg();
  Engine.run(engine);
}

function draw() {
  background("white"); 
 

  Engine.update (engine);
  drawSprites();
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
 ground1.display();
 ground2.display();
 ground3.display();
ball.display();
Launcher1.display();
}
function mouseDragged(){
Matter.Body.setPosition(ball.body,{x : mouseX, y:mouseY});
 }
function mouseReleased(){
Launcher1.fly();
}

 function keyPressed(){
   if(keyCode === 32){
     Launcher1.attach(ball.body);
    }
 }
 
 async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON)

var datetime = responseJSON.datetime;
 console.log(datetime)
  var hour = datetime.slice(11,13);
console.log(hour)
if(hour>=06 && hour<=19){
background("pink")
}
else{
  background("yellow")
}

}