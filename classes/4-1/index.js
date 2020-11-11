window.onload = () => {
    console.log(`JS File Connected`);

    const player1 = new Player(`Alvaro Cortez`, 12, `Center`);
    player1.getName();
};

class Player {
    constructor(name, number, position) {
        this.name = name;
        this.playerNumber = number;
        this.position = position;
        this.active = false;
        this.speed = 0;
        this.fieldPosition = `N`;
        this.fieldLocationX = 5;
        this.fieldLocationY = 5;
        this.hasTheBall = false;
        this.kickPower = Math.ceiling(Math.random () * 10);
        this.headerPower = Math.ceiling(Math.random () * 5);
    }

    getName() {
        console.log(`This is ${this.name}, playing in ${this.position} as number ${this.playerNumber}.`)
    };

    toggleActive() {
        this.active = !this.active;
    }

    movePlayer(direction, speed, distance) {
        let originalPosition = null;
        this.fieldPosition = direction;
        this.speed = speed;
        switch(direction.toUppercase()) {
            case "N":
                for(let i = 0; i < distance; i++) {
                    this.fieldLocationY--;
                }
                break;
            case "S":
                for(let i = 0; i < distance; i++) {
                    this.fieldLocationY++;
                }
                break;
            case "W":
                for(let i = 0; i < distance; i++) {
                    this.fieldLocationX--;
                }
                break;
            case "E":
                for(let i = 0; i < distance; i++) {
                    this.fieldLocationX++;
                }
                break;                
        }
    }

    pass(playerToPassTo) {
        playerToPassTo.toggleHasBall();
        this.toggleHasBall();
    }

    kickShot(goalLocation) {
        goalLocation.blockShot(this.kickPower);
    }

    headerShot(goalLocation) {
        goalLocation.blockShot(this.headerPower);
    }

    throwBall() {
        this.hasTheBall = false;
    }

    toggleHasBall() {
        this.hasTheBall = true;
    }

}

class Goalie extends Player {
    constructor(name, number, blockPower) {
        super(name, number);
        this.position = `Goalie`; 
        // this.hasTheBall = false;
        // this.active = false;
        // this.speed = 0;
        // this.fieldPosition = `N`;
        // this.fieldLocationX = 5;
        // this.fieldLocationY = 5;
        // this.kickPower = Math.ceiling(Math.random () * 10);
        // this.headerPower = Math.ceiling(Math.random () * 5);
        this.blockPower = blockPower;
    }
}
