const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 850 // Canvas dimensions
canvas.height = 550

window.onload = function () {
	// Append canvas
	document.getElementById("board").appendChild(canvas)
    drawBoard()
}

let interval;
let zombieArr = []
let player = new Player()
let playButton = document.getElementById('play')

playButton.onclick = () => {
    startGame()
}

startGame = () => {
    player.draw()
    interval = setInterval(() => {
        let zombie = new Zombie()
        zombieArr.push(zombie)
        zombieArr.forEach(e => {
            zombie.update()
            zombie.move()
        })
    }, 1000)
}

drawBoard = () => {
    ctx.fillStyle = 'olive'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}