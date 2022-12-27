//rock paper scissors project
// getComputerChoice function with random input rock, paper, scissors
function getComputerChoice() {
  return "Rock" || "Paper" || "Scissors";
}


//function with two parameters that is going to play the round of the game
function playRound(playerSelection, computerSelection) {
//   //case insensitive so that user can input rock Rock roCk and etc
//   //must return the function call for example "You Lose! Paper beats Rocks"

  playerSelection = prompt("Select a weapon of a choice");
  //using prompt for user input
  computerSelection = getComputerChoice();
  //calls the function to get the computer choice
  console.log(playRound(playerSelection, computerSelection));

}

//function game that calls playRound
//inside that function has a loop that plays the game five times
//this function will keep the score and it will declare a winner or loser
function game() {
  playRound();

  for(let i = 0; i < 5; i++) {
    //displaying the result of a each round
    //and winner in the end
  }
}
