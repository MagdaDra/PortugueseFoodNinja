class Bomb extends MovingItem {
    constructor (gameScreen, game){
        super(gameScreen, game)
   
        this.element.className = "bombDiv";
        this.element.style.position = "absolute";
        //this.wasClicked = false; 

        this.element.addEventListener('click', () => {
            this.game.removeBomb(this)
            //this.wasClicked = true;
            //return true;
        });
        

        this.image = document.createElement("img");
        this.image.src = "../images/bomb.png"

        this.image.style.width = `${this.width}px`
        this.element.appendChild(this.image);

    }

    move() {
//        console.log("bomb moving", this.top, this.left)
            this.top -= 1;
            this.updatePosition()
    }

/*     wasClicked() {
        this.element.addEventListener('click', () => {
            this.game.removeBomb(this)
            //this.wasClicked = true;
            return true;
        })
    } */



}