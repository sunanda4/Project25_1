class Paper{
constructor(x,y,radius)
{
var options={
restitution:0.3,density:1.2
}
this.x=x;
		this.y=y;
		this.radius=radius;
		this.body=Bodies.circle(x, y,radius, options);
        this.image=loadImage("paper.png")

 		World.add(world, this.body);

	}
	display()
	{
			
			var PaperPos=this.body.position;		

			push()
			translate(PaperPos.x, PaperPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.radius, this.radius);	
            pop()
			
	}

}

