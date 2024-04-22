class Food {
    constructor(gameScreen){

        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 550);
        this.top = 600;
        this.width = 50;
        this.height = 50;

        this.element = document.createElement("div");
        this.element.className = "foodDiv"
        this.element.style.position = "absolute";

        //size
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        //position
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.top -= 1;
        this.updatePosition()
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }
}