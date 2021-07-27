var iss;
var spacebg, spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var bg,bgImg;
var hasDocked=false;


function preload(){
  issImg=loadImage("Docking-undocking/iss.png");
  spacebgImg=loadImage("Docking-undocking/spacebg.jpg");
  spacecraft1Img=loadImage("Docking-undocking/spacecraft1.png");
  spacecraft2Img=loadImage("Docking-undocking/spacecraft2.png");
  spacecraft3Img=loadImage("Docking-undocking/spacecraft3.png");
  spacecraft4Img=loadImage("Docking-undocking/spacecraft4.png");


}
function setup() {
  createCanvas(800,400);
  iss=createSprite(200,100,25,25);
  iss.addImage(issImg);
  iss.scale=0.3;
  
  spacecraft=createSprite(285,240);
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale=0.2;
}
 
function draw() {
  background(0);  
  if(!hasDocked){
    spacecraft.x=spacecraft.x + random(-1,1);
  }
  if(keyIsDown(LEFT_ARROW)){
    spacecraft.x=spacecraft.x - 1;
    spacecraft.addImage(spacecraft3Img);
  }
  if(keyIsDown(RIGHT_ARROW)){
    spacecraft.x=spacecraft.x+1;
    spacecraft.addImage(spacecraft2Img);
  }
  if(keyIsDown(UP_ARROW)){
    spacecraft.y=spacecraft.y-2;
  }
  if(keyIsDown(DOWN_ARROW)){
    spacecraft.addImage(spacecraft1Img);
  }
  if(spacecraft.y<=(iss.y+70) && spacecraft.x<=(iss.x-10)){
    hasDocked=true;
    textSize(25);
    text("Docking Successful!",200,300);

  }
  

  drawSprites();
}