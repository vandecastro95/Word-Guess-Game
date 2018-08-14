
        //starts new game
        function resetGame() {
            let lives = 5;
            let wrongChar = [];
            let userFinished++;
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
                userFinished++;
            }

        }

        //hangman answers
        let hangman = ["nosferatu", "citizen kane", "blazing saddles", "seven samurai"];
        let userFinished = 0;
        let lives = 5;
        let wrongChar = [];
        let wins = 0;

        {
            if (userFinished == 1) {
                resetGame();
                userFinished = 0;
                console.log("resetgame working");
                console.clear();
            }
            if (userFinished == 0) {

                document.write("press any key to start");
                document.onkeypress = function (myEvent) {

                    //random+izing answers
                    let randomGen = Math.floor(Math.random() * 4);
                    console.log(randomGen);
                    let randomWord = hangman[randomGen].split(/(?=[\s\S])/u).filter(notaSpace);
                    console.log(randomWord);

                    //calling blankarray
                    let inputArray = [];
                    blankArray(inputArray, randomWord);

                    //guessing characters
                    
                        document.onkeypress = function (evt) {
                            if (lives == 0) 
                                {
                                    userFinished++;
                                    wins = 0;
                                }

                                // allow letters and whitespaces only.
                                if (("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ").indexOf(String.fromCharCode(evt.keyCode)) === -1) {
                                    evt.preventDefault();
                                }

                                let charCode = evt.which || evt.keyCode;
                                let charTyped = String.fromCharCode(charCode).toLowerCase();

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
        }