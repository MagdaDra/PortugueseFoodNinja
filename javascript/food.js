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




        this.game = game
        this.gameScreen.appendChild(this.element);

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


    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }


}