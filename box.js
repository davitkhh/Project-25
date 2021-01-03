class Box {
    constructor(x, y, width, height, strk = 255, fll = [125]){
      this.strk = strk;
      this.fll = fll;
  
      
      var options = {
        friction: 0.3,
        restitution: 0.6
     }
   this.body = Bodies.rectangle(x, y, width, height, options);
   this.width = width;
    this.height = height;  
    World.add(world, this.body);
    }
     
  get left() {
      return this.body.position.x;
  }
  
    display () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        //strokeWeight(15);    
        stroke(this.strk);  
        fill(this.fll);
        rect(0, 0, this.width, this.height);
        pop();
    }
  
  }
  