//hangman answers
let hangman = ["the godfather", "citizen kane", "blazing saddles", "fight club", "the lion king", "the godfather" ];
let lives = 5;
let wrongChar = [];
let wins = 0;
let randomWord = [];
let gameStarted = false;
let charTyped;

//change gif depending on hangman word

//starts new game
function resetGame() {
    gameStarted = false;
    lives = 5;
    wrongChar = [];
    randomWord = [];
    inputArray = [];
    let randomGen;

}

function randomize() {
    //random+izing answers
    randomGen = Math.floor(Math.random() * 5);
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

//function that displays js values in html

function displayValues() {
    document.querySelector('.jsLives').innerText = lives;
    document.querySelector('.jsWins').innerText = wins;
    document.querySelector('.jsinputArray').innerText = inputArray.join(" ");
    document.querySelector('.jswrongChar').innerText = wrongChar.join(" ");
}

// function changeGif () {
//     $(function(){
//         if(randomGen == 0)
//         {
//             document.querySelector('.contentBox').removeClass( "simpsons").addClass("godfather");
//         }
        
//     });    
// } 

//checks if user won
function checkWin(arr) {
    
    displayValues();

    if (arr.indexOf("_") === -1) {
        wins++;
        // changeGif ()
        
        document.querySelector('.jsinputArray').innerText = hangman[randomGen]; 
        resetGame();
        
        
    }

    if (lives == 0) {
        wins = 0;
        arr = randomWord;
        document.querySelector('.jsinputArray').innerText = hangman[randomGen]; 
        
        resetGame();
    }

    
}


    document.querySelector('.jsinputArray').innerText = "Press any key to start!";
    document.onkeyup = function (evt) {

    if (gameStarted == true) {
        displayValues();
        

        

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
        }

        
        
        checkWin(inputArray);
        
        
    } 

    // if (gameStarted == false) 
    else {
        
        randomize();

        //calling blankarray
        inputArray = [];
        blankArray(inputArray, randomWord);
        gameStarted = true;
        displayValues();
        return;
        
    }

    
}
