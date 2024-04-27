class Food extends MovingItem {
    constructor (gameScreen, game){
    super(gameScreen, game)
    
        this.element.className = "foodDiv";
        this.element.style.position = "absolute";
        this.element.addEventListener('click', (e) => {
            this.game.removeFood(this)
            console.log(e.currentTarget)
        })
        
        this.imgsArray = [];
        const pasteisPlate = "../images/pasteis-plate.png";
        const wine = "../images/wine.png";
        const bacalhau = "../images/bacalhau.png";


        if (game.score < 50){
           this.imgsArray.push(pasteisPlate)
        }
        
        if (game.score >= 50 && game.score <= 100) {
            this.imgsArray.push(pasteisPlate, wine)
        } 
        if (game.score > 100) {
            this.imgsArray.push(pasteisPlate, wine, bacalhau)
        }

        const image = document.createElement("img");
        
        image.src = this.imgsArray[Math.floor(this.imgsArray.length * Math.random())];
        image.style.width = `${this.width}px`
        this.element.appendChild(image);

        // everything above is run when we call new food in the game file. Including functions
        
    }

    move() {

        if (this.game.score < 150){
            this.top -= 1;
            this.updatePosition()
        } else {
            this.top -= 1.5;
            this.updatePosition()
        }
    }


}