class rope{
    constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,    //bob
			bodyB:body2,       // roof
			pointB:{x:this.offsetX, y:this.offsetY}   // POINT ON THE ROOF
		}
		//console.log(options);
		this.rope=Constraint.create(options);
		World.add(world,this.rope);
	}
            
    display(){
        var point1=this.rope.body1.position;
		var point2=this.rope.body2.position;

        fill("black");
    
        strokeWeight(2);

        var roofx= point2.x+this.offsetX;
        var roofy= point2.y+this.offsetY;

        line(point1.x,point1.y,roofx,roofy);
       
    }
}
  

