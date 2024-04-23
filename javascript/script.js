window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");

    let newGame = null;

    startButton.addEventListener("click", function () {
        startGame();
    });

    restartButton.addEventListener("click", function () {
        startGame();
    })

    function startGame() {
        console.log("start game");
        newGame = new Game()
        newGame.start()
    }

    //const imgsArray = ["../images/—Pngtree—egg custard tart dimsum yumcha_7456513.png", "../images/kindpng_1592918.png", "../images/pngegg.png"]

}