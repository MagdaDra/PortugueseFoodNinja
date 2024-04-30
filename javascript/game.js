class Game {
    constructor(){
        this.startScreen = document.getElementById("game-start")
        this.gameScreen = document.getElementById("game-screen")
        this.gameContainer = document.getElementById("game-container")
        this.gameEndScreen = document.getElementById("game-end")
        this.height = 600;
        this.width = 900;
        this.food = [];
        this.bomb = [];
        this.life = [];
        this.score = 0;
        this.lives = 5;
        this.gameIsOver = false;
        this.gameIntervalId = null;
        this.gameLoopFrequency = Math.floor(1000/60)
        this.bombIntervalId = null;
        
        
    }

    start(){
        this.gameScreen.style.width = `${this.width}px`
        this.gameScreen.style.height = `${this.height}px`

        //remove the startScreen from the page
        this.startScreen.style.display = "none"

        //show the gameScreen 
        this.gameContainer.style.display = "flex"
        this.gameScreen.style.display = "flex"

        //remove the endScreen from the page
        this.gameEndScreen.style.display = "none"

        //display lives = 3
        let livesDisplayed = document.getElementById("lives");
        livesDisplayed.innerHTML = this.lives;

        //display score = 0

        let scoreDisplayed = document.getElementById("score");
        scoreDisplayed.innerHTML = 0;

        //create bombs
        setInterval(() => {
           this.bomb.push(new Bomb(this.gameScreen, this))
        }, 10000)

        console.log('start function')

        //start the loop
        this.gameIntervalId = setInterval(() => {
            this.gameLoop()
        }, this.gameLoopFrequency)
    }



    gameLoop(){
        this.update()
        this.updateBomb()
        this.updateLife()
        if(this.gameIsOver){
            clearInterval(this.gameIntervalId)
        }
    }


    removeFood(foodItem){
        foodItem.element.remove();
        const foodIndex = this.food.indexOf(foodItem)
        this.food.splice(foodIndex, 1);
        this.score += 10;
        let scoreDisplayed = document.getElementById("score");
        scoreDisplayed.innerHTML = this.score;
    }

    removeBomb(bombItem){
        bombItem.element.remove();
        const bombIndex = this.bomb.indexOf(bombItem)
        this.bomb.splice(bombIndex, 1);
    }

    removeLife(lifeItem){
        lifeItem.element.remove();
        const lifeIndex = this.life.indexOf(lifeItem)
        this.life.splice(lifeIndex, 1);
        this.lives += 1;
        let livesDisplayed = document.getElementById("lives");
        livesDisplayed.innerHTML = this.lives;

    }



    update(){

        //remove "&& this.food.length < 1" for more obstacles to appear or increase the number

        // Initial level
        if(this.score < 50 && this.food.length < 1) {
            
            this.food.push(new Food(this.gameScreen, this))
        }
        // 2nd level
        if (this.score >= 50 && this.score < 100 && this.food.length < 3) {

            this.food.push(new Food(this.gameScreen, this))
        }
        // 3rd level
        if (this.score >= 100 && this.score < 150 && this.food.length < 5) {

            this.food.push(new Food(this.gameScreen, this))
        }
        // 4th level

        if (this.score >= 150 && this.food.length < 7) {

            this.food.push(new Food(this.gameScreen, this))
        }


        for(let i = 0; i < this.food.length; i++){
            const foodItem = this.food[i]

            foodItem.move();


            if (foodItem.top < -50) {

                foodItem.element.remove();
                this.food.splice(i, 1);
                this.lives--;
                if (this.lives === 0) {
                    this.endGame();
                    let livesDisplayed = document.getElementById("lives");
                    livesDisplayed.innerHTML = this.lives;
                } else {
                    let livesDisplayed = document.getElementById("lives");
                    livesDisplayed.innerHTML = this.lives;}
            }
        }        
    }

    updateBomb() {
/* -------------the bomb was set basing on the score ----------------------

            if( this.score === 20  && this.bomb.length < 1 ||
            this.score === 50 && this.bomb.length < 1 ||
            this.score === 70 && this.bomb.length < 1 ||
            this.score === 90 && this.bomb.length < 1)
         
            {
            this.bomb.push(new Bomb(this.gameScreen, this))
            } */

//------------------------------------------------------------------------          

         for(let i = 0; i < this.bomb.length; i++){
            const bombItem = this.bomb[i]

            bombItem.move();
            
            if(this.bombIntervalId === null){
                this.bombIntervalId = setTimeout(() => {
                    let explosionSound = new Audio("../audio/hq-explosion.mp3")
                    explosionSound.play()
                    this.endGame()
                }, 5000)
                
            }
            console.log(bombItem)
        }
    }

    updateLife() {
        if( this.score === 150 && this.life.length < 1 ||
            this.score === 300 && this.life.length < 1 ||
            this.score === 450 && this.life.length < 1  
        ) {

            this.life.push(new Life(this.gameScreen, this))
        }

        for(let i = 0; i < this.life.length; i++){
            const lifeItem = this.life[i]

            lifeItem.move();
        }

    }


    endGame(){
        //remove food from the DOM
        this.food.forEach(foodItem => foodItem.element.remove())
        this.foodItem = []
        //remove bomb from the DOM
        this.bomb.forEach(bombItem => bombItem.element.remove())
        this.bombItem = []
        // remove life from the DOM
        this.life.forEach(lifeItem => lifeItem.element.remove())
        this.lifeItem = []
        // stop the engine
        this.gameIsOver = true;
        //Hide the gameScreen
        this.gameScreen.style.display = "none"
        //Show end game screen
        this.gameEndScreen.style.display = "flex"
        let messageDisplayed = document.getElementById("game-end-message");
        messageDisplayed.innerHTML = "Game over";


        
        }
}