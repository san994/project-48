const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const SAT = Matter.SAT

var engine,world;

var gameState = "story"

var p = []

var pl = []

var button = []

function preload(){
  
}
function setup() {
  createCanvas(1000, 600);
  engine = Engine.create()
   world = engine.world

  
   ground = new Ground(500,500,150,10);

    player1 = new Player(550,150,30,30);
    
    player2 = new Player(460,150,30,30);

  //leftside of ground
     platform1 = new Platform(350,450,100,20);
 
  //rightside of ground
    platform2 = new Platform(650,450,100,20);

  //middle of ground
    platform3 = new LongPlatform(500,350,20,250);
 
  //leftside of middle platform
   platform4 = new Platform(400,350,100,20)
 
  //rightside of middle platform
   platform5 = new Platform(600,350,100,20)

   //leftside and middle of two platform
   platform6 = new Platform(250,400,100,20)

   //rightside and middle of two platform
   platform7 = new Platform(750,400,100,20)
 
   //above the rightside and middle of two platform
   platform8 = new Platform(750,300,100,20)

   //above the leftside and middle of two platform
   platform9 = new Platform(250,300,100,20)
 
   // leftside near mainPlatform
   platform10 = new Platform(400,250,100,20)

   // rightside near mainPlatform
   platform11 = new Platform(600,250,100,20)

  // for next level
  platform12 = new LongPlatform(50,100,20,250)

  //for next level
  platform13 = new Platform(50,100,100,20)

  //for next level
  platform14 = new Platform(50,100,100,20)
 
  mainPlatform = new MainPlatform(500,200,150,20)

  liver1 = new Liver(1500,450)
  liver2 = new Liver(1500,450)

     keyPressed()

}

