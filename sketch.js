var canvas;
var music;
var box;
var ground1,ground2,ground3,ground4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    ground1 = createSprite(700,500,150,20);
    ground1.shapeColor = rgb(26,5,243)
    ground2 = createSprite(500,500,150,20);
    ground2.shapeColor = rgb(234,55,171)
    ground3 = createSprite(300,500,150,20);
    ground3.shapeColor = rgb(98,247,0)
    ground4 = createSprite(100,500,150,20);
    ground4.shapeColor = rgb(246,124,7)

    //create box sprite and give velocity
    box = createSprite(100,400,30,30);
    box.velocityX = 0
    box.velocityY = 0
    
function draw() {
    background(rgb(169,169,169));
        //create edgeSprite     
    
    if(box.isTouching(ground1)){
        box.shapeColor = rgb(26,5,243)
    }
      
    drawSprites();
}
