var Original_Bob;
var Bob,Bob2,Bob3;
var Bob_slides,Bob_jumps;
var Bob_shield,Bob_rocket;
var wall1,wall2;
var rocket,shield;
var Base,base_false,Base_broken;
var clouds;
var autoestima,bob_standing;
var kevin,Kevin;
var bob_kick;
var fondo;
var gamestate=0;
var ob1,ob2,ob3;
var OBS;
var A, B;
var Bluegroup, Purplegroup;
var score=0

function preload()
{
Bob=loadAnimation("Stickman_1.png","Stickman_1.5.png","Stickman_2.png");
clouds=loadImage("storm-clouds-from-above.jpg");
ob1=loadImage("Base_1.png");
ob2=loadImage("False_base.png");
ob3=loadImage("Base_Broken.png");
Bob_jumps=loadAnimation("Jumping.png");
Bob_slides=loadAnimation("Sliding.png");
Kevin=loadImage("DRagon.png");
}




function setup()
{  
createCanvas(1200,800);
console.log(windowWidth)
fondo=createSprite(600,400,2400,1600);
fondo.scale=2
Original_Bob=createSprite(200,50,10,50);
Original_Bob.addAnimation("Running",Bob);
Original_Bob.scale=.1;
kevin=createSprite(150,350,20,500);
kevin.scale=.5
fondo.addImage(clouds);
Original_Bob.addAnimation("Jump",Bob_jumps);
A=createSprite(400,300,500,10);
B=createSprite(400,580,1200,20);
B.visible=false;
Original_Bob.addAnimation("Slides",Bob_slides);
Bluegroup=new Group();
Purplegroup=new Group();
Original_Bob.debug=true;
//Original_Bob.setCollider("circle",0,0,100);
kevin.addImage(Kevin);
}



function draw()
{
  background("black");
fondo.velocityX=-3;

if(fondo.x<300)
{
    fondo.x=600;
}

Bases();



if(keyDown("up"))
{
Original_Bob.velocityY=-10;
Original_Bob.changeAnimation("Jump",Bob_jumps);
}

if(keyDown("right"))
{
Original_Bob.x+=5
Original_Bob.changeAnimation("Running",Bob);
}

if(keyDown("left"))
{
Original_Bob.x-=5
Original_Bob.changeAnimation("Slides",Bob_slides);
}


Original_Bob.velocityY=Original_Bob.velocityY+1;

Original_Bob.collide(A);
//Original_Bob.collide()

A.velocityX=-3;

score=score+Math.round(getFrameRate()/60);

if(Purplegroup.isTouching(Original_Bob))
 {
Original_Bob.velocityY=0
//Purplegroup.destroyEach();
Purplegroup.collide(Original_Bob);
//Purplegroup.setLifetimeEach=800;
 }

drawSprites();

textSize(30);
text("score:"+score, 950, 50);


}

/*if(keyDown("space"))//&&T_rex.y>=330)
{
Original_Bob.velocityY=-20;
Original_Bob.changeAnimation("Jumping",Bob_jumps);
}*/

//Original_Bob.velocityY=Original_Bob.velocityY+1;//La gravedad



function Bases()
{
    if(frameCount%80==0){
OBS=createSprite(700,200,200,10);
//OBS.setCollider("rectangle",0,0,50,5);
OBS.debug=true
OBS.scale=.1
OBS.velocityX=-2;
//Original_Bob.collide(OBS);
OBS.y=Math.round(random(300,400));  
var rand=Math.round(random(1,2));  
Purplegroup.add(OBS);
Purplegroup.setLifetimeEach=800;
  switch(rand)
  {
case 1:OBS.addImage(ob1);
break;
case 2:OBS.addImage(ob2);
break;
default:break;
  }
}


 }