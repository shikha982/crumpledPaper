class Dustbin
{
	constructor(x,y)
	{
	    var x1 ={
            isStatic:true
		}
		this.x=x;
		this.y=y;
		this.width=200;
		this.height=200;
		this.thickness=10;
		this.image=loadImage("dustbingreen.png");
		this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,x1);
		
		this.leftBody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.height,this.thickness,x1);
		Matter.Body.setAngle(this.leftBody,this.angle);


		this.rightBody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,x1);
		Matter.Body.setAngle(this.rightBody,-1*this.angle);

		
		World.add(world,this.bottomBody);
		World.add(world,this.leftBody);
		World.add(world,this.rightBody);

	}
	display()
	{
		var posBottom=this.bottomBody.position;
		var posLeft=this.leftBody.position;
		var posRight=this.rightBody.position;
			
			

			push();
			translate(posLeft.x,posLeft.y);
			rectMode(CENTER);
			fill(255);
			rotate(this.angle);
			rect(0,0,this.thickness, this.height);
			pop();

			push();
			translate(posRight.x,posRight.y);
			rectMode(CENTER);
			fill(255);
			rotate(-1*this.angle);
			rect(0,0,this.thickness, this.height);
			pop();

			push();
			translate(posBottom.x,posBottom.y);
			rectMode(CENTER);
			fill(255);
			rect(0,0,this.width, this.thickness);
			imageMode(CENTER);
			image(this.image,0,-this.height/2,this.width,this.height);
			pop();
 
	}
};



			






						
	

