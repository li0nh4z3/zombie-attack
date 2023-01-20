class Zombie {
    constructor() {
        this.x = 0
        this.y = 0
        this.isAlive = true
        this.speed = 5
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

    clear() {
        ctx.clearRect(this.x, this.y, this.width, this.height)
    }

    update() {
        this.clear()
        this.draw()
    }
}