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
let timer;

addTimer = () => {
    let timerElem = document.createElement('div')
    let timerText = document.createTextNode(`${timer}`)
    timerElem.appendChild(timerText)
    let board = document.getElementById('board')
    document.body.insertBefore(timerElem, board)
}

function updateTimer() {
    addTimer()
    setInterval(() => {
        timer++
        console.log(`${timer}`)
    }, 1000)
}


let playButton = document.getElementById('play')

playButton.onclick = () => {
    playButton.style.display = 'none'
    startGame()
    updateTimer()
}


startGame = () => {
    //score.innerHTML = 0
    game = new Game()
    player = new Player()
    zombie = new Zombie()
    timer = 0
    
    //game.zombies[0] = zombie
    game.player = player
    game.player.draw()
    
    //Interval for game
    interval = setInterval(() => {
        updateBoard()
        updateZombies()
      }, 16)
}

drawBoard = () => {
    ctx.fillStyle = 'olive'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    //const boardImg = new Image()
    //boardImg.src = board
    //ctx.drawImage(boardImg, 0, 0, canvas.width, canvas.height)
}

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
    if (timer % 5 === 0) {
        let newZombie = new Zombie()
        game.zombies.push(newZombie)
        console.log('new zombie')
    }
    for (let i = 0; i < game.zombies.length; i++) {
        game.zombies[i].print()

        if (detectCollision(game.zombies[i])) {
            if (game.player.hp > 0) {
                game.player.hp - 1
            } if (game.player.hp === 0) {
                game.over = true
                console.log('GAME OVER')
            }
        }
    }
}

detectCollision = (element) => {
    return !((player.y > element.y + element.height) || 
            (player.x + player.width < element.x) || 
            (player.x - player.width  > element.x + element.width));
}