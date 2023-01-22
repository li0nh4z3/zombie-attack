class Zombie {
    constructor() {
        this.x = 0
        this.y = 0
        this.isAlive = true
        this.speed = 0.5
        this.direction = false;
    }

    draw() {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, 20, 20)
    }

    move() {
        this.x += this.speed
        this.y += this.speed
    }

    print() {
        ctx.clearRect(this.x, this.y, this.width, this.height)
        this.move()
        this.draw()
    }
}