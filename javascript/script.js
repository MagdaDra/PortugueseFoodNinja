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

/*     document.querySelectorAll('.foodDiv').forEach((movingFood) => {
        movingFood.addEventListener('click', () => {
            movingFood.remove();
            game.food.splice(game.food.indexOf(movingFood), 1);
            game.score += 10;
            let scoreDisplayed = document.getElementById("score");
            scoreDisplayed.innerHTML = game.score;
         })
    }) */
}