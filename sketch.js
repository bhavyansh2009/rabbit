var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,orangeLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  orangeLeafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

// apple falling
 function createapples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.scale=0.01;
  apple.addImage(appleImg);
}



  //creating boy running
 function createrabbit(){
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  }
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.Collide(edges);
  rabbit.x = World.mouseX;

  drawSprites();

  var select_sprites=Math.round(random(1,2));
  if(frameCount%80==0){
    if(select_sprites==0){
      createApple()
    }
       else{
         createleaf()
       }

  }
}