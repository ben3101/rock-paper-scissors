console.log("Hello!");

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

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let result = "";
    //draw condition
    if(player === computer){
        result = `It's a draw! ${player} and ${computer}`;
    }
    //win conditions
    else if((player === "rock" && computer === "scissors") 
    || (player === "scissors" && computer === "paper")
    || (player === "paper" && computer === "rock")){
        result = `Player wins! ${player} beats ${computer}`;
    }
    //otherwise it's a loss
    else if((computer === "rock" && player === "scissors") 
    || (computer === "scissors" && player === "paper")
    || (computer === "paper" && player === "rock")){
        result = `Computer wins! ${computer} beats ${player}`;
    }else{result = `an error occured when player is ${player} and computer is ${computer}`}
    return result;
}

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

//code for a loop if wanted instead of refreshing page every time to start again
/*
let answer = "";

while(answer !=="exit"){
    answer = prompt("Welcome to my JavaScript Rock, Paper, Scissors game! Enter how many rounds you would like to play, or enter 'exit' to quit");
    if(parseInt(answer)){
        game(answer);
    }
}*/

//prompt user to start playing
let games = prompt("Welcome to my JavaScript Rock, Paper, Scissors game! Enter how many rounds you would like to play");
if(games !== ""){
    game(games);
}