function draw() {
  background("lightBlue");
 
  Engine.update(engine);

  if(gameState === "story"){

    textSize(20)
    fill("blue")
    text(" BECAUSE OF OUR FAULT BECAUSE OF POLLUTION THE WORLD IS GOING TO END ",100,50)
    text(" ME AND MY SISTER GOT STUCK IN THE EASTERN SIDE OF CITY ",100,100)
    text(" WE GOT THE MESSAGE THAT ALL SURVIVORS ARE GOING TO ANOTHER PLANET",100,150)
    text(" ALL FLOATING PLATFORMS ARE DAMEGED THATS WHY ONLY ONE PERSON CAN STAND ON ONE PLATFORM",100,200)
    text(" THIS IS OUR FINAL CHANCE OF ESCAPE",100,250)

    button = createButton(" START THE GAME ")

    button.position(250,600)

    button.style("height","50px")

    button.style("width","500px")

    button.style("background","pink")

    button.mousePressed(()=>{

      button1 = createButton(" PLAYING ")
      button1.position(250,600)
      button1.style("height","50px")

      button1.style("width","500px")
  
      button1.style("background","pink")

     gameState = "level1"

    })


  }
   if(gameState==="level1"){

  mainPlatform.display()
  mainPlatform.colour = "brown"

  ground.display()
  player1.display()
  player1.colour = "blue"
  player2.display()
  player2.colour = "pink"

   platform1.display()
   platform2.display()
   platform3.display()
   platform4.display()
   platform5.display()
   platform6.display()
   platform7.display()
   platform8.display()
   platform9.display()
   platform10.display()
   platform11.display()

  
  platformCollider()

  textSize(20)
  fill("green")
  text("press a,w,s,d to move blue player",100,550)
  text("press j,i,k,l to move pink player",600,550)

  }
  
  if(gameState === "level2"){

    setPosition(ground,500,500)
    setPosition(mainPlatform,500,200)
   
    //leftside of ground
    setPosition(platform1,350,500)

    //rightside of ground
    setPosition(platform2,650,500)

    //above ths leftside platform of ground
    setPosition(platform5,400,440)

   //above ths rightside platform of ground
    setPosition(platform4,600,440)

   // above the rigthside platforms
    setPosition(platform3,690,350)

  // above the leftside platforms
    setPosition(platform12,300,350)

  //near rightside of right platform
    setPosition(platform6,750,400)

 //near leftside of left platform
    setPosition(platform7,250,400)

  //above the left patform
    setPosition(platform8,250,300)

  //above the right patform
    setPosition(platform9,750,300)

  //between the left platforms
    setPosition(platform10,100,350)

  //between the rigth platforms
    setPosition(platform11,900,350)

  // leftside near mainplatform 
    setPosition(platform13,370,250)

  // rightside near mainplatform 
    setPosition(platform14,620,250)

 

     ground.display()
    mainPlatform.display()

     player1.display()
     player2.display()

     platform1.display()
     platform2.display()
     platform3.display()
     platform4.display()
     platform5.display()
     platform6.display()
     platform7.display()
     platform8.display()
     platform9.display()
     platform10.display()
     platform11.display()
     platform12.display()
     platform13.display()
     platform14.display()

     p.push(platform13,platform14)

    
      platformCollider()

  }

  if(gameState === "level3"){

    setPosition(ground,500,500)
    setPosition(mainPlatform,500,200)

   //leftside of ground
   setPosition(platform1,350,450)

   //rightside of ground
   setPosition(platform2,650,450)

   //middle of ground and mainplatform
   setPosition(platform3,500,350)

   //left most platform
   setPosition(platform4,250,400)

   //right most patform
   setPosition(platform5,760,400)

   //left second most top platform
   setPosition(platform6,150,350)

  //right second most top platform
   setPosition(platform7,850,350)

  //left most top platform
   setPosition(platform8,350,250)

  //right most top platform
   setPosition(platform9,650,250)

   //apear when button is pressed
   setPosition(platform10,250,300)

    //apear when button is pressed
   setPosition(platform11,850,300)

  //not needed
   setPosition(platform12,1500,270)
   setPosition(platform13,1500,270)
   setPosition(platform14,1500,270)
  
    ground.display()
    mainPlatform.display()

    player1.display()
    player2.display()

    platform1.display()
    platform2.display()
    platform3.display()
    platform4.display()
    platform5.display()
    platform6.display()
    platform7.display()
    
    platform8.display()
    platform9.display()
    button1.display()
    button2.display()
    platformCollider()

    textSize(20)
    fill("green")
    text("touch the button to make a platform apear",50,300)

   buttoncollide(button1,platform11,750,300)
   buttoncollide(button2,platform10,250,300)

   platform11.display()
   platform10.display()

  }

  if(gameState ==="level4"){

    setPosition(ground,500,500)
    setPosition(mainPlatform,500,200)

    //leftside of ground
    setPosition(platform1,350,470)

    //rightside of ground
    setPosition(platform2,650,470)
 
     //right midle platform
     setPosition(platform4,550,410)

     //left midle patform
    setPosition(platform5,450,410)
 
    //midle midle platform
    setPosition(platform6,500,390)

    //right side
    setPosition(platform7,750,420)

    //left side
   setPosition(platform8,250,420)

  //rightside near mainplatform
   setPosition(platform9,650,250)

  //right most platform
   setPosition(platform10,750,300)
    
  //leftside near mainPlatform
  setPosition(platform14,350,250)

  //leftside most platform
   setPosition(platform13,250,300)


   setPosition(platform11,850,370)

  
  //outside 
    setPosition(platform3,1500,350)
   setPosition(platform12,1400,250)


   setPosition(liver1,500,370);
   
     ground.display()
     mainPlatform.display()
 
     player1.display()
     player2.display()
 
     platform1.display()
     platform2.display()
   
     platform4.display()
     platform5.display()
     platform6.display()
     platform7.display()
     platform8.display()
     platform9.display()
     platform10.display()
    
     platform13.display()
     platform14.display()
    

     liver1.display()

     liverCollider(liver1,platform11,170,370)

     platform11.display()
    
    ground.display()
    mainPlatform.display()

    platformCollider()

    textSize(20)
    fill("green")
    text(" touch the liver and press p to move platform",300,300)

  }

  if(gameState === "level5"){

    setPosition(ground,500,500)
    setPosition(mainPlatform,500,300)

    //leftside of ground
    setPosition(platform1,350,470)

    //rightside of ground
    setPosition(platform2,650,470)
 
     // most right platform
     setPosition(platform4,800,410)

     // most left patform
    setPosition(platform5,200,410)
 
    //rightside of mainplatform
    setPosition(platform6,900,350)

    //leftside of mainplatform
    setPosition(platform7,100,350)

    //outside 
   setPosition(platform8,3000,420)
   setPosition(platform9,3000,250)
   setPosition(platform10,3000,300)
  setPosition(platform14,3000,250)
   setPosition(platform13,3000,300)
    setPosition(platform3,3000,350)
   setPosition(platform12,3000,250)
   setPosition(platform11,3000,250)


   setPosition(liver1,830,380);
   setPosition(liver2,200,380);
   
     ground.display()
     mainPlatform.display()
 
     player1.display()
     player2.display()
 
     platform1.display()
     platform2.display()
     platform4.display()
     platform5.display()
     liver1.display()
     liver2.display()

     liverCollider(liver1,platform6,650,350)

     liverCollider(liver2,platform7,300,350)

     platform6.display()
     platform7.display()
    ground.display()
    mainPlatform.display()

    platformCollider()


  }

  if(gameState === "level6"){

  textSize(25)
  fill("pink")
  text(" FINAL UPDATE COMING SOON",100,300)

  }

} 

