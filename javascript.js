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
  } else if(playerSelection == "Rock" && computerSelection == "Scissors") {
    //when human wins conditions
    showChoice.textContent = `${playerSelection} beats ${computerSelection}!`;
    humanScoring (5);
  } else if(playerSelection == "Paper" && computerSelection == "Rock") {
    showChoice.textContent = `${playerSelection} beats ${computerSelection}!`;
    humanScoring (5);
  } else if(playerSelection == "Scissors" && computerSelection == "Paper") {
    showChoice.textContent = `${playerSelection} beats ${computerSelection}!`;
    humanScoring (5);
  } else {
    showChoice.textContent = `${computerSelection} beats ${playerSelection}!`;
    //when machine wins condition
    machineScoring (5);
  }
    }

// let playerSelection = prompt("Choose the deadly weapon!");
// console.log(playRound(playerSelection, computerSelection));

function humanScoring () {
  if (humanScore.textContent < 5) {
    humanScore.textContent++;
  } else {
    winner.textContent = 'Human Won!';
  }
  }

function machineScoring () {
  if (machineScore.textContent < 5) {
    machineScore.textContent++;
  } else {
    winner.textContent = 'Machine Won!';
  }
}

function clear(showChoice) {
  if (showChoice.length > 0) {
    showChoice = "";
  } else {
    return showChoice;
  }
}

const rock = document.getElementById('rock');


rock.addEventListener('click', function() {
  let computerSelection = getComputerChoice(array);
  playRound(playerSelection = "Rock", computerSelection);
  clear(showChoice);
});

const paper = document.getElementById('paper');

  paper.addEventListener('click', function () {
    let computerSelection = getComputerChoice(array);
    playRound(playerSelection = "Paper", computerSelection);
    clear(showChoice);
});

const scissors = document.getElementById('scissors');

  scissors.addEventListener('click', function() {
    let computerSelection = getComputerChoice(array);
    playRound(playerSelection = "Scissors", computerSelection);
    clear(showChoice);
});


const resetBtn = document.getElementById('reset');
  resetBtn.addEventListener('click', function() {

  });



const showChoice = document.getElementById('showing-choice');

let humanScore = document.getElementById('left');

let machineScore = document.getElementById('right');

const winner = document.getElementById('winner');

const result = document.getElementById('result');









