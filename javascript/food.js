class Food {
    constructor(gameScreen, game){

        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 450 + 50);
        this.top = 600;
        this.width = 50;
        this.height = 50;
    

        this.element = document.createElement("div");
        this.element.className = "foodDiv"
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


        this.game = game
        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.top -= 0.1;
        this.updatePosition()
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }


}