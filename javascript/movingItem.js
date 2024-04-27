class MovingItem {
    constructor(gameScreen, game) {    
    
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 450 + 50);
        this.top = 600;
        this.width = 50;
        this.height = 50;

        
        this.element = document.createElement("div");
        //size
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        
        //position
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.game = game
        this.gameScreen.appendChild(this.element);

    }

    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }
}