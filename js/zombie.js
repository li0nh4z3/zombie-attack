class Zombie {
    constructor() {
        this.x = 0
        this.y = 0
        this.isAlive = true
        this.speedX = 0.5
        this.speedY = -0.5
        this.direction = false;
    }

    draw() {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, 20, 20)
    }

    move() {
        this.x += this.speedX
        this.y -= this.speedY
        //this.x += this.speedX
        //this.y -= this.speedY
    }

    changeDir() {
        if (this.x + this.width >= 850 && this.y + this.height <= 0) {
            this.speedX = -this.speedX
            this.speedY = -this.speedY
        }
        else if (this.x + this.width >= 850 && this.y + this.height >= 550) {
            this.speedX = -this.speedX
        }
        else if (this.x + this.width <= 0 && this.y + this.height >= 550) {
            this.speedY = -this.speedY
        } else {
            this.speedX = this.speedX
            this.speedY = this.speedY
        }
    }

    print() {
        ctx.clearRect(this.x, this.y, this.width, this.height)
        this.changeDir()
        this.move()
        this.draw()
    }
}