 var tom1; 
 var jerry, jerrysgroup;
 var dog, dogsgroup;
 var path,pathImg;        
 var bg;

 function preload(){
 tomImg = loadImage("tom.png");
 jerry = loadImage("jerry.png");
 dog = loadImage("dog.png");
 //path = loadImage("path.jpg");
 bgImg = loadImage("path.jpg");
}

function setup() {
 createCanvas(1200,300)

bg = createSprite(1200,200);
bg.addImage(bgImg);
bg.velocityX = -10;

 //create tomSprites
 tom1 = createSprite(150,150,20,50);
tom1.addImage(tomImg);
tom1.scale = 0.2;


}
function draw() {
background(path);

drawSprites();
}
