class Basket {
    constructor(bx = 0, by = 0, img) {
        this.image = loadImage(img);
        this.basket_bottom = new Box(400 + bx, 630 + by, 200, 20, [0, 0, 0], [0, 2, 127]);
        Body.setStatic(this.basket_bottom.body, true);

        this.basket_left = new Box(290 + bx, 518 + by, 20, 220, [0, 0, 0], [0, 2, 127]);
        Body.setStatic(this.basket_left.body, true);

        this.basket_right = new Box(510 + bx, 518 + by, 20, 220, [0, 0,0], [0, 2, 127]);
        Body.setStatic(this.basket_right.body, true);
    }

    display () {
        image(this.image, 490, 410, 260, 240);
        // this.basket_bottom.display();
        // this.basket_left.display();
        // this.basket_right.display();
    }
}