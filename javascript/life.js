class Life extends MovingItem {
    constructor (gameScreen, game) {
        super(gameScreen, game)

        this.width = 70;
        this.element.className = "lifeDiv";
        this.element.style.position = "absolute";
        this.roosterSound = new Audio("../audio/rooster-cry-173621.mp3")
        this.element.addEventListener('click', (e) => {
            this.game.removeLife(this)
            this.roosterSound.play()
            console.log(e.currentTarget)

        })

        this.image = document.createElement("img");
        this.image.draggable = false;
        this.image.src = "../images/rooster3.png"

        this.image.style.width = `${this.width}px`
        this.element.appendChild(this.image);

    }

    move() {

            this.top -= 2.5;
            this.updatePosition()
    }

}