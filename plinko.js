/*class plinko
{

    constructor(x,y,r)
    {
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x, y, r/2, options)
        this.x=y;
        this.y=y;
        this.r=r
        World.add(world, this.body);
    }

    display()
    {
        var plinkopos=this.body.position;

        push()
        translate(plinkopos.x, plinkopos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255)
        ellipse(0,0,this.r,this.r);
        pop()

        for(var j = 40; j <= width; j=j+50)
        {
            plinkos.push(new plinko (j,75));
        }
        
        for(var j = 15; j <= width-10; j=j+50)
        {
            plinkos.push(new plinko (j,175));
        }
    }
}*/

class plinko
{

    constructor(x,y,r)
    {
        var options={
            restitution:0.4,
            isStatic: true
        }
        this.r=r
        this.body=Bodies.circle(x, y, this.r, options);
        World.add (world, this.body);
    
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate (pos.x, pos.y);
        rotate (angle);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0, this.r, this.r);
        pop();
        
    }
}