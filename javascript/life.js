class Life extends MovingItem {
    constructor (gameScreen, game) {
        super(gameScreen, game)

        this.width = 70;
        this.element.className = "lifeDiv";
        this.element.style.position = "absolute";
        this.element.addEventListener('click', (e) => {
            this.game.removeLife(this)
            console.log(e.currentTarget)

        })

        this.image = document.createElement("img");
        this.image.src = "../images/gallo.png"

        this.image.style.width = `${this.width}px`
        this.element.appendChild(this.image);

    }

    move() {

            this.top -= 1.5;
            this.updatePosition()
    }

}