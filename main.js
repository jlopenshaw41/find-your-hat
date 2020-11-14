const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
    }

    print() {
        
        for (let i = 0; i < this.field.length; i++) {
            console.log(this.field[i].join(" "));
        }
    }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

myField.print();

const direction = prompt('Which way do you want to move?');
console.log(`You entered ${direction}`);

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