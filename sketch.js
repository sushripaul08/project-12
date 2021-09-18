var ship,sea;
var  shipImage,seaImage;
 var s1,s2,s3,s4;
function preload(){
s1=loadImage("ship-1.png");
seaImage=loadImage("sea.png");
s2=loadImage("ship-2.png");
s3=loadImage("ship-3.png");
s4=loadImage("ship-4.png");
}

function setup(){
  createCanvas(400,400);
ship = createSprite(200,200,100,50)
  ship.addImage(shipImage); 
ship.scale=0.5;
sea = createSprite(200,200,400,400)
sea. addImage(seaImage);
ship.x= 50;
}

function draw() {
  background("blue");
 if (sea.x<0)
sea.x=sea.width/2;
drawSprite();

}
