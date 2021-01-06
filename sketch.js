const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var dustbinObj1, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
//	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj1=new Dustbin(1200,650);
	//dustbinObj1=new Dustbin(1300,665,170,20);
	//dustbinObj2=new Dustbin(1209,615,20,120);
	//dustbinObj3=new Dustbin(1395,615,20,120);
	paperObject=new paper(200,450,60);
	groundObject=new ground(width/2,660,width,20);


	Engine.run(engine);
	

  
}



function draw() {
  //rectMode(CENTER);
  background("Lightskyblue");
  Engine.update(engine);
  groundObject.display();
  dustbinObj1.display();
 // dustbinObj2.display();
  //dustbinObj3.display();
  paperObject.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-65});
    
  	}
}

 


  
  
 


