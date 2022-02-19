var box;

function setup() 
{
  //createcanvas  is helping us in creating a canvas with length of 500 and breath of 500
  createCanvas(500,500);
 // X,Y,width ,height 
  box = createSprite(200,200,30,30);

}

function draw() 
{
   background(0);

 
if ( keyIsDown(RIGHT_ARROW)){
box.position.x += 5
}
if (keyIsDown(LEFT_ARROW)){
  box.position.x -= 5
}
if (keyIsDown(UP_ARROW)){
  box.position.y -= 5
}
if (keyIsDown(DOWN_ARROW)){
  box.position.y += 5
}

// displaying the sprites
drawSprites();

}




