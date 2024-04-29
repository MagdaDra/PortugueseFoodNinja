class Bomb extends MovingItem {
    constructor (gameScreen, game){
        super(gameScreen, game)
        
        this.width = 80;
        this.height = 80;
        this.element.className = "bombDiv";
        this.element.style.position = "absolute";

       this.element.addEventListener('click', () => {
           this.game.removeBomb(this)
           clearTimeout(this.game.bombIntervalId)
           this.game.bombIntervalId = null;
       });
        

        this.image = document.createElement("img");
        this.image.draggable = false;
        this.image.src = "../images/bomb2.png"

        this.image.style.width = `${this.width}px`
        this.element.appendChild(this.image);

    }

    move() {
//        console.log("bomb moving", this.top, this.left)
            this.top -= 1;
            this.updatePosition()
    }

}