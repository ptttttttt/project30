class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("block.png")
      this.visibility=255
      World.add(world, this.body);
    }
    display(){
     
      var pos= this.body.position;
      push()
      if(this.body.speed<4){
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
      }
      else{
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        this.visibility=this.visibility-5
        tint(255,this.visibility)
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        World.remove(world,this.body)
      }
      
     
      pop()
    }
}