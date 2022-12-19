console.log("Hello!");

let playerWins = 0;
let computerWins = 0;
let draws = 0;
let roundNum = 1;
let maxRounds = 5;
let displayed;

function getComputerChoice(){
    let choice = "";
    let randNum = Math.floor(Math.random() * 3);

    if(randNum === 0){
        choice = "Rock";
    }
    else if(randNum === 1){
        choice = "Paper";
    }
    else if(randNum === 2){
        choice = "Scissors";
    }

    return choice;
}

//takes player choice and computer choice
//determines the result and displays it
//if max rounds, display final result plus play again option
function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let result = "";
    let finalResultsText = "";
    if(roundNum<=maxRounds){
        //draw condition
        if(player === computer){
            result = `It's a draw! ${player} and ${computer}`;
            draws++;
        }
        //win conditions
        else if((player === "rock" && computer === "scissors") 
        || (player === "scissors" && computer === "paper")
        || (player === "paper" && computer === "rock")){
            result = `Player wins! ${player} beats ${computer}`;
            playerWins++;
        }
        //otherwise it's a loss
        else if((computer === "rock" && player === "scissors") 
        || (computer === "scissors" && player === "paper")
        || (computer === "paper" && player === "rock")){
            result = `Computer wins! ${computer} beats ${player}`;
            computerWins++;
        }else{result = `an error occured when player is ${player} and computer is ${computer}`}


        //while round num is less than max number of rounds:
        
            //print the results into the paragraph on the DOM:
            let resultsDiv = document.querySelector('div.results');
            //resultsDisplay = document.querySelector('p#resultsP');
            let resultText = `Round ${roundNum} (Player: ${player} vs Computer: ${computer}): ${result}`;

            let resultsP = document.createElement('p');
            let node = document.createTextNode(resultText);
            resultsP.append(node);

            resultsDiv.appendChild(resultsP);

            //increment roundNum
            roundNum++
    }
    //display final results:
    //if the game is over and final result has not already been displayed
    if(!(roundNum<=maxRounds) && !displayed){
        let comment = "";
        if(playerWins > computerWins){
            //if player won more, congratulate
            comment = "You won the most! Congratulations!";
        }else if(playerWins < computerWins){
            //computer won more, better luck next time
            comment = "The computer beat you more. Better luck next time!";
        }
        //after max rounds done, display final results
        let resultsDiv = document.querySelector('div.results');
        let finalResultText = `
        
        That was the last round! Final results:
        Player Wins: ${playerWins}
        Computer Wins: ${computerWins}
        Draws: ${draws}
        
        ${comment}`;

        let finalResultsP = document.createElement('p');
        let node = document.createTextNode(finalResultText);
        finalResultsP.append(node);
        //set play again button code and display it
        let playAgainBtn = document.getElementById('play-again-btn');
        playAgainBtn.addEventListener('click', () => {
            window.location.reload();
        });

        resultsDiv.appendChild(finalResultsP);
        playAgainBtn.style.visibility="visible";
        displayed = true;
    }
}

//old code
/*
//get user input each round
function userInput(roundNum){
    let choice = (prompt(`Round ${roundNum}) Enter a choice for this round. Select either Rock, Paper, or Scissors.`)).toLowerCase();
    if(choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        let valid = false;
        while (!valid){
            choice = (prompt(`Round ${roundNum}) Invalid choice. Please enter 'Rock', 'Paper', or 'Scissors'.`)).toLowerCase();
            if(choice === 'rock' || choice === 'paper' || choice === 'scissors'){
                valid = true;
            }
        }
    }
    return choice;
}
*/
/*
function game(numGames){
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    for(i=0; i<numGames; i++){
        //get player's choice
        let playerSelection = userInput((i+1));
        //get computer choice
        let computerSelection = getComputerChoice();
        //play the game and store who won
        let gameResult = playRound(playerSelection, computerSelection);
        //track who won the game
        if(gameResult.includes("Computer wins")){
            computerWins++;
        }
        else if(gameResult.includes("Player wins")){
            playerWins++;
        }else if(gameResult.includes("It's a draw")){
            draws++
        }
        //display the result in console
        console.log(gameResult);
    }
    //display overall result after all the rounds
    console.log(`Result after ${numGames} games: 
    - ${playerWins} Player wins 
    - ${computerWins} Computer wins
    - ${draws} Draws`);
}
*/

//code for a loop if wanted instead of refreshing page every time to start again
/*
let answer = "";

while(answer !=="exit"){
    answer = prompt("Welcome to my JavaScript Rock, Paper, Scissors game! Enter how many rounds you would like to play, or enter 'exit' to quit");
    if(parseInt(answer)){
        game(answer);
    }
}*/

/*
//prompt user to start playing
let games = prompt("Welcome to my JavaScript Rock, Paper, Scissors game! Enter how many rounds you would like to play");
if(games !== ""){
    game(games);
}
*/
