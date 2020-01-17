// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 650;
document.body.appendChild(canvas);

var timer = 0;
var isCaught = false;
var speed = 10;

// Background image
var bgReady = false;
var bgImage = new Image();

bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "img/background.PNG";

// Monster image
var monsterReady = false;
var monsterImage = new Image();

monsterImage.onload = function () {
    monsterReady = true;
};
monsterImage.src = "img/monster.PNG";

// Game objects
var monster = {};
var monstersCaught = 0;

// Reset the game when the player catches a monster
var reset = function () {
	// Throw the monster somewhere on the screen randomly
	monster.x = 100 + (Math.random() * (canvas.width - 200));
    monster.y = 100 + (Math.random() * (canvas.height - 200));
};

// Speed up when click event occurs
window.addEventListener("click", onClick, false);
function onClick(e) {
    if (e.button != 0) return;
    mouseXinCanvas = e.clientX;
    mouseYinCanvas = e.clientY;

    if (touchMonster(monster, mouseXinCanvas, mouseYinCanvas)) {
        isCaught = true;
        clearInterval(timer);
        timer = setInterval(reset, 20000 / speed);
        reset();
    }
    if (ResetScore(mouseXinCanvas, mouseYinCanvas)) {
        location.reload();
    }
    if (ResetSpeed(mouseXinCanvas, mouseYinCanvas)) {
        clearInterval(timer);
        timer = setInterval(reset, 20000 / speed);
        reset();
        render();
    }
};

// Check if user clicks monster
function touchMonster(monster, x, y) {

    if (x <= (monster.x + 80)
        && monster.x <= (x + 80)
        && y <= (monster.y + 80)
        && monster.y <= (y + 80)
    ) {
        speed = speed + 0.5;
        monstersCaught++;
        return true;
    }
    return false;
};

// Reset Score button
function ResetScore(x, y) {
    if (x > (585)
        && x < (790)
        && y > (15)
        && y < (85)
    ) {
        return true;
    }
    return false;
};

// Reset Speed button
function ResetSpeed(x, y) {
    if (x > (805)
        && x < (1010)
        && y > (15)
        && y < (85)
    ) {
        speed = 10;
        return true;
    }
    return false;
};

// Draw everything
var render = function () {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 100);
    }
    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }
    if (isCaught == true) {
        if (bgReady) {
            ctx.drawImage(bgImage, 0, 100);
        }
        isCaught = false;
    }

    // Put title and score
    ctx.fillStyle = "rgb(250, 130, 200)";
    ctx.font = "45px Impact";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Psyduck Smasher", 10, 35);
    ctx.font = "24px Helvetica";
    ctx.fillText("Score: " + monstersCaught, 15, 115);

    // Put reset score and reset speed
    ctx.fillStyle = "rgb(30, 168, 99)";
    ctx.fillRect(580, 25, 200, 60);
    ctx.fillRect(800, 25, 200, 60);
    ctx.fillStyle = "rgb(30, 168, 99)";
    ctx.fillRect(580, 25, 200, 60);
    ctx.fillRect(800, 25, 200, 60);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.font = "22px Arial";
    ctx.fillText("Reset Score", 620, 45);
    ctx.fillText("Reset Speed", 840, 45);
};

// The main game loop
var main = function () {
    render();
    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
reset();
main();