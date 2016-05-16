////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
  if (move !== "")  {
    return move;
  } else {
    return getInput();
  }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
}

function getComputerMove(move) {
  if (move !== "")  {
    return move;
  } else {
    return randomPlay();
  }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove == "rock" && computerMove == "scissors")  {
      winner = "player";
    } else if (playerMove == "paper" && computerMove == "rock") {
      winner = "player";
    } else if (playerMove == "scissors" && computerMove == "paper") {
      winner = "player";
    } else if (playerMove == computerMove) {
      winner = "tie";
    } else {
      winner = "computer"
    }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    if (playerMove == "rock" && computerMove == "scissors") {
    	winner = "player";
    } else if (playerMove == "paper" && computerMove == "rock") {
    	winner = "player";
    } else if (playerMove == "scissors" && computerMove == "paper") {
    	winner = "player";
    } else if (playerMove == computerMove) {
    	winner = "tie";
    } else {
    	winner = "computer";
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
    	getInput();
    	randomPlay();
    	/* How do I reference the start of the game? 
    	Does it start with getInput and randomPlay or does it start with getWinner?
    	*/

    	if (getWinner("player")) {
    		playerWins++
    	} else if (getWinner("computer")) {
    		computerWins++;
  		}
  		/* I thought I read that the return statement will return that value to your function.
  		In this case, for function getWinner I returned a value for var winner and I want to use that here.
  		Do I call the output of the function the same way I identify the arguments?
  		*/
    	if (playerWins == 5) {
    	console.log("Player Wins!");
    	} else if (computerWins == 5) {
    	console.log("Computer Wins!");
    
    console.log("Score is Player " + playerWins + ", computer " + computerWins);
}
