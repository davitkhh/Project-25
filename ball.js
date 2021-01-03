class Ball {
    constructor(x, y, img) {
        var options = {
            isStatic: false,
            restitution: 0.6,
            friction: 0.5,
            density: 0.2,
            }
        
        this.image = loadImage(img);

        this.jumping = false;
        this.body = Bodies.circle(x, y, 25, options);
        // this.body = Bodies.rectangle(x, y, 25, 25, options);

        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    
    }

    display() {
        //console.log('displaying the ball');
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill('white');
        // ellipse(0, 0, this.width, this.height);

        image(this.image, 0, 0, this.width + 22, this.height + 22);

        pop();
    }

    jump() {
        if (!this.jumping) {
            //console.log();
            this.jumping = true;
            Matter.Body.applyForce(this.body, this.body.position, {x: 12, y: -21});

        }
    }
}