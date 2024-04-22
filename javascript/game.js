class Game {
    constructor(){
        this.startScreen = document.getElementById("game-intro")
        this.gameScreen = document.getElementById("game-screen")
        this.gameEndScreen = document.getElementById("game-end")
        this.height = 600;
        this.width = 600;
        this.food = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
        this.gameIntervalId = null;
        this.gameLoopFrequency = Math.floor(1000/60)
    }

    start(){
        this.gameScreen.style.width = `${this.width}px`
        this.gameScreen.style.height = `${this.height}px`

        //remove the startScreen from the page
        this.startScreen.style.display = "none"

        //show the gameScreen 
        this.gameScreen.style.display = "block"

        //remove the endScreen from the page
        this.gameEndScreen.style.display = "none"

        //display lives = 3
        let livesDisplayed = document.getElementById("lives");
        livesDisplayed.innerHTML = this.lives;


        //start the loop
        this.gameIntervalId = setInterval(() => {
            this.gameLoop()
        }, this.gameLoopFrequency)
        
        //add the click here?
/*         window.onload = function () {
            document.querySelectorAll('.foodDiv').forEach((movingFood) => {
                movingFood.addEventListener('click', () => {
                    //movingFood.remove();
                    //this.food.splice(game.food.indexOf(movingFood), 1);
                    this.score += 10;
                    let scoreDisplayed = document.getElementById("score");
                    scoreDisplayed.innerHTML = this.score;
                 })
            })
        } */

    }

    gameLoop(){
        this.update()
        if(this.gameIsOver){
            clearInterval(this.gameIntervalId)
        }
    }

    update(){

        if(Math.random() > 0.98 && this.food.length < 1) { //remove "&& this.food.length < 1" for more obstacles to appear or increase the number
            this.food.push(new Food(this.gameScreen)) 
        }


        for(let i = 0; i < this.food.length; i++){
            const foodItem = this.food[i]

            foodItem.move()


            if (foodItem.top < -50) {

                foodItem.element.remove();
                this.food.splice(i, 1);
                this.lives--;
                if (this.lives === 0) {
                    this.endGame();
                    let messageDisplayed = document.getElementById("game-end-message");
                    messageDisplayed.innerHTML = "You lost!";
                    let livesDisplayed = document.getElementById("lives");
                    livesDisplayed.innerHTML = this.lives;
                } else {
                    let livesDisplayed = document.getElementById("lives");
                    livesDisplayed.innerHTML = this.lives;}
            }
        }

        
    }


    endGame(){
        //remove food from the DOM
        this.food.forEach(foodItem => foodItem.element.remove())
        this.foodItem = []
        // stop the engine
        this.gameIsOver = true;
        //Hide the gameScreen
        this.gameScreen.style.display = "none"
        //Show end game screen
        this.gameEndScreen.style.display = "block"
        }
}