const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
        this.horizontalLocation = 0;
        this.verticalLocation = 0;
    }

    print() {
        console.log(' ');
        for (let i = 0; i < this.field.length; i++) {
            console.log(this.field[i].join(""));
        }
    }

    playGame() {
        console.log(' ');
        console.log(`Find your hat! Starting at the *, navigate through the field using l (left), r (right), u (up) and d (down) until you reach your hat (^). Be careful not to fall in any holes (O)!`);

        this.print();

        let foundHat = false;

        while (!foundHat) {
            
            let direction = prompt('Which way do you want to move? ');

            if (direction === 'l') {
                if (this.field[this.verticalLocation][this.horizontalLocation - 1] === hole) {
                    console.log(`You fell down a hole! GAME OVER`);
                    foundHat = true;
                } else if (this.field[this.verticalLocation][this.horizontalLocation - 1] === hat) {
                    console.log(`YOU WIN! You found your hat, well done!`);
                    foundHat = true;
                } else if (this.horizontalLocation === 0) {
                    console.log(`Oops you've reached the fence, choose a different direction`)
                } else {
                    this.field[this.verticalLocation][this.horizontalLocation - 1] = pathCharacter;
                    this.horizontalLocation--;
                    this.print();
                }
            }
            
            if (direction === 'r') {
                if (this.field[this.verticalLocation][this.horizontalLocation + 1] === hole) {
                    console.log(`You fell down a hole! GAME OVER`);
                    foundHat = true;
                } else if (this.field[this.verticalLocation][this.horizontalLocation + 1] === hat) {
                    console.log(`YOU WIN! You found your hat, well done!`);
                    foundHat = true;
                } else if (this.horizontalLocation === (this.field[0].length - 1)) {
                    console.log(`Oops you've reached the fence, choose a different direction`)
                } else {
                    this.field[this.verticalLocation][this.horizontalLocation + 1] = pathCharacter;
                    this.horizontalLocation++;
                    this.print();
                }
            }

            if (direction === 'd') {
                if (this.verticalLocation === (this.field.length - 1)) {
                    console.log(`Oops you've reached the fence, choose a different direction`)
                } else if (this.field[this.verticalLocation + 1][this.horizontalLocation] === hat) {
                    console.log(`YOU WIN! You found your hat, well done!`);
                    foundHat = true;
                } else if (this.field[this.verticalLocation + 1][this.horizontalLocation] === hole) {
                    console.log(`You fell down a hole! GAME OVER`);
                    foundHat = true;
                } else {
                    this.field[this.verticalLocation + 1][this.horizontalLocation] = pathCharacter;
                    this.verticalLocation++;
                    this.print();
                }
            }

            if (direction === 'u') {
                if (this.verticalLocation === 0) {
                    console.log(`Oops you've reached the fence, choose a different direction`)
                } else if (this.field[myField.verticalLocation - 1][this.horizontalLocation] === hat) {
                    console.log(`YOU WIN! You found your hat, well done!`);
                    foundHat = true;
                } else if (this.field[this.verticalLocation - 1][this.horizontalLocation] === hole) {
                    console.log(`You fell down a hole! GAME OVER`);
                    foundHat = true;
                } else {
                    this.field[this.verticalLocation - 1][this.horizontalLocation] = pathCharacter;
                    this.verticalLocation--;
                    this.print();
                }
            }
        }

    }

    static generateField(fieldHeight, fieldWidth, holePercentage) {
        let numberOfTimesToLoop = ((fieldHeight * fieldWidth) / 100) * holePercentage;
        let field = [];

        //to generate initial field
        for (let i = 0; i <= fieldHeight - 1; i++) {
            let fieldRow = [];
            for (let i = 0; i <= fieldWidth - 1; i++) {
                fieldRow.push(fieldCharacter);
            }
            field.push(fieldRow);
        }

        //to add holes to field

        for (let i = 0; i < numberOfTimesToLoop; i++) {
            let randomIndex1 = Math.floor(Math.random() * fieldHeight);
            let randomIndex2 = Math.floor(Math.random() * fieldWidth);
            field[randomIndex1][randomIndex2] = hole;
        }

        //to add hat to field
        let randomIndex3 = Math.floor(Math.random() * fieldHeight);
        let randomIndex4 = Math.floor(Math.random() * fieldWidth);

        //to check hat isn't going to be put on starting square
        if (randomIndex3 === 0 && randomIndex4 === 0) {
            randomIndex3 += 1; 
        }
        
        field[randomIndex3][randomIndex4] = hat;

        //to add starting character to field 

        field[0][0] = pathCharacter;

        return field;
    }
}

let randomField = Field.generateField(10, 10, 30);

const myField = new Field(randomField);

myField.playGame();
