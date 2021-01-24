const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var turn = 0;
var score = 0;
var count = 0;
var gameState = "start"

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(600,height,1200,20);
  //ground2 = new ground (400,600,300,20)

  //divisions.push(new Divisions(0, height-divisionHeight/2, 10, divisionHeight));
  //console.log(divisions)
  //divisions[2] = new Divisions(80, height-divisionHeight/2, 10, divisionHeight);
  
  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    console.log(divisions)


  }
  
  for(var j = 40; j <= width; j=j+50)
    {
        plinkos.push(new plinko(j,75,10));
    }
        
  for(var j = 15; j <= width-10; j=j+50)
    {
        plinkos.push(new plinko(j,175,10));
    }

    for(var j = 30; j <= width; j=j+50)
    {
        plinkos.push(new plinko(j,275,10));
    }

    for(var j = 0; j <= width-5; j=j+50)
    {
        plinkos.push(new plinko(j,375,10));
    }

    
  
  
}

function draw() {
  background(0);
  Engine.update(engine);
  textSize(20)
  fill("white")
  text("Score: " + score, 10, 45)
  text("500", 20, 500)
  text("500", 110, 500)
  text("100", 180, 500)
  text("100", 260, 500)
  text("100", 340, 500)
  text("100", 430, 500)
  ground1.display();
  
  //divisions[0].display();
  //divisions[2].display();
  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for (var k = 0; k < plinkos.length; k++){
    plinkos[k].display();
  }
  if(frameCount%60===0){
    particles.push(new particle(random(width/2-100, width/2+150), 10, 10))
    
    if (particles[count].body.position.y>760){ 
      if (particles[count].body.position.x < 300)
          {   
            score = score+500;
            if (count>=5) gameState = "end"
            count = count+1;
          }
    }
    if (particles[count].body.position.y>760){ 
      if (particles[count].body.position.x > 301)
          {   
            score = score+100;
            if (count>=5){ 
            gameState = "end"
            textSize(50)
            text("GAME OVER")
            exit()
          }
            count = count+1;
          }
    }
    
    console.log(particles)
  
}


}