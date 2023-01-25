class Player {
    constructor() {
        this.x = 425
        this.y = 225
        this.width = 50
        this.height = 80;
        this.hp = 3;
        this.weapon1 = false;
        this.weapon2 = false;
        this.speed = 10

        //const img = new Image()
        //img.onload = () => {
        //    this.img = img
        //    this.draw()
        //}
        //img.src = 'img/player-fw1.png'
    }

    draw() {
        ctx.fillStyle = 'gold'
        ctx.fillRect(this.x, this.y, this.width, this.height)
        //ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    movePlayer(keyCode){
        ctx.clearRect(this.x, this.y, this.width, this.height);
        this.draw()
        switch(keyCode){
            case 37:
            //Making sure player doesn't go off the board
                if(this.x > 10){
                    this.x -= this.speed;
                }
                break;
            case 39:
                if (this.x < 790 ){
                    this.x += this.speed;
                }
                break;
            case 38:
                if(this.y > 10){
                    this.y -= this.speed;
                }
                break;
            case 40:
                if (this.y < 460 ){
                    this.y += this.speed;
                }
                break;
        }
            /*
            case 37 + 38:
            //Diagonals
                if(this.x > 10){
                    this.x -= this.speed;
                }
                if(this.y > 10){
                    this.y -= this.speed;
                }
                break;
            case 39 + 38:
                if (this.x < 790 ){
                    this.x += this.speed;
                }
                if(this.y > 10){
                    this.y -= this.speed;
                }
                break;
            case 37 + 40:
                if(this.x > 10){
                    this.x -= this.speed;
                }
                if (this.y < 460 ){
                    this.y += this.speed;
                }
                break;
            case 39 + 40:
                if (this.x < 790 ){
                    this.x += this.speed;
                }
                if (this.y < 460 ){
                    this.y += this.speed;
                }
                break;
            }
            */
    }

    clear() {
        ctx.clearRect(this.x, this.y, this.width, this.height)
    }

}