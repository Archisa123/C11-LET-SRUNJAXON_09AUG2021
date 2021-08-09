var boyImg, track, pathImg, endImg, boy;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,600);
  //create sprites here;
  track = createSprite(200, 200);
  track.addImage(pathImg);
  track.velocityY = 4;
  track.scale = 1.2;

  boy = createSprite(70,580,20,20);
  boy.addAnimation("SahilRunning",boyImg);
  boy.scale=0.05;
}

function draw() {
  background(0);

  if(track.y > 400 ){
    track.y = height/2;
  }

  boy.x = World.mouseX;
  edges= createEdgeSprites();
  boy.collide(edges);

  drawSprites();

}
