class Ground {
    constructor(x, y, width, height) {
        var options = {
            'isStatic': true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(1);
        rectMode(CENTER);
        stroke(255);
        fill('grey');
        rect(0, 0, this.width, this.height);
        //image(this.image, 0, 0, this.width, this.height);
        //this.shapeColor = 'white'
        pop();
    }
}