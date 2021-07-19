class Platform{

    constructor(x,y,width,height){
  
      var options={
  
         isStatic : true,

         density  : 1,

         friction : 0.01

      
      }
   
      this.image = loadImage("images/platformImg.png")
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width
      this.height = height
      this.colour = "red"
      World.add(world,this.body)
  
    }
  
   display(){
  
      var pos = this.body.position
  
      push()
      rectMode(CENTER)
      imageMode(CENTER)
      fill(this.colour)
     // rect(pos.x,pos.y,this.width,this.height);
      image(this.image,pos.x+2,pos.y+15,this.width+50,this.height+150)
      pop()
  
   }
  
  
  }