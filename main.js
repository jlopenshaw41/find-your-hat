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
        
        for (let i = 0; i < this.field.length; i++) {
            console.log(this.field[i].join(""));
        }
    }

    playGame() {

        console.log(`Find your hat! Starting at the *, navigate through the field using l (left), r (right), u (up) and d (down) until you reach your hat (^). Be careful not to fall in any holes (O)!`);
        console.log(" ");

        this.print();

        let foundHat = false;

        while (!foundHat) {
            
            let direction = prompt('Which way do you want to move?');

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

    static generateField(fieldHeight, fieldWidth) {

        let field = [];
        //to generate first row of field (array)
        let firstFieldRow = [pathCharacter];
        for (let i = 0; i <= fieldWidth - 2; i++) {
            let randomNum = Math.floor(Math.random() * 2)
            if (randomNum === 0) {
                firstFieldRow.push(fieldCharacter);
            } else if (randomNum === 1) {
                firstFieldRow.push(hole);
            }
        }
        // console.log(firstFieldRow);
        field.push(firstFieldRow);

        //to generate remaining rows (arrays)
        for (let i = 0; i <= fieldHeight - 2; i++){
            let fieldRow = [];
            
            for (let i = 0; i <= fieldWidth - 1; i++) {
                
                let randomNum = Math.floor(Math.random() * 2)
                
                if (randomNum === 0) {
                    fieldRow.push(fieldCharacter);
                } else if (randomNum === 1) {
                    fieldRow.push(hole);
                }
        }
        // console.log(fieldRow);
            field.push(fieldRow);
        }

        return field;
    }
}

let randomField = Field.generateField(10, 10);

const field = new Field(randomField);

field.playGame();

// const myField = new Field([
//     ['*', '░', '░', 'O'],
//     ['░', 'O', '░', '░'],
//     ['░', 'O', '░', 'O'],
//     ['░', '^', '░', '░'],
// ]);


// // Random number from 1 - 10
// const numberToGuess = Math.floor(Math.random() * 10) + 1;
// // This variable is used to determine if the app should continue prompting the user for input
// let foundCorrectNumber = false;
 
// while (!foundCorrectNumber) {
//   // Get user input
//   let guess = prompt('Guess a number from 1 to 10: ');
//   // Convert the string input to a number
//   guess = Number(guess);
 
//   // Compare the guess to the secret answer and let the user know.
//   if (guess === numberToGuess) {
//     console.log('Congrats, you got it!');
//     foundCorrectNumber = true;
//   } else {
//     console.log('Sorry, guess again!');
//   }
// }