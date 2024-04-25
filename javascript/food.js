class Food {
    constructor(gameScreen, game){

        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 450 + 50);
        this.top = 600;
        this.width = 50;
        this.height = 50;
    

        this.element = document.createElement("div");
        this.element.className = "foodDiv";
        this.element.style.position = "absolute";
        this.element.addEventListener('click', (e) => {
            this.game.removeFood(this)
            console.log(e.currentTarget)
        })
        
        
        //size
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        
        //position
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        
        const imgsArray = ["../images/pasteis-plate.png", "../images/wine.png", "../images/bacalhau.png"]
        const image = document.createElement("img");
        
        image.src = imgsArray[Math.floor(imgsArray.length * Math.random())];
        image.style.width = `${this.width}px`
        this.element.appendChild(image);




        this.game = game
        this.gameScreen.appendChild(this.element);

        // everything above is run when we call new food in the game file. Including functions
        
    }

    move() {

        if (this.game.score < 100){
            this.top -= 1;
            this.updatePosition()
        } else {
            this.top -= 1.5;
            this.updatePosition()
        }
    }


    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }


}