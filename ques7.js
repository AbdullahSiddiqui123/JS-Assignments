//Guess game:
//store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
//a. If user guesses the same number, show “Bingo! Correct answer”.
//b. If the guessed number +1 is the secret number, show
//“Close enough to the correct answer”.

var guessNumber = +prompt("Guess a secret number from 1 to 10");
secretNumber=6;
if(guessNumber>=1 && guessNumber<=10){
    if(guessNumber===secretNumber){
    alert("Bingo! Correct answer");
    }
    else if (secretNumber==guessNumber+1){
    alert("Close enough to the correct answer");
    }

    else if(guessNumber!==secretNumber){
        alert("Wrong guess");
    }
}
else{
    alert("Enter a valid number from 1 to 10");
}