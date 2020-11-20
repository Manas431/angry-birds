class Bird  extends Baseclass{
    constructor(x, y) {
     super(x,y,50,50)
   this.image=loadImage("bird.png")
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseY
      pos.x=mouseX
     super.display()
    }
  };
  