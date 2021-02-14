class Rope{
    constructor(body1,body2,offsetX){
        var options={
            bodyA: body1,
            bodyB: body2,
            pointB:{x:offsetX,y:0}   
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
        this.pointB=offsetX;
    }
    display(){
        var point1= this.rope.bodyA.position;
        var point2= this.rope.bodyB.position;
        strokeWeight(5);
        stroke("blue");
        line(point1.x,point1.y,point2.x+this.pointB,point2.y)
    }
}