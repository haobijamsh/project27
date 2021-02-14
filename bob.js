class Bob{
    constructor(x,y){
        var options={
            restitution:1,
            friction:0.8,
            density:0.8
        }
        this.body=Bodies.circle(x,y,30,options);
        World.add(world,this.body);
    }
    display(){
        stroke("cyan");
        fill("red");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,30,30);
    }
}