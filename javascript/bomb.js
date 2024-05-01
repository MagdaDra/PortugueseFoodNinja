class Bomb extends MovingItem {
    constructor (gameScreen, game){
        super(gameScreen, game)
        
        this.width = 80;
        this.height = 80;
        this.element.className = "bombDiv";
        this.element.style.position = "absolute"
        this.bombSound = new Audio("../audio/clock-ticking.mp3")
        this.bombSound.play()

        setTimeout(() => {
            this.bombSound.pause()
            }, 5000)

/*         if(this.game.gameIsOver === true) {
           this.bombSound.pause()
            } */  
        

       this.element.addEventListener('click', () => {
           this.game.removeBomb(this);
           clearTimeout(this.game.bombIntervalId);
           this.game.bombIntervalId = null;
           this.bombSound.pause();
        });
        

        this.image = document.createElement("img");
        this.image.draggable = false;
        this.image.src = "../images/bomb2.png";

        this.image.style.width = `${this.width}px`;
        this.element.appendChild(this.image);

    }


    move() {
//        console.log("bomb moving", this.top, this.left)
            this.top -= 1;
            this.updatePosition();
    }

}