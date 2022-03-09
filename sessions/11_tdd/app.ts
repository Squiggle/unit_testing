
// HANGMAN
// use an API to fetch a random word from the dictionary
// start with 10 lives
// 1. render the word, replacing any character which hasn't been guessed with '_'
// 2. prompt the user to guess a letter.
//   a. if the guess is within the word, add it to the list of correct guesses and inform the user
//   b. if the guess is NOT in the word, reduce the number of lives by one and inform the user
// 3. calculate success or failure
//   a. If all letters have been guessed correctly, render a success message and exit
//   b. If all lives have been lost, render a failure message and exit

// hints:
// ask a question like this
import * as readline from 'readline';
const rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Enter your guess. You have 10 lives remaining', guess => console.log(guess));
// ctrl+c will exit the program