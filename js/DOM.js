const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 850 // Canvas dimensions
canvas.height = 550

window.onload = function () {
	// Append canvas
	document.getElementById("board").appendChild(canvas)
    drawBoard()
}

//let score = document.querySelector('#score input')
let interval, player, game, zombie, score, bestScore;
let timer = 0;

addTimer = () => {
    let timerElem = document.createElement('div')
    let timerText = document.createTextNode(`${timer}`)
    timerElem.appendChild(timerText)
    let board = document.getElementById('board')
    document.body.insertBefore(timerElem, board)
}

let playButton = document.getElementById('play')

playButton.onclick = () => {
    playButton.style.display = 'none'
    startGame()
    updateTimer()
}

//Interval for time
updateTimer = () => {
    addTimer()
    setInterval(() => {
        timer++
        console.log(`${timer}`)
        if (timer % 5 === 0 & game.zombies.length < 3) {
            game.zombies.push(new Zombie())
            console.log(game.zombies)
        }
    }, 1000)
}

startGame = () => {
    //score.innerHTML = 0
    game = new Game()
    
    player = new Player()
    game.player = player
    game.player.draw()

    zombie = new Zombie()
    game.zombies.push(zombie)
    
    //Interval for game
    interval = setInterval(() => {
        updateBoard()
        updateZombies()
    }, 16)

    if (game.over = true) {
        //gameOver()
    }
}

//Background
drawBoard = () => {
    ctx.fillStyle = 'olive'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    //const boardImg = new Image()
    //boardImg.src = board
    //ctx.drawImage(boardImg, 0, 0, canvas.width, canvas.height)
}

//Player moves
document.onkeydown = (e) => {
    let whereToGo = e.keyCode;
    game.player.movePlayer(whereToGo);
}

updateBoard = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBoard()
    game.player.movePlayer()
}


updateZombies = () => {
    
    for (let i = 0; i < game.zombies.length; i++) {
        let z = game.zombies[i]
            /*
            if (z.isAlive = true) {
                if (z.x + z.width < 0) {
                    z.x += z.speedX
                }
                if (z.x + z.width > 850) {
                    z.x -= z.speedX
                }
                if (z.y + z.height < 0) {
                    z.y -= z.speedY
                }
                if (z.y + z.height < 550) {
                    z.y += z.speedY
                }
                
        }
        */
        z.print()
        
        
        if (detectCollision(game.zombies[i])) {
            game.player.hp -= 1
            
            if (game.player.hp === 0) {
                game.player.hp = 0
                gameOver()
                console.log('GAME OVER')
            }          
        }

    }
    
}

//Zombie Collision
detectCollision = (element) => {
    //for (let i = 0; i < zombies.length; i++)
    return ((game.player.y >= element.y + element.height) || (game.player.x + game.player.width <= element.x) || (game.player.x - game.player.width  >= element.x + element.width));
}

gameOver = () => {
    game.player.clear()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    clearInterval(interval)
    clearInterval(updateTimer)
    game.zombies = []
}