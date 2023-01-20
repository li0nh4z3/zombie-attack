class Player {
    constructor() {
        this.x = 0
        this.y = 0
        this.hp = 30;
        this.weapon1 = false;
        this.weapon2 = false;
        this.speed = 20
    }

    draw() {
        ctx.fillStyle = 'yellow'
        ctx.fillRect(405, 235, 40, 60)
    }

    keys() {

    }
}