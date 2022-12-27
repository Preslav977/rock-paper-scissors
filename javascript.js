//RPS project
//function getComputerChoice 
//that outputs the computer random choices rock paper and scissor
//using array as parameter to randomize the choices 

function getComputerChoice(array) {

  const randomIndex = Math.floor(Math.random() * array.length);

  const item = array[randomIndex];

  return item;

}

const array = ["Rock", "Paper", "Scissors"];

//function that plays round of RPS
//with both player and computer

function playRound(playerSelection, computerSelection) {
  //thats the main logic of the project
  //when player selects rock and computer selects paper
  //player win and etc.
  //checking with if's when player wins
  //computer wins 
  //when its a draw

  if (playerSelection === computerSelection) {
    //starting when its a draw so when the player wins
    //with else i can easily say computer wins
    //draw conditions
    return "It's a draw!";
  } else if(playerSelection == "Paper" && computerSelection == "Rock") {
    //when human wins conditions
    return `Human Wins ${playerSelection} beats ${computerSelection}!`;
  } else if(playerSelection == "Scissors" && computerSelection == "Paper") {
    return `Human Wins ${playerSelection} beats ${computerSelection}!`;
  } else if(playerSelection == "Rock" && computerSelection == "Scissors") {
    return `Human Wins ${playerSelection} beats ${computerSelection}!`;
  } else {
    return `Machine Wins ${computerSelection} beats ${playerSelection}!`;
    //when machine wins condition
  }
}

// let playerSelection = prompt("Choose the deadly weapon!");
const computerSelection = getComputerChoice(array);
// console.log(playRound(playerSelection, computerSelection));


function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Choose the deadly weapon!");
    console.log(playRound(playerSelection, computerSelection));
  }
}
  console.log(game(5));