function setPosition(body1,x,y){

Matter.Body.setPosition(body1.body,{x:x,y:y})

}

function keyPressed(){


     if(keyCode === 68){
 
       Matter.Body.applyForce(player1.body,player1.body.position,{x:10,y:0})

     }


    if(keyCode === 65){

      Matter.Body.applyForce(player1.body,player1.body.position,{x:-10,y:0})

    }

    if(keyCode === 87){
 
      Matter.Body.applyForce(player1.body,player1.body.position,{x:0,y:-15})

    }

    if(keyCode === 83){
 
      Matter.Body.applyForce(player1.body,player1.body.position,{x:0,y:7})

    }


 //for player 2
    if(keyCode === 74){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:-10,y:0})

    }

  

    if(keyCode === 76){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:10,y:0})

    }

    if(keyCode === 73){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:0,y:-15})

    }

    if(keyCode === 75){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:0,y:7})

    }

}

function isTouching(object1,object2){

  if((object1.body.position.x-object2.body.position.x) <= (object2.width/2 + object1.width/2)
  &&(object2.body.position.x-object1.body.position.x) <= (object2.width/2 + object1.width/2)
  &&(object1.body.position.y-object2.body.position.y) <= (object2.height/2 + object1.height/2)
  &&(object2.body.position.y-object1.body.position.y) <= (object2.height/2 + object1.height/2)){
 
    return true
 
  }else{
 
    return false
 
  }
 
 }


