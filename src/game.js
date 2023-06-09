var title = "My Balloon Game"
// hoisting is the difference between let and var
let developer = "Nooreen Ali"

const BALLOON_TOTAL = 20

const balloons = []

let score = 0

// balloons.push("A new balloon")
// balloons.push(1)



function greeting() {
    //let gameTitle = title + " - " + "by " + developer;
    let gameTitleText = `${title} - by ${developer}`;

    let gameTitle = document.getElementById("game-title")
    gameTitle.innerHTML = gameTitleText
}

function setup() {
    //creates canvas object and attaches it to specified container
    let canvas = createCanvas(500, 500)
    canvas.parent("game-container")

    for (let i = 0; i < BALLOON_TOTAL; i++) {
        balloons.push(new Balloon(
            random(width),
            random(height),
            33,
            color(random(255), random(255), random(255))))
    }
}

function draw() {
    //a nice sky blue background
    background(135, 206, 235)

    for (let balloon of balloons) {
        balloon.blowAway()
        balloon.checkToPop()
        fill(balloon.col)
        circle(balloon.x, balloon.y, balloon.r)
    }

    if (score == BALLOON_TOTAL) youWin()
}


function youWin() {
    document.getElementById("score").innerHTML = "You win nerd"
}

function reset() {
    score = 0
    document.getElementById("score").innerHTML = 0
    balloons.splice(0, balloons.length)
    setup()
}
