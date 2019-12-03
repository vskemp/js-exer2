// Print Numbers
// Write a function printNumbers which is given a start number and an end number. It will print
// the numbers from one to the other, one per line:


function printNum(startNum, endNum) {
    for (let start = startNum; start<(endNum + 1); start++) {
        console.log(start);
    }
}

printNum(1, 10);

/******************************** */

// Print a Square
// Write a function printSquare which is given a size and prints a square of that size using 
// asterisks.

// > printSquare(5)
// *****
// *****
// *****
// *****
// *****
// Print a box
// Write function printBox which is given a width and height and prints a hollow box of those
// given dimensions.


function printSquare(size) {
    for (let i = 0; i<size; i++) {
        let emptyString = "";
        for (let j = 0; j<size; j++) {
            emptyString += "*";
        }
        console.log(emptyString);
    }
}

printSquare(5);


function hollowBox(width, height) {
    let emptyString = "";
    for (let i = 0; i < width; i++) {
        emptyString += "*";
    }
    console.log(emptyString);
    for (let a = 0; a < (height - 2); a++) {
        let midString = "*";
        for (let b = 0; b < width - 2; b++) {
            midString += " ";
        }
        midString += "*";
        console.log(midString);
    }
    console.log(emptyString);
}

hollowBox(5, 8);

// *************************************

// Print a Banner
// Write a function printBanner which is given some text and prints a banner with a border 
// surrounding the text. The border has to stretch to the length of the text.

// > printBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function printBanner(text) {
    let aBanner = "";
    for (let riskNumber = 0; riskNumbe < (text.length + 4); riskNumber++) {
        aBanner += "*";
    }
    console.log(aBanner);
    console.log(`* ${text} *`);
    console.log(aBanner);
}

printBanner('Welcome to DigitalCrafts');

/************************************** */

// Factor a Number
// Write a function factors which is given a number and returns an array containing all its 
//factors. What are factors? https://www.khanacademy.org/math/pre-algebra/factors-multiples/divisibility-and-factors/v/finding-factors-of-a-number

////////////////////////////////////////////

// Caesar Cipher
// Write a function cipher which is given a string, an offset, and returns the Caesar cipher 
// of the string.

// > cipher('Genius without education is like silver in the mine', 13)
// 'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'
// Caesar Cipher 2
// Write a function decipher which is given a string, an offset, and returns the original 
// message.

// > decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13)
// 'Genius without education is like silver in the mine'

function cipher(string, offset) {
    let cleanString = string.toLowerCase();
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let newString = "";
    for (let character of cleanString) {
        if (character === " ") {
            newString += " ";
        } else {
            newString += alphabet[(alphabet.indexOf(character) + offset) % 26];
        }
    }
    return newString;
}

console.log(cipher('Genius without education is like silver in the mine', 13))

console.log(cipher('travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13))

/////////////////////////////////////////

// Leetspeak
// Write a function leetspeak which is given a string, and returns the leetspeak equivalent 
// of the string. To convert text to its leetspeak version, make the following substitutions:

// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
// > leetspeak('Leet')
// l337

//////////////////////////////////////

// Long-long Vowels
// Write a function, which is given a string, return the result of extending any long vowels 
// to the length of 5.

// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'

////////////////////////////////

// Sum the numbers
// Write a function sumNumbers which is given an array of numbers and returns the sum of the 
// numbers.

// > sumNumbers([1, 4, 8])
// 13
// Just the positives
// Write a function positiveNumbers which is given an array of numbers and returns a new 
// array containing only the positive numbers within the given array.

// > positiveNumbers([1, -3, 5, -3, 0])
// [1, 5, 0]
// > positiveNumbers([1, 2, 3])
// [1, 2, 3]
// > positiveNumbers([-1, -2, -3])
// []

///////////////////////////////////////

// Matrix Addition
// Write a function matrixAdd which is given two two-dimensional arrays, and returns a new
// two-dimensional array containing their matrix sum.

// > matrixAdd([[[1, 3], [2, 4]], [[5, 2], [1, 0]]])
// [ [ 6, 5 ], [ 3, 4 ] ]
// Matrix Multiplication
// Write a function matrixMultiply which is given two two-dimensional arrays - you can assume 
// the matricies are of size 2x2. It will return the result of matrix multiplication between
// the two given matricies.

// https://www.khanacademy.org/math/precalculus/precalc-matrices/multiplying-matrices-by-matrices/v/matrix-multiplication-intro

// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]

///////////////////////////////////

// Rock Paper Scissors
// Write a function rockPaperScissors which takes the throw of player 1 and the throw of 
// player 2. A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 
// 'player 1' if player 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner.

// > rockPaperScissors('rock', 'scissors')
// 'player 1'
// > rockPaperScissors('rock', 'paper')
// 'player 2'
// > rockPaperScissors('paper', 'paper')
// 'draw'

/////////////////////////

// Tic Tac Toe
// Write a function ticTacToe which takes a two-dimensional array of size 3x3. Each cell in 
// the two dimensional array can be one of 'O', 'X', or null. The ticTacToe function will 
// determine the winner by

// returning 'O' if O makes a row
// returning 'X' if X makes a row
// return null if neither makes a row
// > ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ])
// 'O'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ])
// 'X'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
// null