function platformFall(pl){

if(isTouching(player,pl)){

 Matter.Body.setStatic(pl.body,false)

}

}


 function platformCollider(){

  p.push(platform1,platform2,platform4,platform5,platform6,platform7,platform8,platform9,platform10,platform11)
   
  for(var pf = 0;pf<p.length;pf++){

  if(p[pf].colour === "blue" && isTouching(player2,p[pf])){
  
    World.remove(world,p[pf].body)
  
  }else if(p[pf].colour === "red" && isTouching(player2,p[pf])){
  
    p[pf].colour = "pink"
   p[pf].image = loadImage('images/pinkPlatformImg.png')
  
  }else if(p[pf].colour === "pink" && isTouching(player2,p[pf]) && World.remove(world,p[pf].body) ){

    World.add(world,p[pf].body)

   }
  
  if(p[pf].colour === "pink" && isTouching(player1,p[pf])){
  
   World.remove(world,p[pf].body)
  
  }else if(p[pf].colour === "red" && isTouching(player1,p[pf])){
  
    p[pf].colour = "blue"
    p[pf].image = loadImage('images/bluePlatformImg.png')
     
  }else if(p[pf].colour === "blue" && isTouching(player1,p[pf]) &&  World.remove(world,p[pf].body) ){

    World.add(world,p[pf].body)

   }

   pl.push(platform3,platform12);

   for(var l=0;l<pl.length;l++){

    if(pl[l].colour === "blue" && isTouching(player2,pl[l])){
  
      World.remove(world,pl[l].body)
    
    }else if(pl[l].colour === "red" && isTouching(player2,pl[l])){
    
     pl[l].colour = "pink"
     pl[l].image = loadImage('images/longPinkPlatform.png')
    
    }else if(pl[l].colour === "pink" && isTouching(player2,pl[l]) && World.remove(world,pl[l].body) ){
  
      World.add(world,pl[l].body)
  
     }
    
    if(pl[l].colour === "pink" && isTouching(player1,pl[l])){
    
     World.remove(world,pl[l].body)
    
    }else if(pl[l].colour === "red" && isTouching(player1,pl[l])){
    
      pl[l].colour = "blue"
      pl[l].image = loadImage('images/longBluePlatform.png')
       
    }else if(pl[pf].colour === "blue" && isTouching(player1,pl[l]) &&  World.remove(world,pl[l].body) ){
  
      World.add(world,pl[l].body)
  
     }
  

   }

  
//mainplatform 
   if(mainPlatform.colour === "brown" && isTouching(player2,mainPlatform) && isTouching(player1,mainPlatform)){
  
    mainPlatform.colour = "green"

    gameState = "level2"

    if(gameState === "level2"){

       setPosition(player1,480,450)
       setPosition(player2,550,450)

    for(var pcolour = 0;pcolour<p.length;pcolour++){

       p[pcolour].colour = "red"

    }
  }
   }
  
    if(mainPlatform.colour === "green" && isTouching(player2,mainPlatform) && isTouching(player1,mainPlatform)){
  
      gameState = "level3"
      mainPlatform.colour = "red"

      if(gameState === "level3"){

        button1 = new Button(120,330)

        button2 = new Button(650,230)

        setPosition(player1,480,450)
        setPosition(player2,550,450)

        for(var pc = 0;pc<p.length;pc++){

          p[pc].colour = "red"
   
       }

      }
  
  }

  if(mainPlatform.colour === "red" && isTouching(player2,mainPlatform) && isTouching(player1,mainPlatform)){
  
    mainPlatform.colour = "pink"

    gameState = "level4"
    
if(gameState === "level4"){

  setPosition(player1,480,450)
  setPosition(player2,550,450)
 
    for(var pcc = 0;pcc<p.length;pcc++){

      p[pcc].colour = "red"

   }

  }

}

if(mainPlatform.colour === "pink" && isTouching(player2,mainPlatform) && isTouching(player1,mainPlatform)){
  
   gameState = "level5"

   mainPlatform.colour = "yellow"

  if(gameState === "level5"){

    setPosition(player1,480,450)
    setPosition(player2,550,450)

  }

  for(var pccc = 0;pccc<p.length;pccc++){

    p[pccc].colour = "red"

 }

}
  }
 
  

  if(mainPlatform.colour === "yellow" && isTouching(player2,mainPlatform) && isTouching(player1,mainPlatform)){
  
    gameState = "level6"

   if(gameState === "level6"){
 
     setPosition(player1,480,450)
     setPosition(player2,550,450)
 
   }

 
 }
   }
  
   

function buttoncollide(button,platform,x,y){

  if(isTouching(button,player1) || isTouching(button,player2)){

    button.colour = "blue"

    setPosition(platform,x,y)

  }else{

    button.colour = "green"

    setPosition(platform,1500,10)

  }

}

function liverCollider(liver,platform,x,y){

  if(isTouching(liver,player1) || isTouching(liver,player2)){
    if(keyCode === 80){

     liver.colour = "pink"

    }

  }

  if(liver.colour === "pink"){

     setPosition(platform,x,y)

  }

}
 