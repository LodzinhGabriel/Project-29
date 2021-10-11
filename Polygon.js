class Polygon {
    constructor(x, y) {
        this.body = Bodies.circle(x, y, 20);
        World.add(world, this.body);

        this.polygon_img = loadImage("polygon.png")
    }
    display() {
        var pos = this.body.position
        imageMode(CENTER);
        image(this.polygon_img, pos.x, pos.y, 40, 40);
    }
}