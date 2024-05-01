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

}



