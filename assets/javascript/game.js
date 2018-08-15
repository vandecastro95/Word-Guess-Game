//hangman answers
let hangman = ["nosferatu", "citizen kane", "blazing saddles", "seven samurai"];
let lives = 5;
let wrongChar = [];
let wins = 0;
let randomWord = [];
let gameStarted = false;
let charTyped;

//starts new game
function resetGame() {
    gameStarted = false;
    lives = 5;
    wrongChar = [];
    randomWord = [];
    inputArray = [];
    randomize();
    blankArray(inputArray, randomWord);

}

function randomize() {
    //random+izing answers
    let randomGen = Math.floor(Math.random() * 4);
    console.log(randomGen);
    randomWord = hangman[randomGen].split(/(?=[\s\S])/u).filter(notaSpace);
}

//to get rid of space in arrays
function notaSpace(value) {
    return value != ' ';
}

//creating a set blank array before guessing begins
function blankArray(arr, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr.push("_");
    }
    return arr;
}

//comparing inputarray with randomWord
function guessing(char, arr, arr2) {
    let position = [];

    //inputing right guesses
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] == char) {
            arr[i] = char;
            position.push(i);
        }
    }   

    //if wrong guess was already guessed before
    for (let j = 0; j < wrongChar.length; j++) {
        if (wrongChar[j] == char) {
            position.push(j);
            console.log("Already guessed this letter");
        }
    }

    // counting wrong guesses
    if (position.length <= 0) {
        console.log("wrong!");
        lives--;
        wrongChar.push(char);
        return lives;
        return wrongChar;
    }
    return arr;
}

//checks if user won
function checkWin(arr) {
    if (arr.indexOf("_") === -1) {
        console.log("you win")
        wins++;
        resetGame();
    }

}

    document.onkeypress = function (evt) {

    if (gameStarted == false) {
        gameStarted = true;
        console.log(gameStarted);
        randomize();

        //calling blankarray
        inputArray = [];
        blankArray(inputArray, randomWord);
        return;
    }

    if (gameStarted == true) {

        if (lives == 0) {
            wins = 0;
            resetGame();
        }

        // allow letters and whitespaces only.
        if (!/[a-z]/i.test(String.fromCharCode(evt.which))) {
            evt.preventDefault();
        }

        else {
            let charCode = evt.which || evt.keyCode;
            charTyped = String.fromCharCode(charCode).toLowerCase();

            // execute character checking function
            guessing(charTyped, inputArray, randomWord);
            console.log(charTyped);
            console.log(inputArray);
            console.log(lives);
            console.log(wrongChar);
            console.log(wins);
            checkWin(inputArray);
        }


    }
}
